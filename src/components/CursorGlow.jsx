import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const mouseX = useMotionValue(-600);
  const mouseY = useMotionValue(-600);

  const x = useSpring(mouseX, { damping: 25, stiffness: 180, mass: 0.5 });
  const y = useSpring(mouseY, { damping: 25, stiffness: 180, mass: 0.5 });

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
        position: 'fixed',
        top: 0,
        left: 0,
        width: 600,
        height: 600,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(129, 140, 248, 0.07) 0%, rgba(129, 140, 248, 0.02) 40%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
        willChange: 'transform',
      }}
    />
  );
}
