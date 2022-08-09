import { fonts } from "./fonts";
import { colors } from "./colors";
export const buttons = {
  variants: {
    primary: {
      backgroundColor: colors.brand.yellow,
      color: colors.base.white,

      padding: "0.75rem 0.5rem",
      borderRadius: "6px",
      border: "none",
      fontFamily: "Roboto",
      fontSize: fonts.sizes.font14,

      "&:hover": {
        backgroundColor: colors.brand.yellowDark,
      },
    },

    default: {
      border: "none",
      color: colors.base.text,
      backgroundColor: colors.base.button,

      "&:hover": {
        backgroundColor: colors.base.hover,
      },
    },
  },
};
