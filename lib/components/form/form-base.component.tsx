import { formProps } from '@/lib/data/interface/form/form.interface'
import { FormEvent, useState } from 'react'
import { Form } from '../ui/form'
import AppButton from '../button/appButtons'
import { useRouter } from 'next/navigation'
import { DialogClose, DialogTrigger } from '../ui/dialog'
import { showError, showSuccess } from '@/lib/config/message/message.config'
import { appFetch } from '@/lib/interactors/app.service'
import { useMediaQuery } from '@react-hook/media-query'
import { DrawerClose } from '@/lib/components/ui/drawer'

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
  disableOKButton = false,
}: formProps) => {
  const [loading, setLoading] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const router = useRouter()
  return (
    <Form {...controller}>
      <form
        onSubmit={async (event: FormEvent) => {
          event.preventDefault()
          setLoading(true)
          console.log('======formbase======')
          const response = await fetch(submitRoute, {
            method: 'POST',
            body: JSON.stringify(data),
          })
          const json = response.json()
          json.then((value: GenericResponse) => {
            if (value.message.toLowerCase().includes('success')) {
              if (redirectRoute) {
                router.push(redirectRoute)
              }
              showSuccess({
                message: value.message,
              })
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
              <AppButton
                label='Cancel'
                variant={'ghost'}
                block
                type={'button'}
              />
            </DialogTrigger>
          ) : null}
          {showOkButton ? (
            isDesktop ? (
              <DialogClose asChild>
                <AppButton
                  type='submit'
                  label={submitLabel ?? 'Submit'}
                  block
                  disabled={
                    !controller.formState.isValid || loading || disableOKButton
                  }
                  loading={loading}
                  className={'bg-primary w-full'}
                />
              </DialogClose>
            ) : (
              <DrawerClose asChild>
                <AppButton
                  type='submit'
                  label={submitLabel ?? 'Submit'}
                  block
                  disabled={
                    !controller.formState.isValid || loading || disableOKButton
                  }
                  loading={loading}
                  className={'bg-primary w-full'}
                />
              </DrawerClose>
            )
          ) : null}
        </div>
      </form>
    </Form>
  )
}

export default FormBase
