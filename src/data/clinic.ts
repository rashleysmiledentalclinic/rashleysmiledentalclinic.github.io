/**
 * Single source of truth for clinic information shown across the site.
 * Values marked DEMO are placeholders for presentation and should be replaced
 * with real data before launch.
 */
import type { DayHours, Weekday } from '../lib/time'

export const CLINIC = {
  name: 'CazzASmile Dental Clinic',
  shortName: 'CazzASmile',
  tagline: 'Casting smiles, one tooth at a time.',
  address: 'Taguig, Manila',
  /** IANA time zone used for "open now" and appointment slot calculations. */
  timeZone: 'Asia/Manila',
  /** DEMO: placeholder founding date. */
  establishedYear: 2021,
  establishedMonth: 'February',
  /** DEMO: placeholder founding story. */
  story:
    'CazzASmile opened its doors in February 2021 with a single chair and a simple conviction: that a dental visit in Taguig should feel as calm and personal as a conversation with a friend. Too many of our neighbours were putting off care because of fear, cost or confusion. We set out to change that with honest price ranges, unhurried appointments and a space that feels more like a living room than a clinic.',
  doctor: {
    fullName: 'Cazzy J. Maglaway',
    title: 'DMD',
    role: 'Doctor of Dental Medicine · General Dentist',
    /** DEMO: placeholder biography for presentation. */
    bio: 'Dr. Maglaway is a general dentist who believes prevention is the kindest treatment. She takes time to explain every finding in plain language, offers options at different price points, and makes sure anxious patients, children included, leave with a reason to smile.',
  },
  contact: {
    phoneDisplay: '0908 765 4321',
    /** E.164 form of 0908 765 4321 (Philippine mobile). */
    phoneHref: 'tel:+639087654321',
    email: 'cazzasmile@clinic.com',
  },
} as const

/**
 * Weekly opening hours in minutes from midnight (clinic local time).
 * `null` means closed for the whole day. 0 = Sunday … 6 = Saturday.
 */
export const WEEKLY_HOURS: Readonly<Record<Weekday, DayHours | null>> = {
  0: null,
  1: { open: 10 * 60, close: 19 * 60, breakStart: 13 * 60, breakEnd: 14 * 60 },
  2: { open: 10 * 60, close: 19 * 60, breakStart: 13 * 60, breakEnd: 14 * 60 },
  3: { open: 10 * 60, close: 19 * 60, breakStart: 13 * 60, breakEnd: 14 * 60 },
  4: { open: 10 * 60, close: 19 * 60, breakStart: 13 * 60, breakEnd: 14 * 60 },
  5: { open: 10 * 60, close: 19 * 60, breakStart: 13 * 60, breakEnd: 14 * 60 },
  6: { open: 9 * 60, close: 17 * 60 },
}

/** Human-readable summary of the break, shown next to the hours. */
export const BREAK_NOTE = 'Lunch break 1:00 – 2:00 PM on weekdays'

/** Appointment slot granularity in minutes. */
export const SLOT_STEP_MINUTES = 30
/** Earliest same-day booking lead time in minutes. */
export const BOOKING_LEAD_MINUTES = 60
/** How far ahead patients may book, in days. */
export const BOOKING_HORIZON_DAYS = 60

export type ServiceCategory = 'Preventive' | 'Restorative' | 'Cosmetic' | 'Kids'

export interface Service {
  id: string
  name: string
  category: ServiceCategory
  /** Price range in Philippine pesos. DEMO values. */
  priceMin: number
  priceMax: number
  /** Appended to the price, e.g. "per tooth". */
  priceUnit?: string
  /** Appointment length in minutes; used to block slots. */
  durationMinutes: number
  description: string
  icon: ServiceIcon
  popular?: boolean
}

export type ServiceIcon =
  | 'tooth'
  | 'sparkle'
  | 'shield'
  | 'drill'
  | 'crown'
  | 'braces'
  | 'xray'
  | 'root'
  | 'extract'
  | 'implant'
  | 'denture'
  | 'child'

export const SERVICE_CATEGORIES: readonly ServiceCategory[] = [
  'Preventive',
  'Restorative',
  'Cosmetic',
  'Kids',
]

