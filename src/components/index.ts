// Import all component classes
import buttonClasses from './button/index.ts';
import cardClasses from './card/index.ts';
import inputClasses from './input/index.ts';
import modalClasses from './modal/index.ts';
import badgeClasses from './badge/index.ts';

// Export as a single object for easy access
const components = {
  button: buttonClasses,
  card: cardClasses,
  input: inputClasses,
  modal: modalClasses,
  badge: badgeClasses
};

export default components;