import { cn } from '@/lib/utils';

const SectionHeading = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h2 className={cn('border-l-4 border-primary pl-4 text-2xl font-bold md:text-3xl', className)}>
    <span className="text-gradient-accent">{children}</span>
  </h2>
);

export default SectionHeading;
