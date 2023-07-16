import { DocumentTextIcon, PresentationChartLineIcon, ChartPieIcon, CurrencyDollarIcon, CalendarDaysIcon, BriefcaseIcon, AdjustmentsVerticalIcon, UserCircleIcon, QuestionMarkCircleIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Summary", href: '/summary', icon: DocumentTextIcon },
  { name: "Quality Measures", href: '/quality-measures', icon: PresentationChartLineIcon },
  { name: "Care Gaps & Risk Conditions", href: '/care-gaps', icon: ChartPieIcon },
  { name: "Total Costs", href: '/total-costs', icon: CurrencyDollarIcon },
  { name: "High Risk Patient List", href: '/high-risk-patients', icon: CalendarDaysIcon },
  { name: "Providers", href: '/providers', icon: BriefcaseIcon },
  { name: "Admin", href: '/admin', icon: AdjustmentsVerticalIcon },
  { name: "Profile", href: '/profile', icon: UserCircleIcon },
  { name: "Help", href: '/help', icon: QuestionMarkCircleIcon },
  { name: "Logout", href: '/profile', icon: ArrowLeftOnRectangleIcon },
]