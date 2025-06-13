// Export all component utilities and configurations
export { default as components } from './components/index';
export { default as utilities } from './utilities/index';
export { default as theme } from './theme/index';
export { default as baseStyles } from './base/index';

// Re-export utility functions for direct use
export { cn, getComponentClasses } from './utilities/index';

// Re-export individual components for tree-shaking
export { default as Button, type ButtonProps } from './components/button/index';
export { default as Card, type CardProps } from './components/card/index';
export { default as Input, type InputProps } from './components/input/index';
export { default as Modal, type ModalProps } from './components/modal/index';
export { default as Badge, type BadgeProps } from './components/badge/index';

// Component metadata with enhanced typing
export interface ComponentMetadata {
  name: string;
  description: string;
  variants?: string[];
  sizes?: string[];
  states?: string[];
  parts?: string[];
  category: 'form' | 'layout' | 'feedback' | 'navigation' | 'data-display';
}

export const componentList: Record<string, ComponentMetadata> = {
  Button: {
    name: 'Button',
    description: 'Interactive button component with multiple variants and states',
    variants: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success', 'warning', 'info'],
    sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
    states: ['default', 'hover', 'active', 'focus', 'disabled', 'loading'],
    category: 'form'
  },
  Card: {
    name: 'Card',
    description: 'Container component for grouping related content',
    variants: ['default', 'elevated', 'outlined', 'interactive'],
    parts: ['header', 'body', 'footer', 'image'],
    category: 'layout'
  },
  Input: {
    name: 'Input',
    description: 'Form input component with validation states and icons',
    variants: ['default', 'error', 'success', 'warning', 'disabled'],
    sizes: ['sm', 'md', 'lg'],
    states: ['default', 'focus', 'error', 'success', 'disabled'],
    category: 'form'
  },
  Modal: {
    name: 'Modal',
    description: 'Overlay dialog component with backdrop and focus management',
    variants: ['default', 'fullscreen', 'drawer', 'center'],
    parts: ['overlay', 'container', 'header', 'body', 'footer', 'close'],
    category: 'feedback'
  },
  Badge: {
    name: 'Badge',
    description: 'Small status descriptor component',
    variants: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    sizes: ['sm', 'md', 'lg'],
    category: 'data-display'
  }
} as const;

// Version and metadata
export const version = '1.0.0';
export const tailwindVersion = '^4.1.0';

// Utility types
export type ComponentVariant<T extends keyof typeof componentList> = 
  typeof componentList[T]['variants'] extends readonly string[] 
    ? typeof componentList[T]['variants'][number] 
    : never;

export type ComponentSize<T extends keyof typeof componentList> = 
  typeof componentList[T]['sizes'] extends readonly string[] 
    ? typeof componentList[T]['sizes'][number] 
    : never;