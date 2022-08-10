import React, { MouseEventHandler } from "react"
import * as Styled from "./styles"

export enum variantsOfButton {
  primary = "primary",
  default = "default"
}

export type ButtonProps = {
  variant?: variantsOfButton
  children: React.ReactNode,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  backgroundColor?: string,
  color?: string,
}

export const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return (
    <Styled.Button onClick={onClick}  {...props}>
      {children}
    </Styled.Button>
  )
}