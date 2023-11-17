import { Card } from '@/components/ui/card';
import { attendanceInsighProps } from '@/data/interface/attendance-insight/attendance-insight.interface';

const ListItem = ({ label, count }: attendanceInsighProps) => {
  return (
    <Card>
      <div className="grid grid-cols-2 py-2 px-3">
        <div>
          <h1>Request Type</h1>
          <h3 className="text-slate-500 text-xs">Reviewer</h3>
        </div>
        <div className="justify-self-end text-end">
          <h3>Date</h3>

          <h1 className="text-slate-500 text-xs">Time</h1>
        </div>
      </div>
    </Card>
  );
};

export default ListItem;
