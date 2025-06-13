// Utility functions and helpers

// Function to combine class names conditionally
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Function to generate component classes based on props and component config
export function getComponentClasses<T extends Record<string, any>>(
  component: Record<string, any>,
  props: T
): string {
  const classes: string[] = [];
  
  // Add base class
  if (component.base && typeof component.base === 'string') {
    classes.push(component.base);
  }
  
  // Add variant class
  if (props.variant && component.variants && component.variants[props.variant] && typeof component.variants[props.variant] === 'string') {
    classes.push(component.variants[props.variant]);
  }
  
  // Add size class
  if (props.size && component.sizes && component.sizes[props.size] && typeof component.sizes[props.size] === 'string') {
    classes.push(component.sizes[props.size]);
  }
  
  // Add state classes
  if (component.states) {
    Object.entries(component.states).forEach(([key, value]) => {
      if (props[key] && value && typeof value === 'string') {
        classes.push(value);
      }
    });
  }
  
  return classes.join(' ');
}

// Export all utilities
const utilities = {
  cn,
  getComponentClasses
};

export default utilities;