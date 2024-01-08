import AppTable from '@/components/table/table'

const Assets = () => {
  return (
    <div className='px-4  space-y-4'>
      <AppTable
        columns={[
          { name: 'Serial Number', className: 'w-48' },
          { name: 'Brand', className: 'w-48' },
          { name: 'Model', className: 'w-48' },
          { name: 'Type', className: 'w-48' },
          { name: 'Assgined To', className: 'w-64' },
          { name: 'Assgined by', className: 'w-64' },
          { name: 'Acquired Date', className: 'w-16' },
        ]}
      />
    </div>
  )
}

export default Assets
