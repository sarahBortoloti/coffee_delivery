import { Flex } from "rebass";
import styled, { css } from "styled-components";

export const Card = styled(Flex)`
  ${({ theme }) => css`
    background-color: ${theme.colors.base.card};
    display: flex;
    flex-direction: column;
    width: 640px;
    padding: 40px;
  `}
`;

export const ContentIcon = styled.span`
  margin-right: 8px;
`;

export const ContainerShop = styled(Flex)`
  border-bottom: 1px solid #e6e5e5;
  padding-bottom: 24px;
`;
