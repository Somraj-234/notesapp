import { ReactNode } from "react";

export const Bento = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`relative ${className}`}>
    <span className="mycorner absolute -bottom-0 -left-0 w-1 h-1 border-b-1 border-l-1 border-black z-10"></span>
    <span className="mycorner absolute -top-0 -left-0 w-1 h-1 border-t-1 border-l-1 border-black z-10"></span>
    <span className="mycorner absolute -bottom-0 -right-0 w-1 h-1 border-b-1 border-r-1 border-black z-10"></span>
    <span className="mycorner absolute -top-0 -right-0 w-1 h-1 border-t-1 border-r-1 border-black z-10"></span>
    {children}
  </div>
);
