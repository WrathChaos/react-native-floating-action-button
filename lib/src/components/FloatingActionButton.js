import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import Ripple from "react-native-material-ripple";
import colors from "./styles/colors.style";

const inStyles = {
  containerStyle: {
    flexDirection: "column"
  },
  itemContainer: {
    flexDirection: "row"
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center"
  }
};

export default class FloatingActionButton extends Component {
  render() {
    // shadowStyle is also available
    const {
      styles,
      size,
      backgroundColor,
      containerStyle,
      shadowStyle,
      materialShadow,
      shadowColor,
      rippleColor,
      rippleOpacity,
      rippleDuration,
      rippleSize,
      rippleContainerBorderRadius,
      rippleCentered,
      rippleSequential,
      rippleFades,
      disabled,
      onPressIn,
      onPressOut,
      onPress,
      onLongPress,
      onRippleAnimation,
      iconName,
      iconType,
      iconColor,
      iconSize,
      iconComponent,
      textDisable,
      text,
      textColor,
      textStyle
    } = this.props;

    return (
      <View style={containerStyle || inStyles.containerStyle}>
        <Ripple
          style={[
            styles || inStyles.buttonStyle,
            {
              height: size || 50,
              width: size || 50,
              borderRadius: (size || 50) / 2,
              backgroundColor: backgroundColor || colors.theme.light.primaryBackground,
            },
            (materialShadow && {
              ...Platform.select({
                ios: {
                  shadowColor: shadowColor || "#B2B2B2",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 1,
                  shadowRadius: 1
                },
                android: {
                  elevation: 3
                }
              })
            }) ||
              shadowStyle || {
                ...Platform.select({
                  ios: {
                    shadowColor: shadowColor || colors.theme.light.shadowColor,
                    shadowOffset: { width: 2, height: 3 },
                    shadowOpacity: 0.3,
                    shadowRadius: 5
                  },
                  android: {
                    elevation: 5
                  }
                })
              },
            
          ]}
          rippleColor={rippleColor || colors.theme.light.primary}
          rippleContainerBorderRadius={rippleContainerBorderRadius || 35}
          rippleOpacity={rippleOpacity}
          rippleDuration={rippleDuration}
          rippleCentered={rippleCentered}
          rippleSequential={rippleSequential}
          rippleFades={rippleFades}
          rippleSize={rippleSize}
          disable={disabled}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onLongPress={onLongPress}
          onRippleAnimation={onRippleAnimation}
          onPress={onPress}
        >
          {iconComponent || (
            <View>
              <Icon
                name={iconName}
                type={iconType}
                size={iconSize || 30}
                color={iconColor || colors.theme.light.primary}
              />
            </View>
          )}
        </Ripple>
        {!textDisable && (
          <Text
            style={[
              textStyle || {
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                top: 16,
                color: textColor || colors.theme.light.primary
              }
            ]}
          >
            {text}
          </Text>
        )}
      </View>
    );
  }
}
