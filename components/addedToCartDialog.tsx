import React, { FC, ReactNode } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay
} from '@/components/ui/dialog';

interface CartDialogProps {
  trigger: ReactNode;
  children: ReactNode;
}

const CartDialog: FC<CartDialogProps> = ({ trigger, children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogOverlay className='bg-primaryBtnColor/60' />
      <DialogContent className='bg-transparent border-none shadow-none w-fit h-fit '>
       {children}
      </DialogContent>
    </Dialog>
  );
};

export {CartDialog};
