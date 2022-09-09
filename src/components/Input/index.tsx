import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from "react";
import { UseFormRegister } from "react-hook-form";
import { StyledInput } from "./styles";

export type InputProps = {
  id?: string;
  name?: string;
  width?: string;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "width"
>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ width, ...props }, ref) => {
    return <StyledInput {...props} width={width} ref={ref} />;
  }
);
