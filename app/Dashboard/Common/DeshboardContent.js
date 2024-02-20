import React from 'react'
import DashboardTable from './DashboardTable'

export default function DeshboardContent({theading, tbody}) {
  return (
    <div className="dashboard-page-content">
      <div className="content-table">
        <DashboardTable thead={theading} tbody={tbody}  />
      </div>
    </div>
  )
}
