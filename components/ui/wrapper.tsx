import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const wrapperVariants = cva(
  "w-screen mx-auto",
  {
    variants: {
      variant: {
        desktop:
          "max-w-[1430px] px-4",
        mobile:
          "max-w-[300px] px-2",
      },
     
    },
    defaultVariants: {
      variant: "desktop",
    },
  },
);

function Wrapper({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof wrapperVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="div"
      className={cn(wrapperVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Wrapper, wrapperVariants };
