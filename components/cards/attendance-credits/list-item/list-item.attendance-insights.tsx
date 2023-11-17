import { Card } from '@/components/ui/card';
import { attendanceInsighProps } from '@/data/interface/attendance-insight/attendance-insight.interface';

const ListItem = ({ label, count }: attendanceInsighProps) => {
  return (
    <Card>
      <div className="grid grid-cols-3 py-2 px-3">
        <div className="col-span-2">
          <h1 className="text-xs">{label}</h1>
        </div>
        <div className="justify-self-end text-end">
          <h1 className="text-slate-500 text-xs">{count} mins</h1>
        </div>
      </div>
    </Card>
  );
};

export default ListItem;
