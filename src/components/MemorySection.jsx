import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MemorySection({ image, title, description, index }) {
  const ref = useRef(null);
  const [showText, setShowText] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const handleClick = () => setShowText(prev => !prev);

  return (
    <section
      ref={ref}
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        onClick={handleClick}
        whileHover={{
          scale: 1.02,
          boxShadow: '0 0 30px rgba(196,167,231,0.2)',
        }}
        style={{
          width: '90vw',
          maxWidth: '400px',
          height: '80vh',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '20px',
          boxShadow: showText
            ? '0 0 50px rgba(196,167,231,0.35)'
            : '0 25px 60px rgba(196,167,231,0.15)',
          border: showText
            ? '2px solid #c4a7e7'
            : '1px solid rgba(196,167,231,0.1)',
          position: 'relative',
          scale,
          opacity,
          cursor: 'pointer',
          overflow: 'hidden',
          transition: 'all 0.4s ease-in-out',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            background: 'linear-gradient(to top, rgba(28,27,47,0.85), transparent)',
            color: '#c4a7e7',
            padding: '1.2rem',
            borderRadius: '0 0 20px 20px',
            pointerEvents: 'none',
            backdropFilter: 'blur(4px)',
          }}
        >
          <h2 style={{ margin: 0, fontSize: '1.3rem' }}>{title}</h2>
          <p style={{ margin: '0.5rem 0 0', fontSize: '1rem' }}>{description}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
