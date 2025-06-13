export interface InputProps {
  variant?: 'default' | 'error' | 'success' | 'warning' | 'disabled';
  size?: 'sm' | 'md' | 'lg';
  withIcon?: boolean;
  withLabel?: boolean;
  withHelperText?: boolean;
}

export const inputClasses = {
  base: 'input',
  variants: {
    default: 'input-default',
    error: 'input-error',
    success: 'input-success',
    warning: 'input-warning',
    disabled: 'input-disabled'
  },
  sizes: {
    sm: 'input-sm',
    md: 'input-md',
    lg: 'input-lg'
  },
  states: {
    withIcon: 'input-with-icon',
    withLabel: 'input-with-label',
    withHelperText: 'input-with-helper'
  },
  parts: {
    group: 'input-group',
    label: 'input-label',
    helperText: 'input-helper-text',
    icon: 'input-icon',
    prefix: 'input-prefix',
    suffix: 'input-suffix'
  }
} as const;

export default inputClasses;