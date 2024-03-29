'use client'
import { classNames } from "@/lib"

import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation'

type Props = {
  tabs: {
    name: string
    href: string
  }[]
}

export default function TabsWithUnderline({ tabs = [] }: Props) {
  const pathname = usePathname()
  const router = useRouter()

  const tabCurrent = tabs.find((tab) => pathname.includes(tab.href))
  return (
    <div className="mt-2">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
          defaultValue={tabCurrent?.name}
          onChange={(e) => {
            const selectedTab = tabs.find((tab) => tab.name === e.target.value)
            if (selectedTab) {
              router.push(selectedTab.href)
            }
          }}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tabCurrent?.name === tab.name
                    ? 'border-sky-500 text-sky-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                )}
                aria-current={tabCurrent?.name === tab.name ? 'page' : undefined}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
