import styled, { css } from "styled-components";
import { StyledTextProps } from ".";

export const StyledText = styled.span<StyledTextProps>`
  ${({ theme, fontSizeText, fontWeight, color }) => css`
    font-family: "Roboto";
    color: ${color || theme.colors.base.text};
    font-size: ${fontSizeText || theme.fonts.sizes.font16};
    font-weight: ${fontWeight || theme.fonts.weight.regular};
    line-height: ${theme.fonts.lineHeight.lineHeight130};
  `}
`;
