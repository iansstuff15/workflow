import { formProps } from '@/data/interface/form/form.interface'
import { FormEvent, useState } from 'react'
import { useToast } from '../ui/use-toast'
import { Form } from '../ui/form'
import AppButton from '../button/appButtons'
import { useRouter } from 'next/navigation'
import { DialogTrigger } from '../ui/dialog'

const FormBase = ({
  children,
  showCancel,
  submitRoute,
  redirectRoute,
  successMessage,
  controller,
  data,
  submitLabel,
}: formProps) => {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  return (
    <Form {...controller}>
      <form
        onSubmit={async (event: FormEvent) => {
          event.preventDefault()
          setLoading(true)
          const response = await fetch(submitRoute, {
            method: 'POST',
            body: JSON.stringify(data),
          })
          const json = response.json()
          json.then((value: GenericResponse) => {
            if (value.message == 'good') {
              if (redirectRoute) {
                router.push(redirectRoute)
              }
              if (successMessage) {
                toast({
                  variant: 'default',
                  title: 'Success!',
                  description: successMessage,
                  duration: 3000,
                })
              }
              setLoading(false)
            } else {
              toast({
                variant: 'destructive',
                title: 'Uh oh! Something went wrong.',
                description: value.message,
                duration: 3000,
              })
              setLoading(false)
            }
          })
        }}
        className='space-y-8'
      >
        {children}
        <div className={showCancel ? 'grid grid-cols-2 gap-2' : ''}>
          {showCancel ? (
            <DialogTrigger>
              <AppButton label='Cancel' variant={'ghost'} block />
            </DialogTrigger>
          ) : null}
          <AppButton
            type='submit'
            label={submitLabel ?? 'Submit'}
            block
            loading={loading}
          />
        </div>
      </form>
    </Form>
  )
}

export default FormBase
