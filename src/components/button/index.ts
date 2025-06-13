export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning' | 'info';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  icon?: boolean;
  fullWidth?: boolean;
}

export const buttonClasses = {
  base: 'btn',
  variants: {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    danger: 'btn-danger',
    success: 'btn-success',
    warning: 'btn-warning',
    info: 'btn-info'
  },
  sizes: {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    xl: 'btn-xl'
  },
  states: {
    loading: 'btn-loading',
    disabled: 'btn-disabled',
    icon: 'btn-icon',
    fullWidth: 'btn-full'
  }
} as const;

export default buttonClasses;