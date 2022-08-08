import { colors } from "./colors";
import { fonts } from "./fonts";

export { colors, fonts };

const defaultTheme = (
  theme = {
    colors,
    fonts,
  }
) => ({
  theme,
  colors,
  fonts,
});

export default defaultTheme;
