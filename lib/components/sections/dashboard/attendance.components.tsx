import AttendanceCreditsCard from '@/lib/components/cards/attendance-credits/attendance-credits.cards'
import AttendanceInsightsCard from '@/lib/components/cards/attendance-insights/attendance-insights.cards'
import PayrollSummaryCard from '@/lib/components/cards/payroll-summary/payroll-summary.cards'
import PendingAttendaceRequest from '@/lib/components/cards/pending-attendance-request/pending-attendanceRequest.cards'
import TimeLoggingCard from '@/lib/components/cards/time-logging/time-logging.components'

const AttendanceSection = () => {
  return (
    <div className='sm:h-3/4 sm:grid sm:grid-cols-3 sm:grid-rows-2 gap-3 space-y-4 px-5'>
      <div className='sm:row-span-2'>
        <TimeLoggingCard block={true} />
      </div>
      <div className='w-full h-full bg-slate-200 rounded-md'>
        <AttendanceCreditsCard />
      </div>
      <div className='w-full h-full bg-slate-200 rounded-md'>
        <AttendanceInsightsCard />
      </div>
      <div className='w-full h-full bg-slate-200 rounded-md col-span-2'>
        <PendingAttendaceRequest />
      </div>
    </div>
  )
}

export default AttendanceSection
