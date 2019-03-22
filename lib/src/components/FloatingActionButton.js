import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
// Customs
import colors from "./styles/colors";
import Ripple from "react-native-material-ripple";
import Icon from "react-native-dynamic-vector-icons";
import _styles, {
  buttonStyle,
  defaultShadow,
  _textStyle,
  _materialShadow
} from "./styles/styles";

const FloatingActionButton = props => {
  const {
    size,
    text,
    styles,
    onPress,
    disabled,
    iconName,
    iconType,
    iconColor,
    iconSize,
    fontSize,
    textColor,
    textStyle,
    onPressIn,
    onPressOut,
    rippleSize,
    textDisable,
    shadowStyle,
    shadowColor,
    rippleColor,
    onLongPress,
    iconComponent,
    rippleOpacity,
    rippleDuration,
    backgroundColor,
    containerStyle,
    materialShadow,
    rippleContainerBorderRadius
  } = props;

  return (
    <View style={containerStyle || _styles.containerStyle}>
      <Ripple
        style={[
          styles || buttonStyle(backgroundColor, size),
          (materialShadow && _materialShadow(shadowColor)) ||
            shadowStyle ||
            defaultShadow()
        ]}
        onPress={onPress}
        disable={disabled}
        onPressIn={onPressIn}
        rippleSize={rippleSize}
        onPressOut={onPressOut}
        onLongPress={onLongPress}
        rippleOpacity={rippleOpacity}
        rippleDuration={rippleDuration}
        rippleColor={rippleColor || colors.theme.light.primary}
        rippleContainerBorderRadius={rippleContainerBorderRadius || 35}
      >
        {iconComponent || (
          <View>
            <Icon
              name={iconName || "home"}
              type={iconType || "entypo"}
              size={iconSize || 30}
              color={iconColor || colors.theme.light.primary}
            />
          </View>
        )}
      </Ripple>
      {!textDisable && (
        <Text style={[textStyle || _textStyle(fontSize, textColor)]}>
          {text}
        </Text>
      )}
    </View>
  );
};

FloatingActionButton.propTypes = {
  size: PropTypes.number,
  text: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  fontSize: PropTypes.number,
  textColor: PropTypes.string,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  textDisable: PropTypes.bool,
  shadowColor: PropTypes.string,
  rippleColor: PropTypes.string,
  onLongPress: PropTypes.func,
  iconComponent: PropTypes.object,
  backgroundColor: PropTypes.string,
  materialShadow: PropTypes.bool,
  rippleContainerBorderRadius: PropTypes.number
};

FloatingActionButton.defaultProps = {
  size: 50,
  text: "",
  onPress: () => {},
  disabled: false,
  iconName: "home",
  iconType: "entypo",
  iconColor: colors.theme.light.primary,
  iconSize: 30,
  fontSize: 16,
  textColor: colors.theme.light.primary,
  onPressIn: () => {},
  onPressOut: () => {},
  onLongPress: () => {},
  textDisable: false,
  shadowColor: colors.theme.light.shadowColor,
  rippleColor: colors.theme.light.primary,
  backgroundColor: colors.theme.light.primaryBackground,
  materialShadow: false,
  rippleContainerBorderRadius: 35
};

export default FloatingActionButton;
