import { formProps } from '@/data/interface/form/form.interface'
import { FormEvent, useState } from 'react'
import { Form } from '../ui/form'
import AppButton from '../button/appButtons'
import { useRouter } from 'next/navigation'
import { DialogTrigger } from '../ui/dialog'
import { showError, showSuccess } from '@/config/message/message.config'

const FormBase = ({
  children,
  showCancel,
  submitRoute,
  redirectRoute,
  successMessage,
  controller,
  data,
  showOkButton = true,
  submitLabel,
}: formProps) => {
  const [loading, setLoading] = useState(false)

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
                showSuccess({
                  message: successMessage,
                })
              }
              setLoading(false)
            } else {
              showError({
                message: value.message,
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
          {showOkButton ? (
            <AppButton
              type='submit'
              label={submitLabel ?? 'Submit'}
              block
              disabled={!controller.formState.isValid || loading}
              loading={loading}
            />
          ) : null}
        </div>
      </form>
    </Form>
  )
}

export default FormBase
