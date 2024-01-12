'use client'
import AttendanceSection from '@/lib/components/sections/dashboard/attendance.components'
import PayrollSection from '@/lib/components/sections/dashboard/payroll.components'

const Dashboard = () => {
  return (
    <>
      <AttendanceSection />
      <PayrollSection />
    </>
  )
}

export default Dashboard
