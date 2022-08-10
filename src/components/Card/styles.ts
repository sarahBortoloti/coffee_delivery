import { Flex } from "rebass";
import styled, { css } from "styled-components";
import { Button } from "../Button";

export const StyledCard = styled(Flex)`
  ${({ theme }) => css`
    background-color: ${theme.colors.base.card};
    border-radius: 6px 36px;
    width: 256px;
    height: 310px;
    margin-bottom: 40px;
  `}
`;

export const Tag = styled(Flex)`
  ${({ theme }) => css`
    border-radius: 100px;
    height: 20px;

    padding: 4px 8px;

    background-color: ${theme.colors.brand.yellowLight};
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;

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

export const StyledFlex = styled(Flex)`
  column-gap: 8px;
`;

export const ContainerTag = styled(Flex)`
  column-gap: 4px;
`;
