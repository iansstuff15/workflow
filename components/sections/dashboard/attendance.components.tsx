import AttendanceCreditsCard from '@/components/cards/attendance-credits/attendance-credits.cards';
import AttendanceInsightsCard from '@/components/cards/attendance-insights/attendance-insights.cards';
import PayrollSummaryCard from '@/components/cards/payroll-summary/payroll-summary.cards';
import PendingAttendaceRequest from '@/components/cards/pending-attendance-request/pending-attendanceRequest.cards';
import TimeLoggingCard from '@/components/cards/time-logging/time-logging.components';

const AttendanceSection = () => {
  return (
    <div className="h-3/4 grid grid-cols-3 grid-rows-2 gap-3 px-5">
      <div className="row-span-2">
        <TimeLoggingCard />
      </div>
      <div className="w-full h-full bg-slate-200 rounded-md">
        <AttendanceCreditsCard />
      </div>
      <div className="w-full h-full bg-slate-200 rounded-md">
        <AttendanceInsightsCard />
      </div>
      <div className="w-full h-full bg-slate-200 rounded-md col-span-2">
        <PendingAttendaceRequest />
      </div>
    </div>
  );
};

export default AttendanceSection;
