import React from "react"
import { StyledText } from "./styles"


export type StyledTextProps = {
  fontSizeText?: number | string;
  color?: string;
}

type TextProps = StyledTextProps & {
  children: React.ReactNode;
}
export const Text = ({ children, ...props }: TextProps) => {

  return (
    <StyledText {...props}>
      {children}
    </StyledText>
  )
}