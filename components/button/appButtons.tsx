import { buttonProps } from '@/data/interface/button/button.interface'
import { Button } from '../ui/button'
import { Spinner } from '@nextui-org/spinner'
const AppButton = ({
  variant,
  label,
  onClick,
  block = false,
  loading = false,
  icon = true,
  keybinding,
  ref,
  ...otherProps
}: buttonProps) => {
  return (
    <Button
      className={`${block ? 'w-full' : null}`}
      variant={variant}
      onClick={onClick}
      ref={ref?.current}
      disabled={loading}
      {...otherProps}
    >
      <span className='pr-2'>
        {icon && !loading ? icon : null}
        {loading ? <Spinner size='sm' color='default' /> : null}
      </span>

      {label}
      {keybinding}
    </Button>
  )
}

export default AppButton
