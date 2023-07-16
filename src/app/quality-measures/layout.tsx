import PageHeaderWithMetaActionsAndBreadcrumbs from '@/components/PageHeaderWithMetaActionsAndBreadcrumbs'
import TabsWithUnderline from '@/components/TabsWithUnderline'

import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <PageHeaderWithMetaActionsAndBreadcrumbs
        title="Quality Measures"

      />
      <TabsWithUnderline
        tabs={[
          { name: "Performance vs Target", href: '/quality-measures/performance-vs-target' },
          { name: "YTD Provider Success", href: '/quality-measures/provider-trend-chart' },
          { name: "Provider Trend Chart", href: '/quality-measures/ytd-provider-success' },
        ]}
      />
      <div className="mt-2">
        {children}
      </div>
    </div>
  )
}