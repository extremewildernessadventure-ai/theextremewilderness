const EWA_OPERATOR_NAME = 'EWA Safari Outfitters'

export default function OperatorBadge({ operatorName, directLabel, partnerLabel }: {
  operatorName: string
  directLabel: string
  partnerLabel: string
}) {
  const isEwa = operatorName === EWA_OPERATOR_NAME
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide ${
      isEwa ? 'bg-brand text-white' : 'bg-gray-100 text-gray-700 border border-gray-200'
    }`}>
      {isEwa ? directLabel : partnerLabel}
    </span>
  )
}
