import { StyledTitleProps } from "./index";
import styled, { css } from "styled-components";
import { fonts } from "../../styles/fonts";

export const StyledTitle = styled.h2<StyledTitleProps>`
  ${({ theme }) => css`
    font-family: "Baloo 2";
    line-height: ${theme.fonts.lineHeight.lineHeight130};
    font-weight: ${theme.fonts.weight.extraBold};
    margin-bottom: 1rem;
  `}
  font-size: ${({ fontSizeTitle }) => fontSizeTitle || fonts.sizes.font48};
`;

export const StyledSubtitle = styled.h6`
  ${({ theme }) => css`
    font-family: "Roboto";
    font-size: ${theme.fonts.sizes.font20};
    font-weight: ${theme.fonts.weight.regular};
    margin-top: 0;
    font-weight: 400;
    line-height: ${theme.fonts.lineHeight.lineHeight130};
    color: ${theme.colors.base.subtitle}; ;
  `}
`;
