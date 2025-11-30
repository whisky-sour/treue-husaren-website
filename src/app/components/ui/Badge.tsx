import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-brand-green/10 px-2.5 py-0.5 text-[11px] font-medium text-brand-green">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-green" />
      {children}
    </span>
  );
}
