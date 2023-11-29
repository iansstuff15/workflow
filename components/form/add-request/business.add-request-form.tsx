import SelectFile from '@/components/file/select-file.components';
import AppTextAreaFormField from '../formfield/textArea.components';
import { formParams } from '@/data/interface/form/form.interface';
import AppDatePicker from '@/components/date/date.components';
import { Checkbox } from '@/components/ui/checkbox';
import AppSelect from '@/components/select/select.components';
import AppButton from '@/components/button/appButtons';
import { MoveRight } from 'lucide-react';

const OfficialBusinessAddRequestForm = ({ controller }: formParams) => {
  return (
    <>
      <div className="grid grid-cols-2 mt-3">
        <div>
          <h5 className="font-medium">From</h5>
          <p>Powell, Diriangen Lempira</p>
          <p className="text-sm">Software Engineer</p>
          <p className="text-xs">Software Delivery</p>
        </div>
        <div className="text-end">
          <h5 className="font-medium">To be reviewed by</h5>
          <p>Delacruz, Juan</p>
          <p className="text-sm">Manager</p>
          <p className="text-xs">Human Resource</p>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-11 gap-2">
        <AppDatePicker controller={controller} className="col-span-5" />
        <MoveRight className="col-span-1" />
        <AppDatePicker controller={controller} className="col-span-5 " />
      </div>
      <div className="grid grid-cols-11 gap-2">
        <AppButton
          onClick={() => {}}
          variant={'outline'}
          label="Start time"
          block
          className="col-span-5 justify-start font-normal"
        />
        <MoveRight className="col-span-1" />
        <AppButton
          onClick={() => {}}
          variant={'outline'}
          label="End time"
          block
          className="col-span-5 justify-start font-normal"
        />
      </div>
      <AppTextAreaFormField
        controller={controller.control}
        label="Reason"
        variant={'bordered'}
        placeholder="Important matters"
        type="reason"
      />

      <SelectFile />
      <hr />
      <div className="grid grid-cols-2">
        <div>
          <h5 className="font-medium">Starting balance</h5>
          <p>Vacation 0.0</p>
          <p>Sick 0.0</p>
        </div>
        <div className="text-end">
          <h5 className="font-medium">Ending balance</h5>
          <p>Vacation 0.0</p>
          <p>Sick 0.0</p>
        </div>
      </div>
    </>
  );
};
export default OfficialBusinessAddRequestForm;
