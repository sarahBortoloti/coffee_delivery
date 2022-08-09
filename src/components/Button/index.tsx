import React from "react"
import * as Styled from "./styles"

export enum variantsOfButton {
  primary = "primary",
  default = "default"
}

export type ButtonProps = {
  variant?: variantsOfButton
  children: React.ReactNode,
  onClick?: React.MouseEvent<HTMLElement>,
  backgroundColor?: string,
  color?: string,
}

export const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return (
    <Styled.Button {...props}>
      {children}
    </Styled.Button>
  )
}