import AppTable from '@/components/table/table'

const Request = () => {
  return (
    <div className='mx-4'>
      <AppTable
        columns={[
          { name: 'Type', className: 'w-48' },
          { name: 'Reviewer', className: 'w-64' },
          { name: 'Requested Date', className: 'w-16' },
          { name: 'Created Date', className: 'w-16' },
          { name: 'Last Updated', className: 'w-16' },
          { name: 'Actions', className: 'w-64' },
        ]}
      />
    </div>
  )
}

export default Request
