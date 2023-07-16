
'use client'
import React, { useState } from 'react'
import PageHeader from './PageHeader'

import MobileMenu from './MobileMenu'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
      <MobileMenu
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="lg:pl-72">
        <PageHeader setSidebarOpen={setSidebarOpen} />
        {/* Page header */}

        <main className="py-8">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  )
}