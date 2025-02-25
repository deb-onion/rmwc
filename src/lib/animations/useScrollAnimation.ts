import { useInView } from 'react-intersection-observer';
import { useSpring } from '@react-spring/web';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.2,
    triggerOnce = true,
    delay = 0,
  } = options;

  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    },
    delay,
    config: {
      tension: 280,
      friction: 20,
    },
  });

  return { ref, springProps };
}; 