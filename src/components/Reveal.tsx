import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li" | "ul" | "h1" | "h2" | "h3" | "p";
  amount?: number;
} & Omit<HTMLMotionProps<"div">, "ref" | "children">;

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 30,
  x = 0,
  scale,
  className,
  as = "div",
  amount = 0.2,
  ...rest
}: RevealProps) {
  const initial: Record<string, number> = { opacity: 0 };
  const animate: Record<string, number> = { opacity: 1 };
  if (y) {
    initial.y = y;
    animate.y = 0;
  }
  if (x) {
    initial.x = x;
    animate.x = 0;
  }
  if (scale !== undefined) {
    initial.scale = scale;
    animate.scale = 1;
  }
  const MotionTag = (motion as unknown as Record<string, typeof motion.div>)[as] ?? motion.div;
  return (
    <MotionTag
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount }}
      transition={{ duration, ease, delay }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export function Stagger({
  children,
  className,
  amount = 0.15,
  staggerChildren = 0.08,
  delayChildren = 0.05,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  staggerChildren?: number;
  delayChildren?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: {},
        show: { transition: { staggerChildren, delayChildren } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { staggerParent, staggerChild };
