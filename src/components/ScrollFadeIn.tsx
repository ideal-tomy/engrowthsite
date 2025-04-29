import React, { Children, cloneElement, isValidElement } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({
  children,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const child = Children.only(children);

  if (!isValidElement(child)) { // Simplify type guard
    return <>{children}</>;
  }

  // Clone the child element and add the ref and classes
  // No complex type assertion needed now that CardComponent uses forwardRef
  return cloneElement(child, {
    ref,
    className: `${child.props.className || ''} ${className} ${inView ? 'fade-in-scroll-visible' : 'fade-in-scroll-start'}`.trim(),
  });
};

export default ScrollFadeIn; 