export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  removable?: boolean;
}

export const badgeClasses = {
  base: 'badge',
  variants: {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    success: 'badge-success',
    danger: 'badge-danger',
    warning: 'badge-warning',
    info: 'badge-info'
  },
  sizes: {
    sm: 'badge-sm',
    md: 'badge-md',
    lg: 'badge-lg'
  },
  states: {
    dot: 'badge-dot',
    removable: 'badge-removable'
  }
} as const;

export default badgeClasses;