import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MemorySection({ image, title, description, index }) {
  const ref = useRef(null);
  const [showDescription, setShowDescription] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const handleClick = () => setShowDescription(prev => !prev);

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
          boxShadow: '0 0 30px rgba(196,167,231,0.25)',
        }}
        style={{
          width: '90vw',
          maxWidth: '400px',
          height: '80vh',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '20px',
          boxShadow: showDescription
            ? '0 0 50px rgba(196,167,231,0.35)'
            : '0 25px 60px rgba(196,167,231,0.15)',
          border: showDescription
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
        {/* Text container */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            background: 'linear-gradient(to top, rgba(28,27,47,0.85), transparent)',
            color: '#ffffff',
            padding: '1.2rem',
            borderRadius: '0 0 20px 20px',
            pointerEvents: 'none',
            backdropFilter: 'blur(6px)',
          }}
        >
          {/* Title with glow */}
          <h2
            style={{
              margin: 0,
              fontSize: '1.5rem',
              color: '#e8d0ff',
              textShadow: '0 0 10px rgba(200,160,255,0.8), 0 0 20px rgba(196,167,231,0.4)',
            }}
          >
            {title}
          </h2>

          {/* Description with smooth fade */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={showDescription ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            style={{
              marginTop: '0.6rem',
              fontSize: '1.05rem',
              color: '#f3ecff',
              textShadow: '0 0 6px rgba(255,255,255,0.15)',
              pointerEvents: 'none',
            }}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
