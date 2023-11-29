import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { overlayProps } from '@/data/interface/overlay/overlay';
import AppButton from '@/components/button/appButtons';

const AppDialog = ({
  children,
  isOKAction,
  isOKLabel,
  isOpen,
  setIsOpen,
  description,
  title,
  padding,
}: overlayProps) => {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        setIsOpen(false);
      }}
    >
      <DialogContent className={`${padding ?? null}`} title="">
        {title || description ? (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
        ) : null}

        {children}
        {isOKAction ? (
          <DialogFooter>
            <AppButton onClick={isOKAction} label={isOKLabel} />
          </DialogFooter>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default AppDialog;
