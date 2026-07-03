import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-sm px-[30px] py-[15px] text-[0.78rem] font-bold uppercase tracking-[0.14em] transition-all duration-500 ease-reveal-out disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        gold: "bg-gold text-charcoal hover:-translate-y-0.5 hover:bg-gold-dark hover:text-white",
        outline:
          "border border-current hover:bg-current hover:text-charcoal",
        outlineDark:
          "border border-white/80 text-white hover:bg-white/10 hover:text-white",
        ghost: "hover:bg-black/5",
      },
    },
    defaultVariants: {
      variant: "gold",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
