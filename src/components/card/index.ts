export interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'interactive';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  withImage?: boolean;
  withHeader?: boolean;
  withFooter?: boolean;
}

export const cardClasses = {
  base: 'card',
  variants: {
    default: 'card-default',
    elevated: 'card-elevated',
    outlined: 'card-outlined',
    interactive: 'card-interactive'
  },
  padding: {
    none: 'card-padding-none',
    sm: 'card-padding-sm',
    md: 'card-padding-md',
    lg: 'card-padding-lg'
  },
  parts: {
    header: 'card-header',
    body: 'card-body',
    footer: 'card-footer',
    image: 'card-image',
    title: 'card-title',
    text: 'card-text'
  }
} as const;

export default cardClasses;