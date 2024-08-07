import { useInView } from 'react-intersection-observer';
import 'animate.css';

const AnimatedText = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <div
      ref={ref}
      className={`${
        inView ? 'animate__animated animate__fadeInUp animate_slower' : ''
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedText;
