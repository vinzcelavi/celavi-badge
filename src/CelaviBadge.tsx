import * as React from 'react';
import { CelaviIcon } from './CelaviIcon';
import { cn } from './utils';

interface CelaviBadgeProps {
  /** Position du badge */
  position?: 'bottom-right' | 'bottom-left';
  /** Classes CSS additionnelles pour le container */
  className?: string;
  /** Couleur du texte (classe Tailwind ou custom) */
  textColorClass?: string;
  /** Couleur au hover (classe Tailwind ou custom) */
  hoverColorClass?: string;
}

const CelaviBadge: React.FC<CelaviBadgeProps> = ({
  position = 'bottom-right',
  className,
  textColorClass = 'text-foreground',
  hoverColorClass = 'hover:text-white/80',
}) => {
  const positionClasses = {
    'bottom-right': 'right-6 md:right-3 bottom-6',
    'bottom-left': 'left-6 md:left-3 bottom-6',
  };

  return (
    <div className={cn('z-30 fixed', positionClasses[position], className)}>
      <a
        href="https://celavi.fr"
        target="_blank"
        rel="noreferrer"
        className={cn(
          // Layout
          'flex items-center gap-2',
          // Typography
          'text-xs font-italic',
          textColorClass,
          // Interaction
          hoverColorClass,
          // Rotation
          'transform rotate-180',
          // Animation/Transition
          'transition-colors duration-200'
        )}
        style={{
          writingMode: 'vertical-rl',
        }}
      >
        <span className="font-normal">Web Design</span>{' '}
        <CelaviIcon className="w-auto h-4.5 animate-spin-slow inline-flex" /> Vincent Bianciotto
      </a>
    </div>
  );
};

export { CelaviBadge };
export type { CelaviBadgeProps };
