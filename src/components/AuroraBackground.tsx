import { cn } from '@/lib/utils';

// Decorative blurred color blobs behind a section's content.
// The parent must be `relative isolate` so the -z-10 blobs stay inside it.
const AuroraBackground = ({ className }: { className?: string }) => (
  <div aria-hidden className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
    <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-aurora-1/30 blur-3xl" />
    <div className="absolute top-1/3 -right-32 h-112 w-112 rounded-full bg-aurora-2/25 blur-3xl" />
    <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-aurora-3/30 blur-3xl" />
  </div>
);

export default AuroraBackground;
