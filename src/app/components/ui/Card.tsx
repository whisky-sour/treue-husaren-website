import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-brand-surface shadow-sm p-4 sm:p-5 ${className}`}
    >
      {children}
    </div>
  );
}
