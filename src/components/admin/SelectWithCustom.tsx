// Generalizes the "__custom__" free-input escape hatch first written inline
// in departures/new/page.tsx's package selector — every other admin
// record-picker dropdown (lodge, guide, vehicle, departure, staff, client,
// invoice, booking) is a plain fixed-option <select> with no way to enter
// something that isn't already a row in the system. This is a controlled
// pair of primitives (not a component owning its own state) so it drops
// into the existing `useState` form-object + `update()` convention used
// throughout admin forms with just one extra field added to that object.
export const CUSTOM_OPTION_VALUE = '__custom__'

export default function SelectWithCustom<T>({
  options,
  getOptionValue,
  getOptionLabel,
  value,
  onChange,
  customValue,
  onCustomChange,
  placeholder = '— Select —',
  customOptionLabel = 'Other / not listed…',
  customPlaceholder = 'Enter a name…',
  customLabel,
  required,
  className = 'field-input',
}: {
  options: T[]
  getOptionValue: (opt: T) => string
  getOptionLabel: (opt: T) => string
  value: string
  onChange: (value: string) => void
  customValue: string
  onCustomChange: (value: string) => void
  placeholder?: string
  customOptionLabel?: string
  customPlaceholder?: string
  // Optional label shown above the free-text input when it's revealed; omit
  // to just show the input inline right below the select with no label.
  customLabel?: string
  required?: boolean
  className?: string
}) {
  const isCustom = value === CUSTOM_OPTION_VALUE
  return (
    <>
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={className}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={getOptionValue(opt)} value={getOptionValue(opt)}>{getOptionLabel(opt)}</option>
        ))}
        <option value={CUSTOM_OPTION_VALUE}>{customOptionLabel}</option>
      </select>
      {isCustom && (
        <div className="mt-2">
          {customLabel && <label className="field-label">{customLabel}</label>}
          <input
            required={required}
            value={customValue}
            onChange={(e) => onCustomChange(e.target.value)}
            className={className}
            placeholder={customPlaceholder}
          />
        </div>
      )}
    </>
  )
}
