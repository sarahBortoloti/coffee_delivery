import { useState } from "react";
import { StyledInput } from "./styles";


type InputStyleProps = {
  width: string;
}

type InputProps = InputStyleProps & {
  id?: string;
  type?: string;
  placeholder?: string;
  minValue?: number;
  maxValue?: number;
  minLength?: number;
  maxLength?: number;
  name?: string;
  onBlur?: () => void;
  onChange?: () => void;
  onFocus?: () => void;
};


export const Input = ({ ...props }: InputProps) => {
  return (
    <StyledInput {...props} />
  )
};
