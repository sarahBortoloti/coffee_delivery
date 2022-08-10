import styled, { css } from "styled-components";

export const LabelLocalization = styled.label`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;

    background-color: ${theme.colors.brand.purpleLight};
    color: ${theme.colors.brand.purpleDark};
    font-family: "Roboto";
    font-size: ${theme.fonts.sizes.font14};
    font-weight: ${theme.fonts.weight.regular};
    border-radius: 6px;
  `}
`;
