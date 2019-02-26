import { Platform } from "react-native";
import colors from "./colors";

export function buttonStyle(backgroundColor, size) {
  return {
    width: size || 50,
    height: size || 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: (size || 50) / 2,
    backgroundColor: backgroundColor || colors.theme.light.primaryBackground
  };
}

export function _materialShadow(shadowColor) {
  return {
    ...Platform.select({
      ios: {
        shadowRadius: 1,
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 1 },
        shadowColor: shadowColor || colors.materialShadowColor
      },
      android: {
        elevation: 3
      }
    })
  };
}

export function defaultShadow(shadowColor) {
  return {
    ...Platform.select({
      ios: {
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 3 },
        shadowColor: shadowColor || colors.theme.light.shadowColor
      },
      android: {
        elevation: 3
      }
    })
  };
}

export function _textStyle(fontSize, textColor) {
  return {
    top: 16,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: fontSize || 16,
    color: textColor || colors.theme.light.primary
  };
}

export default {
  containerStyle: {
    flexDirection: "column"
  },
  itemContainer: {
    flexDirection: "row"
  }
};
