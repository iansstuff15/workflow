'use client'
import { API_CREATE_EMPLOYEE } from '@/lib/config/constants/routes/routes'
import { useForm } from 'react-hook-form'
import AppFormField from '../formfield/formfield'
import { AlertTitle, Alert, AlertDescription } from '@/lib/components/ui/alert'
import AppFormCheckBox from '../check-box/check-box'
import FormBase from '../form-base.component'
import { showFormProps } from '@/lib/data/interface/form/form.interface'
import { Pagination } from '@nextui-org/pagination'
import { useState } from 'react'

const EmployeeForm = ({ mode, data, selectedKeys }: showFormProps) => {
  const form = useForm()
  const [currentPage, setCurrentPage] = useState(0)
  return (
    <FormBase
      controller={form}
      submitRoute={API_CREATE_EMPLOYEE}
      successMessage='Successfully added employee'
      showCancel={true}
      data={[form.getValues()]}
    >
      {mode == 'add' ? (
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            At the moment, inputs from this form are does not create a user
          </AlertDescription>
        </Alert>
      ) : (
        <Alert>
          {data
            .filter((data: any) => {
              return data?.id == selectedKeys![currentPage]
            })
            .map((data: any) => {
              return (
                <div key={data.id} className='text-xs space-y-2'>
                  <AlertTitle className='font-bold'>User ID</AlertTitle>
                  <p> {data.id}</p>
                  <AlertDescription className='grid grid-cols-2 gap-1'>
                    <div className='text-xs'>
                      <p className='font-bold'>First Name</p>
                      <p>{data.first_name}</p>
                    </div>
                    <div className='text-xs'>
                      <p className='font-bold'>Last Name</p>
                      <p>{data.last_name}</p>
                    </div>
                    <div className='text-xs'>
                      <p className='font-bold'>Email</p>
                      <p>{data.email}</p>
                    </div>
                    <div className='text-xs'>
                      <p className='font-bold'>Phone</p>
                      <p>{data.phone}</p>
                    </div>
                    <div className='text-xs'>
                      <p className='font-bold'>Position</p>
                      <p>{data.position}</p>
                    </div>
                    <div className='text-xs'>
                      <p className='font-bold'>Sick Leave Credits</p>
                      <p>{data.sick_leave_credit}</p>
                    </div>
                    <div className='text-xs'>
                      <p className='font-bold'>Vacation Leave Credits</p>
                      <p>{data.vacation_leave_credit}</p>
                    </div>
                    <div className='text-xs'>
                      <p className='font-bold'>Maternal Leave Eligible</p>
                      <p>{data.maternal_leave.toString()}</p>
                    </div>
                    <div className='text-xs'>
                      <p className='font-bold'>Paternal Leave Eligible</p>
                      <p>{data.paternal_leave.toString()}</p>
                    </div>
                  </AlertDescription>
                </div>
              )
            })}{' '}
        </Alert>
      )}
      {mode == 'delete' || mode == 'view' ? null : (
        <>
          {mode == 'add' ? <h1>Employee Information</h1> : null}

          <div className='grid grid-cols-2 gap-4'>
            <AppFormField
              controller={form.control}
              label='First Name'
              placeholder='John'
              name='first_name'
              type='text'
            />
            <AppFormField
              controller={form.control}
              label='Last Name'
              placeholder='Doe'
              name='last_name'
              type='text'
            />
            <AppFormField
              controller={form.control}
              label='Email'
              placeholder='johndoe@gmail.com'
              name='email'
              type='email'
            />
            <AppFormField
              controller={form.control}
              label='Phone'
              placeholder='+639123456789'
              name='phone'
              type='tel'
            />
            <AppFormField
              controller={form.control}
              label='Position'
              placeholder='Software Engineer'
              name='position'
              type='text'
            />
          </div>
          {mode == 'add' ? <h1>Leave Credits</h1> : null}

          <div className='grid grid-cols-2 gap-4'>
            <AppFormField
              controller={form.control}
              label='Sick Leaves'
              placeholder='johndoe@gmail.com'
              name='sick_leave_credit'
              defaultValue={'15'}
              type='number'
            />
            <AppFormField
              controller={form.control}
              label='Vacation Leaves'
              placeholder='johndoe@gmail.com'
              name='vacation_leave_credit'
              defaultValue={'15'}
              type='number'
            />
            <div className='flex items-center space-x-2'>
              <AppFormCheckBox
                controller={form.control}
                name='maternal_leave'
                label='Maternal leave eligible'
              />
            </div>
            <div className='flex items-center space-x-2'>
              <AppFormCheckBox
                controller={form.control}
                name='paternal_leave'
                label='Paternal leave eligible'
              />
            </div>
          </div>
          {mode == 'add' ? (
            <>
              <div className='flex items-center space-x-2'>
                <AppFormCheckBox
                  controller={form.control}
                  name=''
                  label='Include workflow account creation'
                />
              </div>
              <div className='flex items-center space-x-2'>
                <AppFormCheckBox
                  controller={form.control}
                  name=''
                  label='Assign assets to employee'
                />
              </div>
            </>
          ) : null}
        </>
      )}

      {selectedKeys != null && selectedKeys.length != 0 ? (
        <Pagination
          showControls
          total={selectedKeys.length ?? 1}
          initialPage={0}
          variant='flat'
          className='w-full ml-2'
          onChange={page => {
            setCurrentPage(page)
          }}
        />
      ) : null}
    </FormBase>
  )
}

export default EmployeeForm
