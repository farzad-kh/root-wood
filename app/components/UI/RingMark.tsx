"use client"
import { motion } from "motion/react"
type RingMarkProps = {
  className?: string;
  /** نسخه‌ی کم‌رنگ‌تر برای استفاده به‌عنوان واترمارک پس‌زمینه */
  muted?: boolean;
};

export function RingMark({ className = "h-6 w-6", muted = false }: RingMarkProps) {
  return (
    <motion.div  className={className}
      initial={{ rotate: 250 }}
      whileInView={{ rotate: 0 }}
      transition={{
        duration: 1

      }}
      viewport={{ once: true }}
    >

      <svg
        viewBox="0 0 100 100"
        fill="none"
       className="w-full h-full"
        aria-hidden="true"
      >
        <circle cx="50" cy="52" r="46" stroke="currentColor" strokeWidth="1.4" opacity={muted ? 0.16 : 0.85} />
        <circle cx="48" cy="50" r="34" stroke="currentColor" strokeWidth="1.4" opacity={muted ? 0.22 : 0.65} />
        <circle cx="51" cy="53" r="21" stroke="currentColor" strokeWidth="1.4" opacity={muted ? 0.3 : 0.5} />
        <circle cx="49" cy="51" r="9" stroke="currentColor" strokeWidth="2" opacity={muted ? 0.45 : 0.85} />
        <circle cx="50" cy="52" r="2.4" fill="currentColor" opacity={muted ? 0.6 : 1} />
      </svg>
    </motion.div>
  );
}
