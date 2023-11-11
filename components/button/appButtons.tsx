import { buttonProps } from '@/data/interface/button/button.interface';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';
const AppButton = ({
  variant,
  label,
  onClick,
  block = false,
  loading = false,
  icon = true,
  ...otherProps
}: buttonProps) => {
  return (
    <Button
      className={`${block ? 'w-full' : null}`}
      variant={variant}
      onClick={onClick}
      disabled={loading}
      {...otherProps}
    >
      {icon && !loading ? icon : null}
      {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {label}
    </Button>
  );
};

export default AppButton;
