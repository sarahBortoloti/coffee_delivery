import { Flex, Button } from "rebass";
import styled, { css } from "styled-components";

export const ContentTotal = styled(Flex)`
  border-radius: 6px;
  height: 38px;
  box-sizing: border-box;
`;

export const StyledButton = styled(Button)`
  ${({ theme }) => css`
    background-color: ${theme.colors.base.button};
    box-sizing: border-box;
    padding: 8px;
    cursor: pointer;
  `};

  &:hover {
    background-color: "transparent";
  }
`;
