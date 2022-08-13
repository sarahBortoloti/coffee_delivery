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
  gap: 1rem;
  background-color: ${({ backgroundColor }) =>
    backgroundColor && backgroundColor};
  border: none;

  color: ${({ color }) => color};

  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};

  ${({ variant }) => variant && getButtonVariant(variant)};
`;
