import AppButton from '@/components/button/appButtons';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import LogItem from './log-item/log-item.time-logs';

const TimeLoggingCard = () => {
  return (
    <Card className="w-full h-full grid grid-rows-6 gap-3">
      <CardHeader className="row-span-1">
        <CardTitle>Time Logs</CardTitle>
        <CardDescription>Todo: Current time / Location</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 row-span-3">
        <h1>Log history</h1>
        <div className="h-full space-y-3 overflow-scroll">
          <div className="space-y-2 ">
            <LogItem />
            <LogItem />
            <LogItem />
            <LogItem />
            <LogItem />
            <LogItem />
            <LogItem />
            <LogItem />
            <LogItem />
            <LogItem />
            <LogItem />
          </div>
        </div>
      </CardContent>
      <CardFooter className="row-span-2 ">
        <div className="grid grid-rows-2 w-full gap-2 ">
          <AppButton onClick={() => {}} label="Time in" block />
          <AppButton
            onClick={() => {}}
            label="Time out"
            variant={'destructive'}
            block
          />
        </div>
      </CardFooter>
    </Card>
  );
};
export default TimeLoggingCard;