/** DEMO: general-dentistry services with indicative peso price ranges. */
export const SERVICES: readonly Service[] = [
  {
    id: 'consultation',
    name: 'Consultation & Oral Exam',
    category: 'Preventive',
    priceMin: 500,
    priceMax: 800,
    durationMinutes: 30,
    description: 'A full check of teeth, gums and bite, with a clear plan and price range before anything is done.',
    icon: 'tooth',
  },
  {
    id: 'cleaning',
    name: 'Oral Prophylaxis (Cleaning)',
    category: 'Preventive',
    priceMin: 1000,
    priceMax: 1500,
    durationMinutes: 45,
    description: 'Gentle ultrasonic scaling and polishing to lift plaque, tartar and surface stains.',
    icon: 'sparkle',
    popular: true,
  },
  {
    id: 'fluoride',
    name: 'Fluoride Treatment',
    category: 'Preventive',
    priceMin: 700,
    priceMax: 1000,
    durationMinutes: 20,
    description: 'A quick varnish that hardens enamel and helps stop cavities before they start.',
    icon: 'shield',
  },
  {
    id: 'sealants',
    name: 'Pit & Fissure Sealants',
    category: 'Preventive',
    priceMin: 800,
    priceMax: 1200,
    priceUnit: 'per tooth',
    durationMinutes: 30,
    description: 'A protective coating over the grooves of back teeth where decay most often begins.',
    icon: 'shield',
  },
  {
    id: 'xray',
    name: 'Digital X-ray',
    category: 'Preventive',
    priceMin: 500,
    priceMax: 800,
    durationMinutes: 20,
    description: 'Low-dose imaging so we can see between and beneath the teeth before deciding on care.',
    icon: 'xray',
  },
  {
    id: 'filling',
    name: 'Tooth-coloured Filling',
    category: 'Restorative',
    priceMin: 1500,
    priceMax: 3000,
    priceUnit: 'per tooth',
    durationMinutes: 60,
    description: 'Composite fillings matched to your natural shade. Range depends on size and surfaces.',
    icon: 'drill',
    popular: true,
  },
  {
    id: 'extraction',
    name: 'Simple Tooth Extraction',
    category: 'Restorative',
    priceMin: 1500,
    priceMax: 3500,
    priceUnit: 'per tooth',
    durationMinutes: 45,
    description: 'Comfortable removal of a damaged or loose tooth under local anaesthesia, with aftercare guidance.',
    icon: 'extract',
  },
  {
    id: 'root-canal',
    name: 'Root Canal Therapy',
    category: 'Restorative',
    priceMin: 8000,
    priceMax: 15000,
    priceUnit: 'per tooth',
    durationMinutes: 90,
    description: 'Relieves pain and saves an infected tooth. Front teeth sit at the lower end, molars at the higher.',
    icon: 'root',
  },
  {
    id: 'crown',
    name: 'Dental Crown',
    category: 'Restorative',
    priceMin: 12000,
    priceMax: 20000,
    priceUnit: 'per tooth',
    durationMinutes: 90,
    description: 'A custom cap that restores a weakened or heavily filled tooth. Range reflects the material chosen.',
    icon: 'crown',
  },
  {
    id: 'dentures',
    name: 'Partial & Complete Dentures',
    category: 'Restorative',
    priceMin: 15000,
    priceMax: 35000,
    durationMinutes: 60,
    description: 'Comfortable, natural-looking replacements for missing teeth, fitted over a few short visits.',
    icon: 'denture',
  },
  {
    id: 'night-guard',
    name: 'Custom Night Guard',
    category: 'Restorative',
    priceMin: 4000,
    priceMax: 6000,
    durationMinutes: 30,
    description: 'A made-to-measure guard that protects teeth from grinding and eases jaw tension while you sleep.',
    icon: 'shield',
  },
  {
    id: 'whitening',
    name: 'Teeth Whitening',
    category: 'Cosmetic',
    priceMin: 12000,
    priceMax: 18000,
    durationMinutes: 90,
    description: 'In-clinic professional whitening for a visibly brighter smile in one visit, with a take-home top-up kit.',
    icon: 'sparkle',
    popular: true,
  },
  {
    id: 'kids-checkup',
    name: 'Kids Check-up & Cleaning',
    category: 'Kids',
    priceMin: 800,
    priceMax: 1200,
    durationMinutes: 40,
    description: 'A friendly first visit: gentle cleaning, a look at growing teeth and a sticker for bravery.',
    icon: 'child',
  },
]

export function findService(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id)
}

const pesoFormatter = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'PHP',
  maximumFractionDigits: 0,
})

export function formatPeso(amount: number): string {
  return pesoFormatter.format(amount)
}

/** "₱1,000 – ₱1,500" or a single figure when min and max match. */
export function formatPriceRange(service: Pick<Service, 'priceMin' | 'priceMax'>): string {
  if (service.priceMin === service.priceMax) return formatPeso(service.priceMin)
  return `${formatPeso(service.priceMin)} – ${formatPeso(service.priceMax)}`
}
