'use client';

import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

// Both icons are rendered and CSS picks one, so the markup is identical in both
// themes — no hydration mismatch when the pre-paint script has set `.dark`.
const ThemeToggle = ({ className }: { className?: string }) => {
  const { toggleTheme } = useTheme();
  const { t } = useLanguage();
  const label = t('থিম পরিবর্তন করুন', 'Toggle theme');

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={cn(
        'flex items-center justify-center w-9 h-9 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors',
        className,
      )}
    >
      <Moon className="w-4.5 h-4.5 dark:hidden" />
      <Sun className="hidden w-4.5 h-4.5 dark:block" />
    </button>
  );
};

export default ThemeToggle;
