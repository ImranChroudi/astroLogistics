import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface ImageRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function ImageReveal({ children, delay = 0 }: ImageRevealProps) {
  return (
    <div
      className="overflow-hidden rounded-2xl"
    >
      {children}
    </div>
  );
}

