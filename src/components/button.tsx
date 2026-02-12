import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/cn';

const buttonVariants = cva(
  "[&_svg:not([class*='size-'])]:size-6 [&_svg]:shrink-0 disabled:pointer-events-none disabled:opacity-50 shrink-0 [&_svg]:pointer-events-none transition-all" +
    ' ' +
    'inline-flex items-center justify-center gap-2 rounded-full whitespace-nowrap outline-none hover:cursor-pointer transition-color duration-[200ms]',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',

        'black-outline':
          'hover:bg-brand-black-200/5 bg-background border-2 border-brand-black-200 text-brand-black-200',

        'blue-outline':
          'hover:bg-brand-blue-300/5 bg-background border-2 border-brand-blue-300 text-brand-blue-300',
        'green-outline':
          'hover:bg-brand-green-300/5 bg-background border-2 border-brand-green-300 text-brand-green-300',
        'yellow-outline':
          'hover:bg-brand-yellow-300/5 bg-background border-2 border-brand-yellow-300 text-brand-yellow-300',
        'red-outline':
          'hover:bg-brand-red-300/5 bg-background border-2 border-brand-red-300 text-brand-red-300',

        'blue-solid-primary':
          'hover:bg-brand-blue-300/80 bg-brand-blue-300 text-foreground border-2 brand-border',
        'green-solid-primary':
          'hover:bg-brand-green-300/80 bg-brand-green-300 text-foreground border-2 brand-border',
        'yellow-solid-primary':
          'hover:bg-brand-yellow-300/80 bg-brand-yellow-300 text-foreground border-2 brand-border',
        'red-solid-primary':
          'hover:bg-brand-red-300/80 bg-brand-red-300 text-foreground border-2 brand-border',

        'blue-solid-secondary':
          'hover:bg-brand-blue-200/80 bg-brand-blue-200 text-foreground border-2 brand-border',
        'green-solid-secondary':
          'hover:bg-brand-green-200/80 bg-brand-green-200 text-foreground border-2 brand-border',
        'yellow-solid-secondary':
          'hover:bg-brand-yellow-300/80 bg-brand-yellow-200 text-foreground border-2 brand-border',
        'red-solid-secondary':
          'hover:bg-brand-red-200/80 bg-brand-red-200 text-foreground border-2 brand-border'
      },
      size: {
        default: 'px-6 py-[9px]'
      }
    },
    defaultVariants: {
      variant: 'black-outline',
      size: 'default'
    }
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      data-slot='button'
      className={cn(
        'text-foreground font-sans text-[20px] leading-[28px] font-[500] tracking-[0%]',
        buttonVariants({ variant, size, className }),
        /* Customize button focus in the future.
           I.e: so the user can use the keyboard to navigate */
        // 'focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:ring-[3px]',
        className
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
