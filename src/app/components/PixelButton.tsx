import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PixelButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function PixelButton({
  children,
  variant = 'primary',
  className = '',
  onClick,
  disabled = false,
  type = 'button'
}: PixelButtonProps) {
  const variantStyles = {
    primary: {
      bg: 'bg-primary',
      text: 'text-primary-foreground',
      border: 'border-primary',
      hover: 'hover:bg-primary/90',
      glow: 'shadow-lg shadow-primary/20 hover:shadow-primary/40',
    },
    secondary: {
      bg: 'bg-card',
      text: 'text-foreground',
      border: 'border-secondary/40',
      hover: 'hover:bg-secondary/10 hover:border-secondary',
      glow: '',
    },
    accent: {
      bg: 'bg-card',
      text: 'text-foreground',
      border: 'border-accent/40',
      hover: 'hover:bg-accent/10 hover:border-accent',
      glow: '',
    },
    ghost: {
      bg: 'bg-transparent',
      text: 'text-foreground',
      border: 'border-primary/30',
      hover: 'hover:bg-primary/10 hover:border-primary/60',
      glow: '',
    },
  };

  const style = variantStyles[variant];

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={`
        relative group px-6 py-3
        ${style.bg} ${style.text} ${style.hover}
        border-2 ${style.border}
        transition-all duration-300
        overflow-hidden
        disabled:cursor-not-allowed disabled:opacity-70
        ${style.glow}
        ${className}
      `}
    >
      {/* Animated shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      {/* Pixel corners */}
      <div className="absolute top-0 right-0 w-2 h-2 bg-current opacity-30" />
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-current opacity-20" />
    </motion.button>
  );
}
