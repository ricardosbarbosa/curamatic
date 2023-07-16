'use client'
import { classNames } from '@/lib'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navigation } from '../lib/navigation'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { headers } from 'next/headers'
import { usePathname } from 'next/navigation'

type Props = {}

/* Static sidebar for desktop */
export default function StaticSidebarForDesktop({ }: Props) {
  const pathname = usePathname()

  const itemCurrent = navigation.find((nav) => pathname.includes(nav.href))

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <Image
            className="h-8 w-auto"
            // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            src="/logo.png"
            alt="Your Company"
            width={135}
            height={29}
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={classNames(
                        itemCurrent?.name === item.name
                          ? 'bg-gray-50 text-sky-600'
                          : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          itemCurrent?.name === item.name ? 'text-sky-600' : 'text-gray-400 group-hover:text-sky-600',
                          'h-6 w-6 shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="mt-auto">
              <Link
                href="#"
                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-sky-600"
              >
                <Cog6ToothIcon
                  className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-sky-600"
                  aria-hidden="true"
                />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}