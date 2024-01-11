import RequestForm from '@/components/form/add-request/add-request.form'
import CampaignForm from '@/components/form/campaign/campaign.from'
import EmployeeForm from '@/components/form/employee/add-employee'
import { CAMPAIGN, EMPLOYEE, REQUEST } from '@/config/constants/routes/routes'
import { showFormProps } from '@/data/interface/form/form.interface'
import { usePathname } from 'next/navigation'

const TableForms = (props: showFormProps) => {
  const path = usePathname()
  switch (path) {
    case REQUEST:
      return <RequestForm />
    case EMPLOYEE:
      return <EmployeeForm {...props} />
    case CAMPAIGN:
      return <CampaignForm />
    default:
      return <h1>Form for this route does not exist</h1>
  }
}
export default TableForms
