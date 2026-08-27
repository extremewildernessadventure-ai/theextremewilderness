import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { computeDiscountCode } from '@/lib/discountCode'
import { saveLead, markLeadEmailSent } from '@/lib/leads'
import { upsertSubscriber } from '@/lib/newsletter'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as { name?: string; email?: string; source?: string }
    const { name, email, source } = body

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const [firstName, ...rest] = (name ?? '').trim().split(' ')
    const lastName = rest.join(' ')

    const { id: leadId } = await saveLead({
      type: 'newsletter',
      name: name ?? null,
      email,
      subject: 'Newsletter signup',
      payload: body,
    })

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.contacts.create({
      email,
      firstName: firstName || '',
      lastName:  lastName  || '',
      audienceId: process.env.RESEND_AUDIENCE_ID!,
      unsubscribed: false,
    })

    if (error) {
      console.error('Resend contact error:', error)
      if (!leadId) return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
    } else if (leadId) {
      await markLeadEmailSent(leadId)
    }

    await upsertSubscriber(email, source ?? 'newsletter')

    if (source === 'exit-intent') {
      return NextResponse.json({ success: true, code: computeDiscountCode(email) })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Newsletter API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
