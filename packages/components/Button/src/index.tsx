import React, { ReactNode } from "react";

export type ButtonHTMLProps = JSX.IntrinsicElements["button"];

export interface ButtonProps extends ButtonHTMLProps {
  children: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { children } = props;
  return <button type="button">{children}</button>;
};
