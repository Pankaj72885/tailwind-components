export interface ModalProps {
  variant?: 'default' | 'fullscreen' | 'drawer' | 'center';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  open?: boolean;
  withCloseButton?: boolean;
  withBackdrop?: boolean;
}

export const modalClasses = {
  base: 'modal',
  variants: {
    default: 'modal-default',
    fullscreen: 'modal-fullscreen',
    drawer: 'modal-drawer',
    center: 'modal-center'
  },
  sizes: {
    sm: 'modal-sm',
    md: 'modal-md',
    lg: 'modal-lg',
    xl: 'modal-xl',
    full: 'modal-full'
  },
  states: {
    open: 'modal-open',
    withCloseButton: 'modal-with-close',
    withBackdrop: 'modal-with-backdrop'
  },
  parts: {
    overlay: 'modal-overlay',
    container: 'modal-container',
    header: 'modal-header',
    body: 'modal-body',
    footer: 'modal-footer',
    close: 'modal-close'
  }
} as const;

export default modalClasses;