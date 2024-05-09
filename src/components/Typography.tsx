import { type ReactNode } from "react";

type Children = {
  children: ReactNode;
  className?: string;
};

export const H1 = ({ children, className }: Children) => {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
    >
      {children}
    </h1>
  );
};

export const P = ({ children, className }: Children) => {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
      {children}
    </p>
  );
};
