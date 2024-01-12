import PayrollSummaryCard from '@/lib/components/cards/payroll-summary/payroll-summary.cards'
const PayrollSection = () => {
  return (
    <div className='h-2/5 grid grid-cols-3 grid-rows-1 gap-3 px-5'>
      <div className='w-full h-full bg-slate-200 rounded-md col-span-3'>
        <PayrollSummaryCard />
      </div>
    </div>
  )
}

export default PayrollSection
