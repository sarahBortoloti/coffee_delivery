import styled from "styled-components";
import { ButtonProps, variantsOfButton } from ".";
import { buttons } from "../../styles/buttons";

const { variants } = buttons;

const getButtonVariant = (variant: variantsOfButton) => variants[variant];

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  gap: 0.5rem;
  background-color: ${({ backgroundColor }) =>
    backgroundColor && backgroundColor};
  border: none;
  text-transform: uppercase;
  color: ${({ color }) => color};

  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  ${({ variant }) => variant && getButtonVariant(variant)};
`;
