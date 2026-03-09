import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const sectionVariants = cva(
  "w-full",
  {
    variants: {
      background: {
        default: "bg-background",
        muted: "bg-muted/30",
        gradient: "gradient-secondary",
        card: "bg-card",
      },
      padding: {
        none: "py-0",
        sm: "py-8 md:py-12",
        md: "py-12 md:py-16",
        lg: "py-16 md:py-24",
        xl: "py-24 md:py-32",
      },
    },
    defaultVariants: {
      background: "default",
      padding: "lg",
    },
  }
);

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  container?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, background, padding, container = true, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(sectionVariants({ background, padding }), className)}
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-4">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
);

Section.displayName = "Section";

export default Section;


