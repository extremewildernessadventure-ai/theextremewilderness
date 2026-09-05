import { notFound } from 'next/navigation'
import { getDb } from '@/lib/db'
import { getPackageRowById, getFullPackage } from '@/lib/packages'
import DetailTwoColumn from '@/components/admin/DetailTwoColumn'
import DeleteButton from '@/components/admin/DeleteButton'
import PackageEditForm from './PackageEditForm'
import PackageIncludedEditor from './PackageIncludedEditor'
import PackageWhyDifferentEditor from './PackageWhyDifferentEditor'
import PackageItineraryEditor from './PackageItineraryEditor'
import PackageFaqEditor from './PackageFaqEditor'
import PackageGalleryEditor from './PackageGalleryEditor'
import PackagePricingTiersEditor from './PackagePricingTiersEditor'
import PackageFamilyPricingEditor from './PackageFamilyPricingEditor'
import PackageWildlifeTargetsEditor from './PackageWildlifeTargetsEditor'
import PackageStatusToggle from './PackageStatusToggle'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

export default async function PackageDetailPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const row = await getPackageRowById(db, Number(id))
  if (!row) notFound()

  const pkg = await getFullPackage(db, row.slug)
  if (!pkg) notFound()

  return (
    <DetailTwoColumn
      backHref="/admin/packages"
      backLabel="Back to Packages"
      title={pkg.name}
      titleBadge={<PackageStatusToggle id={row.id} status={row.status} />}
      subtitle={`/${row.slug}`}
      main={
        <>
          <PackageItineraryEditor id={row.id} itinerary={pkg.itinerary} />
          <PackageIncludedEditor id={row.id} pkg={pkg} />
          <PackageWhyDifferentEditor id={row.id} pkg={pkg} />
          <PackageWildlifeTargetsEditor id={row.id} wildlifeTargets={pkg.wildlifeTargets ?? []} />
          <PackageGalleryEditor id={row.id} gallery={pkg.gallery} />
          <PackagePricingTiersEditor id={row.id} pricingTiers={pkg.pricingTiers ?? []} />
          <PackageFamilyPricingEditor id={row.id} familyPricing={pkg.familyPricing ?? []} />
          <PackageFaqEditor id={row.id} faq={pkg.faq ?? []} />
          <div className="pt-2">
            <DeleteButton
              endpoint={`/api/admin/packages/${row.id}`}
              confirmMessage={`Delete package "${pkg.name}"? This cannot be undone.`}
              redirectTo="/admin/packages"
              label="Delete Package"
            />
          </div>
        </>
      }
      sidebar={<PackageEditForm id={row.id} pkg={pkg} />}
    />
  )
}
