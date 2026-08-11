// Fixed company bank details, shown on invoices as an alternative to paying
// via the generated Pesapal link. Not a secret — this is information meant
// to be freely shared with clients so they can wire a bank transfer.
export const BANK_DETAILS = {
  beneficiaryName: 'Extreme Wilderness Adventure',
  beneficiaryAccount: '0294091001',
  swiftCode: 'DTKETZTZ',
  bankName: 'DIAMOND TRUST BANK TANZANIA LTD',
  bankAddress: 'Arusha Branch, Sokoine Drive, Arusha, Tanzania',
  correspondentBank: {
    name: 'Citibank N.A New York',
    swift: 'CITIUS33',
    account: '36392851',
  },
} as const
