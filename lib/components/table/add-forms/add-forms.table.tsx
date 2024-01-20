import RequestForm from '@/lib/components/form/add-request/add-request.form'
import CampaignForm from '@/lib/components/form/campaign/campaign.from'
import EmployeeForm from '@/lib/components/form/employee/add-employee'
import {
  CAMPAIGN,
  EMPLOYEE,
  INVENTORY,
  REQUEST,
} from '@/lib/config/constants/routes/routes'
import { showFormProps } from '@/lib/data/interface/form/form.interface'
import { usePathname } from 'next/navigation'
import InventoryForm from '@/lib/components/form/inventory/InventoryForm'

const TableForms = (props: showFormProps) => {
  const path = usePathname()
  switch (path) {
    case REQUEST:
      return <RequestForm />
    case EMPLOYEE:
      return <EmployeeForm {...props} />
    case CAMPAIGN:
      return <CampaignForm />
    case INVENTORY:
      return <InventoryForm />
    default:
      return <h1>Form for this route does not exist</h1>
  }
}
export default TableForms
