'use client'
import { Fragment } from 'react'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import * as Icons from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { classNames } from '@/lib'
import Link from 'next/link'
import { JsxElement } from 'typescript'



type Props = {
  breadcrumbs: {
    name: string
    href: string
  }[]
  title: string
  actions?: {
    name: string
    icon?: string
  }[]
  meta?: {
    name: string
    icon?: string
  }[]
}

export default function PageHeaderWithMetaActionsAndBreadcrumbs({ breadcrumbs, title, actions, meta }: Props) {

  const breadcrumbsWithHome = [
    { name: 'Home', href: '/' },
    ...breadcrumbs,
  ]

  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            {breadcrumbsWithHome.map((breadcrumb, breadcrumbIdx) => (
              <li key={breadcrumb.name}>
                <div className="flex items-center">
                  <Link href={breadcrumb.href} className="mr-4 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </Link>
                  {breadcrumbIdx !== breadcrumbsWithHome.length - 1 ? (
                    <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                  ) : null}
                </div>
              </li>
            ))}

          </ol>
        </nav>
        <div className='flex items-center justify-between'>
          <h2 className="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {title}
          </h2>
          {/* Dropdown */}
          {actions && (
            <Menu as="div" className="relative ml-3 sm:hidden">
              <Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
                More
                <ChevronDownIcon className="-mr-1 ml-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {actions?.map(({ name, icon }) => {
                    const Icon = icon ? Icons[icon as keyof typeof Icons] : null
                    return (
                      <Menu.Item key={name}>
                        {({ active }) => (
                          <Link
                            key={name}
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            {name}
                          </Link>
                        )}
                      </Menu.Item>
                    )
                  })}
                </Menu.Items>
              </Transition>
            </Menu>
          )}
        </div>
        {meta && (
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            {meta?.map(({ name, icon }) => {
              const Icon = icon ? Icons[icon as keyof typeof Icons] : null
              return (
                <div
                  key={name}
                  className="mt-2 flex items-center text-sm text-gray-500">
                  {Icon && <Icon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />}
                  {name}
                </div>
              )
            })}
          </div>
        )}
      </div>
      {actions && (
        <div className="mt-5 flex lg:ml-4 lg:mt-0 gap-3">
          {actions?.map(({ name, icon }) => {
            const Icon = icon ? Icons[icon as keyof typeof Icons] : null
            return (
              <span key={name} className=" hidden sm:block">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  {Icon && <Icon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />}
                  {name}
                </button>
              </span>
            )
          })}
        </div>
      )}
    </div >
  )
}
