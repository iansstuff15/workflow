import CompensationInfo from '@/lib/components/cards/payroll-info-cards/compensation-info'
import PayrollInfoCard from '@/lib/components/cards/payroll-info-cards/payroll-info-card'
import AppTable from '@/lib/components/table/table'

const Payroll = () => {
  return (
    <div className='px-4  space-y-4'>
      <CompensationInfo />
      <PayrollInfoCard />
      <AppTable
        columns={[
          { name: 'Payroll Date' },
          { name: 'Gross Amount' },
          { name: 'Deductions' },
          { name: 'Net Amount' },
          { name: 'Actions' },
        ]}
      />
    </div>
  )
}

export default Payroll
