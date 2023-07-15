import { DocumentTextIcon, PresentationChartLineIcon, ChartPieIcon, CurrencyDollarIcon, CalendarDaysIcon, BriefcaseIcon, AdjustmentsVerticalIcon, UserCircleIcon, QuestionMarkCircleIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Summary", href: '/summary', icon: DocumentTextIcon, current: true },
  { name: "Quality Measures", href: '/quality-measures', icon: PresentationChartLineIcon, current: false },
  { name: "Care Gaps & Risk Conditions", href: '/care-gaps', icon: ChartPieIcon, current: false },
  { name: "Total Costs", href: '/total-costs', icon: CurrencyDollarIcon, current: false },
  { name: "High Risk Patient List", href: '/high-risk-patients', icon: CalendarDaysIcon, current: false },
  { name: "Providers", href: '/providers', icon: BriefcaseIcon, current: false },
  { name: "Admin", href: '/admin', icon: AdjustmentsVerticalIcon, current: false },
  { name: "Profile", href: '/profile', icon: UserCircleIcon, current: false },
  { name: "Help", href: '/help', icon: QuestionMarkCircleIcon, current: false },
  { name: "Logout", href: '/profile', icon: ArrowLeftOnRectangleIcon, current: false },
]