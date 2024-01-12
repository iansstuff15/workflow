import { MessageProps } from '@/lib/data/types/message/message.type'
import { toast } from 'sonner'

const position = 'top-center'

export const showMessage = ({ message }: MessageProps) => {
  toast.message(message, {
    position: position,
  })
}
export const showError = ({ message }: MessageProps) => {
  toast.error('Opps! Something went wrong.', {
    position: position,
    description: message,
  })
}
export const showSuccess = ({ message }: MessageProps) => {
  toast.success('Success!', {
    position: position,

    description: message,
  })
}
export const showWarning = ({ message }: MessageProps) => {
  toast.warning('Warning.', {
    position: position,

    description: message,
  })
}
export const showLoading = () => {
  toast.loading('Hold on, please wait...', {
    position: position,
  })
}
