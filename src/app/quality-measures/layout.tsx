import PageHeaderWithMetaActionsAndBreadcrumbs from '@/components/PageHeaderWithMetaActionsAndBreadcrumbs'

import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <PageHeaderWithMetaActionsAndBreadcrumbs
        title="Quality Measures"
        breadcrumbs={[
          { name: 'Quality Measures', href: '/quality-measures' },
        ]}
      />
      <div className="mt-2">
        {children}
      </div>
    </div>
  )
}