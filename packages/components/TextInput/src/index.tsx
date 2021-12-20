import React from "react";

export type TextInputHTMLProps = JSX.IntrinsicElements["input"];

export type TextInputProps = TextInputHTMLProps;

export const TextInput = (props: TextInputProps) => {
  const { type } = props;
  return <input type={type} />;
};
