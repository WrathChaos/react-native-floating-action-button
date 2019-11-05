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
    iconName,
    iconType,
    iconColor,
    iconSize,
    fontSize,
    textColor,
    textStyle,
    textDisable,
    shadowStyle,
    shadowColor,
    rippleColor,
    iconComponent,
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
        rippleColor={rippleColor || colors.theme.light.primary}
        rippleContainerBorderRadius={rippleContainerBorderRadius}
        {...props}
      >
        {iconComponent || (
          <View>
            <Icon
              name={iconName}
              type={iconType}
              size={iconSize}
              color={iconColor}
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
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconSize: PropTypes.number,
  fontSize: PropTypes.number,
  iconColor: PropTypes.string,
  textColor: PropTypes.string,
  textDisable: PropTypes.bool,
  shadowColor: PropTypes.string,
  rippleColor: PropTypes.string,
  materialShadow: PropTypes.bool,
  iconComponent: PropTypes.object,
  backgroundColor: PropTypes.string,
  rippleContainerBorderRadius: PropTypes.number
};

FloatingActionButton.defaultProps = {
  size: 50,
  text: "",
  iconSize: 20,
  fontSize: 16,
  disabled: false,
  iconName: "home",
  onPress: () => {},
  iconType: "Entypo",
  textDisable: false,
  materialShadow: false,
  rippleContainerBorderRadius: 35,
  textColor: colors.theme.light.primary,
  iconColor: colors.theme.light.primary,
  rippleColor: colors.theme.light.primary,
  shadowColor: colors.theme.light.shadowColor,
  backgroundColor: colors.theme.light.primaryBackground
};

export default FloatingActionButton;
