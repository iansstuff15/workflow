import AddRequestForm from '@/components/form/add-request/add-request.form';
import { REQUEST } from '@/config/constants/routes/routes';
import { usePathname } from 'next/navigation';

const TableForms = () => {
  const path = usePathname();
  switch (path) {
    case REQUEST:
      return <AddRequestForm />;
    default:
      return <h1>Form for this route does not exist</h1>;
  }
};
export default TableForms;
