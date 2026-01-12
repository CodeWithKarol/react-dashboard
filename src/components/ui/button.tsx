import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Radix UI Slot is a nice-to-have for polymorphism, but for simplicity/standard deps I'll just use standard props or install @radix-ui/react-slot if strictly needed,
// but the user didn't ask for Radix. I'll stick to simple composition or standard HTML props.
// Actually, I'll remove Slot to avoid installing extra deps unless I really need it, keeping it vanilla React 19 optimized.

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    // React 19 allows ref as prop, but forwardRef is still valid for libraries.
    // For idiomatic React 19 application code, we can just destructure ref if we aren't using forwardRef, but forwardRef is safe for library components.
    // Ideally in React 19 we pass `ref` directly in props for function components, but type definitions for generic HTML elements often prefer forwardRef for now to play nice with TS.
    // I'll stick to forwardRef for maximum compatibility with current ecosystem, or just `props.ref` if I wasn't exporting a generic lib.

    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
