import { Platform } from "react-native";
import colors from './colors.style';

export const isAndroid = Platform.OS === "android";

export const shadowStyle = {
	buttonStyle: {
		shadowColor: colors.theme.light.shadowColor,
		shadowOffset: { width: 2, height: 1 },
		shadowOpacity: 0.3,
		shadowRadius: 5,
	},
	topStyle: {
		shadowColor: colors.theme.light.shadowColor,
		shadowOffset: { width: 0, height: -6 },
		shadowOpacity: 0.3,
		shadowRadius: 10,
	}
};

export const defaultShadowStyle = isAndroid ? {
	elevation: 5,
} : shadowStyle.buttonStyle;

export const container = {
	flex: 1,
	backgroundColor: colors.theme.light.primaryBackground
};

export const divider = {
	margin: 16,
	borderBottomWidth: 1,
	borderWidth: 1,
	borderColor: colors.theme.light.dividerColor,
	color: colors.theme.light.dividerColor,
	borderRadius: 20
};
