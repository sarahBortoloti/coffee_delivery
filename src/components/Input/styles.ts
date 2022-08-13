import styled, { css } from "styled-components";

export const StyledInput = styled.input`
  ${({ theme, width }) => css`
    font-family: "Roboto";
    height: 42px;
    background-color: ${theme.colors.base.input};
    width: ${width};
    border: 1px solid #e6e5e5;
    border-radius: 4px;
    color: #8d8686;
    padding-left: 12px;
    box-sizing: border-box;
  `}
`;
