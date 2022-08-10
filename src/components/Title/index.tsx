import { StyledTitle, StyledSubtitle } from "./styles";

export type StyledTitleProps = {
  fontSizeTitle?: number | string;
}

type TitleProps = StyledTitleProps & {
  title: string;
  subtitle?: string;
};

export const Title = ({ title, subtitle, fontSizeTitle }: TitleProps) => {

  return (
    <>
      <StyledTitle fontSizeTitle={fontSizeTitle}>{title}</StyledTitle>
      {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
    </>
  )

}