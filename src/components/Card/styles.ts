import { Flex } from "rebass";
import styled, { css } from "styled-components";
import { Button } from "../Button";

export const StyledCard = styled(Flex)`
  ${({ theme }) => css`
    background-color: ${theme.colors.base.card};
    border-radius: 6px 36px;
    width: 16rem;
    height: 19.4rem;
    margin-bottom: 40px;
  `}
`;

export const Tag = styled(Flex)`
  ${({ theme }) => css`
    border-radius: 100px;
    height: 1.25rem;

    padding: 0.25rem 0.5rem;

    background-color: ${theme.colors.brand.yellowLight};
    font-family: "Roboto";
    font-weight: ${theme.fonts.weight.bold};
    font-size: ${theme.fonts.sizes.font10};
    line-height: ${theme.fonts.lineHeight.lineHeight130};

    text-transform: uppercase;

    color: ${theme.colors.brand.yellowDark};
  `}
`;

export const ContentTotal = styled(Flex)`
  border-radius: 6px;
  height: 38px;
`;

export const StyledButton = styled(Button)`
  ${({ theme }) => css`
    background-color: ${theme.colors.base.button};
  `};

  &:hover {
    background-color: "transparent";
  }
`;

export const Price = styled.div`
  ${({ theme }) => css`
    font-family: "Baloo 2";
    font-weight: ${theme.fonts.weight.extraBold};
    font-size: ${theme.fonts.sizes.font24};
  `};

  &::before {
    content: "R$";
    font-family: "Roboto";
    font-size: 14px;
    font-weight: normal;
  }
`;
