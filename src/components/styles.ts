import React from "react";
import styled, { css } from "styled-components";

type IconProps = {
  children: React.ReactNode;
  backgroundColor: string;
};

export const Flex = styled.div`
  display: flex;
  gap: 12px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
`;

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

export const Banner = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 72px;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: "Baloo 2";
    line-height: ${theme.fonts.lineHeight.lineHeight130};
    font-weight: ${theme.fonts.weight.extraBold};
    margin-bottom: 1rem;
    font-size: ${theme.fonts.sizes.font48};
  `}
`;

export const BannerTexts = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 588px;
  margin-right: 28px;
`;

export const BannerCoffe = styled.div`
  margin-left: 28px;
`;

export const Subtitle = styled.h6`
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

export const Icon = styled.div<IconProps>`
  border-radius: 1000px;
  width: 32px;
  height: 32px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor && backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  margin-top: 4px;
  /* identical to box height, or 21px */

  /* Base/Text */

  color: #574f4d;
`;

export const FlexItems = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  max-width: 567px;
`;
