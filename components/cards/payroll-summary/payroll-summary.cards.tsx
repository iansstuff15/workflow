import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ListItem from './list-item/list-item';
import AppButton from '@/components/button/appButtons';
const PayrollSummaryCard = () => {
  return (
    <Card className="w-full h-full grid grid-rows-6 gap-1 py-4">
      <div className=" row-span-2 grid grid-cols-4 pr-6">
        <CardHeader className="col-span-3 py-0">
          <CardTitle>
            <h1 className="col-span-3">Payroll Summary</h1>
          </CardTitle>
          <CardDescription>From Date to Date</CardDescription>
        </CardHeader>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-end">
            <h5 className="text-xs text-slate-500">Year to date</h5>
            <h5>₱ 000,000</h5>
          </div>
          <AppButton
            onClick={() => {}}
            label="View all"
            className="self-start"
          />
        </div>
      </div>
      <CardContent className="row-span-4 overflow-scroll ">
        <div className="space-y-2 ">
          <ListItem label="Overtime" count={0} />
          <ListItem label="Undertime" count={0} />
          <ListItem label="Official Business" count={0} />
          <ListItem label="Late" count={0} />
        </div>
      </CardContent>
    </Card>
  );
};

export default PayrollSummaryCard;
