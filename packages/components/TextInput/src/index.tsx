import React from "react";

export type TextInputHTMLProps = JSX.IntrinsicElements["input"];

export interface TextInputProps extends TextInputHTMLProps {}

export const TextInput = (props: TextInputProps) => {
  const { children } = props;
  return <button type="button">{children}</button>;
};
