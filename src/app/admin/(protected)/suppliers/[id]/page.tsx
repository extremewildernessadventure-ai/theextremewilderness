import { notFound } from 'next/navigation'
import { getDb } from '@/lib/db'
import type { Supplier, SupplierContract, SupplierPayment } from '@/lib/ops'
import DetailTwoColumn from '@/components/admin/DetailTwoColumn'
import DeleteButton from '@/components/admin/DeleteButton'
import SupplierEditForm from './SupplierEditForm'
import SupplierContractPanel from './SupplierContractPanel'
import SupplierPaymentPanel from './SupplierPaymentPanel'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

export default async function SupplierDetailPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const supplier = await db.prepare('SELECT * FROM suppliers WHERE id = ?').bind(id).first<Supplier>()
  if (!supplier) notFound()

  const [{ results: contracts }, { results: payments }] = await Promise.all([
    db.prepare('SELECT * FROM supplier_contracts WHERE supplier_id = ? ORDER BY created_at DESC').bind(id).all<SupplierContract>(),
    db.prepare('SELECT * FROM supplier_payments WHERE supplier_id = ? ORDER BY created_at DESC').bind(id).all<SupplierPayment>(),
  ])

  return (
    <DetailTwoColumn
      backHref="/admin/suppliers"
      backLabel="Back to Suppliers"
      title={supplier.name}
      main={
        <>
          <SupplierContractPanel supplierId={supplier.id} contracts={contracts} />
          <SupplierPaymentPanel supplierId={supplier.id} payments={payments} />
          <div className="pt-2">
            <DeleteButton
              endpoint={`/api/admin/suppliers/${supplier.id}`}
              confirmMessage={`Delete supplier ${supplier.name}? This cannot be undone.`}
              redirectTo="/admin/suppliers"
              label="Delete Supplier"
            />
          </div>
        </>
      }
      sidebar={<SupplierEditForm supplier={supplier} />}
    />
  )
}
