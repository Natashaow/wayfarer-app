import type { CSSProperties } from "react";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "!bg-background !border !border-border !shadow-[var(--shadow-card)] !rounded-xl !px-4 !py-3 !gap-2.5 !min-w-0 !w-auto !max-w-[280px]",
          title:
            "!text-foreground !font-medium",
          icon: "!text-success",
        },
        style: {
          fontSize: "var(--text-body-sm)",
          lineHeight: "var(--leading-body-sm)",
          fontFamily: "var(--font-body)",
        } as CSSProperties,
      }}
      {...props}
    />
  );
};

export { Toaster };