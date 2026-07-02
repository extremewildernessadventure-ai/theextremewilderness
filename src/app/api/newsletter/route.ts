import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM = process.env.RESEND_FROM ?? 'EWA Newsletter <noreply@theextremewilderness.com>'
const TO   = process.env.RESEND_TO   ?? 'info@theextremewilderness.com'

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json() as { name?: string; email?: string }

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const [firstName, ...rest] = (name ?? '').trim().split(' ')
    const lastName = rest.join(' ')

    const { error } = await resend.contacts.create({
      email,
      firstName: firstName || '',
      lastName:  lastName  || '',
      audienceId: process.env.RESEND_AUDIENCE_ID!,
      unsubscribed: false,
    })

    if (error) {
      console.error('Resend contact error:', error)
      return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
    }

    // Send operator notification so the subscription appears in Resend → Emails
    await resend.emails.send({
      from: FROM,
      to:   TO,
      subject: `New newsletter subscriber: ${email}`,
      html: `<p><strong>Name:</strong> ${name || '—'}</p><p><strong>Email:</strong> ${email}</p>`,
    }).catch((e) => console.error('Newsletter notification error:', e))

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Newsletter API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
