import React from 'react';

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export interface ModalProps {
  title: string;
  open: boolean;
  handleClose: () => void;
  content?: React.ReactNode;
  onSuccess?: () => void | null;
  onSuccessTextButton?: string;
}
