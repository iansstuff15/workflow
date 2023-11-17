'use client';
import AttendanceSection from '@/components/sections/dashboard/attendance.components';
import PayrollSection from '@/components/sections/dashboard/payroll.components';

const Dashboard = () => {
  return (
    <>
      <AttendanceSection />
      <PayrollSection />
    </>
  );
};

export default Dashboard;
