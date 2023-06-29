import { ToastPosition, TypeOptions, toast } from 'react-toastify';

type ShowToastProps = {
  message: string;
  position?: ToastPosition;
  autoClose?: number;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  type?: TypeOptions;
};

export function showToast({
  message,
  position = 'top-left',
  autoClose = 3000,
  closeOnClick = true,
  pauseOnHover = true,
  type = 'info'
}: ShowToastProps) {
  return toast(message, {
    position,
    autoClose,
    closeOnClick,
    pauseOnHover,
    type
  });
}
