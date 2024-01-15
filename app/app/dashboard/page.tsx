'use client'
import AttendanceSection from '@/lib/components/sections/dashboard/attendance.components'
import PayrollSection from '@/lib/components/sections/dashboard/payroll.components'
import TimeLoggingCard from '@/lib/components/cards/time-logging/time-logging.components'
import AttendanceCreditsCard from '@/lib/components/cards/attendance-credits/attendance-credits.cards'
import AttendanceInsightsCard from '@/lib/components/cards/attendance-insights/attendance-insights.cards'
import PendingAttendaceRequest from '@/lib/components/cards/pending-attendance-request/pending-attendanceRequest.cards'
import PayrollSummaryCard from '@/lib/components/cards/payroll-summary/payroll-summary.cards'

const Dashboard = () => {
  return (
    <div className={'space-y-6'}>
      <div className=' lg:flex grid gap-6 px-5'>
        <TimeLoggingCard block={true} />
        <AttendanceInsightsCard />
      </div>
      <div className=' lg:flex grid gap-6 px-5'>
        <PendingAttendaceRequest />
        <PayrollSummaryCard />
      </div>
    </div>
  )
}

export default Dashboard
