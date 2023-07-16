'use client'
import React from 'react'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { classNames } from '@/lib'
import { PrinterIcon, ShareIcon } from '@heroicons/react/24/outline'

type Props = {}

export default function Page({ }: Props) {
  return (
    <div>
      {/* main content */}
      <div className="mt-10 ">
        <Table />
        <Pagination />
      </div>
    </div>
  )
}


export function Dropdown({ selected, options }: {
  selected: string,
  options?: string[]
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {selected}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options?.map((option) => (
              <Menu.Item key={option}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {option}
                  </a>
                )}
              </Menu.Item>
            ))}

          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}


const people = [
  {
    id: 10,
    "quality-measure": "Diabetes: Hemoglobin A1c poor control (>9%)",
    "benchmark": "9.5%",
    "performance": "10%",
    "trend": "",
    "num": "200",
    "denom": "2000",
    "deficit": "20"
  },
  {
    id: 20,
    "quality-measure": "Preventive Care and Screening: Screening for depression and follow-up plan",
    "benchmark": "75%",
    "performance": "76%",
    "trend": "",
    "num": "500",
    "denom": "556",
    "deficit": "(7)"
  },
  {
    id: 30,
    "quality-measure": "Controlling High Blood Pressure",
    "benchmark": "87%",
    "performance": "85%",
    "trend": "",
    "num": "700",
    "denom": "800",
    "deficit": "80"
  },
  {
    id: 40,
    "quality-measure": "Readmissions",
    "benchmark": "12%",
    "performance": "13.2%",
    "trend": "",
    "num": "132",
    "denom": "1000",
    "deficit": "(12)"
  },
  {
    id: 50,
    "quality-measure": "Unplanned Admissions for Chronic Conditions",
    "benchmark": "10%",
    "performance": "9.4%",
    "trend": "",
    "num": "94",
    "denom": "1000",
    "deficit": "6"
  },

  {
    id: 60, "quality-measure": "Breast Cancer Screening (BCS)",
  },
  {
    id: 70, "quality-measure": "Cervical Cancer Screening (CCS)",
  },
  {
    id: 80, "quality-measure": "Colorectal Cancer Screening (COL)",
  },
  {
    id: 90, "quality-measure": "Persistence of Beta-Blocker Treatment After a Heart Attack",
  },
  {
    id: 100, "quality-measure": "Statin Therapy for Patients With Cardiovascular Disease",
  },
]

const columns: {
  index: string,
  name: string
}[] = [
    {
      index: "quality-measure",
      name: "Quality Measure",
    },
    {
      index: "benchmark",
      name: "Benchmark",
    },
    {
      index: "performance",
      name: "Performance",
    },
    {
      index: "trend",
      name: "Trend",
    },
    {
      index: "num",
      name: "Num",
    },
    {
      index: "denom",
      name: "Denom",
    },
    {
      index: "deficit",
      name: "Deficit"
    }
  ]


export function Table() {
  return (
    <div className="">
      <div className="flex gap-2 flex-wrap items-center justify-between">
        <div className="flex items-center gap-2">
          <Dropdown
            selected="Payor"
            options={[
              "Payor",
              "Medicare shared Saving Program",
              "Medicare ACO Reach",
              "BCBS Medicare Advantage",
              "Aetna"
            ]}
          />
          <Dropdown
            selected="Provider Group"
            options={[
              "Provider Group",
              "Best Docs",
              "Top Docs",
              "Family Care",
              "U First Provider"
            ]}
          />
        </div>
        <div className="flex items-center gap-2 ">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-sky-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            <PrinterIcon className="mr-2 h-5 w-5 text-white" aria-hidden="true" />
            Print
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-sky-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            <ShareIcon className="mr-2 h-5 w-5 text-white" aria-hidden="true" />
            Share
          </button>

        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {columns.map((column, index) => (
                      <th
                        key={column.name}
                        scope="col"
                        className={classNames(
                          index === 0 ? 'py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6' : '',
                          index !== 0 ? 'px-3 py-3.5 text-left text-sm font-semibold text-gray-900' : '',
                        )}
                      >
                        {column.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.id}>
                      {columns.map((column, index) => (
                        <td
                          key={column.name}
                          className={classNames(
                            index === 0 ? 'py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6' : '',
                            index !== 0 ? 'px-3 py-4 text-sm text-gray-500' : '',
                          )}
                        >
                          {/* @ts-ignore */}
                          {person[column.index] as keyof typeof person}
                        </td>
                      ))
                      }
                      {/* <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-sky-600 hover:text-sky-900">
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'


export function Pagination() {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-sky-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-sky-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
