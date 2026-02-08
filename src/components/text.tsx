import { cn } from '@/lib/cn';

export const TextDisplay = ({
  className,
  children,
  ...props
}: ComponentClassNameAndChildrenProp &
  React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      {...props}
      className={cn(
        'text-foreground font-sans text-[50px] leading-[100%] font-[700] tracking-[0%]',
        className
      )}
    >
      {children}
    </h1>
  );
};

export const TextHeading = ({
  className,
  children,
  ...props
}: ComponentClassNameAndChildrenProp &
  React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      {...props}
      className={cn(
        'text-foreground font-sans text-[30px] leading-[115%] font-[600] tracking-[0%]',
        className
      )}
    >
      {children}
    </h2>
  );
};

export const TextSubheading = ({
  className,
  children,
  ...props
}: ComponentClassNameAndChildrenProp &
  React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      {...props}
      className={cn(
        'text-foreground font-sans text-[20px] leading-[28px] font-[500] tracking-[0%]',
        className
      )}
    >
      {children}
    </p>
  );
};

export const TextBody = ({
  className,
  children,
  ...props
}: ComponentClassNameAndChildrenProp &
  React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      {...props}
      className={cn(
        'text-foreground font-sans text-[20px] leading-[28px] font-[300] tracking-[0%]',
        className
      )}
    >
      {children}
    </p>
  );
};
