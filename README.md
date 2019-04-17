# <img alt="React Native Bottom Bar" src="https://github.com/WrathChaos/react-native-floating-action-button/blob/master/assets/Screenshots/logo.png" width="1050"/>

Fully customizable floating action button component for React Native.

[![npm version](https://img.shields.io/npm/v/react-native-floating-action-button.svg)](https://www.npmjs.com/package/react-native-floating-action-button)
[![npm](https://img.shields.io/npm/dt/react-native-floating-action-button.svg)](https://www.npmjs.org/package/react-native-floating-action-button)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)


<p align="center">
<img alt="React Native Floating Action Button" src="https://github.com/WrathChaos/react-native-floating-action-button/blob/master/assets/Screenshots/example.png" width="49.7%"/>
</p>

## Installation

Add the dependency:

```ruby
npm i react-native-floating-action-button
```

## Peer Dependencies

##### IMPORTANT! You need install them.

```
    "react": ">= 16.x",
    "react-native": ">= 0.55.x",
    "react-native-vector-icons": ">= 6,x,x",
    "react-native-material-ripple": ">= 0.8.x",
    "react-native-dynamic-vector-icons": ">= x.x.x"
```

## Basic Usage

```ruby
<FloatingActionButton
    text="Share"
    iconName="md-share"
    iconType="Ionicons"
    iconColor="purple"
    textColor="purple"
    shadowColor="purple"
    rippleColor="purple"
/>
```

### Example Application

- I just shared the example project on Expo, simply run on your device to check what it is:
  [via Expo](https://exp.host/@freakycoder/react-native-floating-action-button-example) OR
  [check the code](examples/App.js), and yes! :) all of the images, screenshots are directly taken
  from the this example. Of course, you can simply clone the project and run the example on your own environment.

### Configuration - Props

##### BottomBar:

| Property                    |   Type    |         Default          | Description                                                                                                                              |
| --------------------------- | :-------: | :----------------------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| style                       |   style   |        container         | use this to change the main FAB's style                                                                                                  |
| containerStyle              |   style   |      containerStyle      | use this to change the main container style (Do not recommended!)                                                                        |
| shadowStyle                 |   style   |       shadowStyle        | changes the FAB's current shadow style, you can implement your own shadow                                                                |
| materialShadow              |  boolean  |          false           | makes the special material shadow style like shown as example                                                                            |
| size                        |  number   |            50            | use this to change FAB's whole size                                                                                                      |
| backgroundColor             |   color   |         #FBFBFD          | use this to change the main FAB's color                                                                                                  |
|                             |
| shadowColor                 |   color   |         #B2B2B2          | use this to change FAB's shadow color                                                                                                    |
| rippleColor                 |   color   | rgba(110, 157, 251, 1.0) | use this to change FAB's ripple color                                                                                                    |
| rippleContainerBorderRadius |  number   |            35            | use this to change FAB's ripple container border radius if you have a custom container style with different radius, you need to use this |
| disabled                    |  boolean  |          false           | disabled the ripple effect                                                                                                               |
| iconName                    |  string   |   null(will be fixed)    | changes the icon itself with using react-native-vectors                                                                                  |
| iconType                    |  string   |   null(will be fixed)    | changes the icon itself with using react-native-vectors                                                                                  |
| iconSize                    |  number   |            30            | changes the inside of the icon's size                                                                                                    |
| iconComponent               | component |           Icon           | it uses the react-native-dynamic-vector-icons' Icon component, you can implement your own component rather than Icon                     |
| textDisable                 |  boolean  |          false           | use this to change disable bottom text, if you just need to use button itself                                                            |
| text                        |  string   |           null           | use this to change below text                                                                                                            |
| textColor                   |  colors   | rgba(110, 157, 251, 1.0) | use this to change below text color                                                                                                      |
| textStyle                   |   style   |        textStyle         | use this to change below text style itself                                                                                               |
### ToDos

- [x] LICENSE
- [ ] New example with Screenshots!
- [ ] Write an article about the lib on Medium
                                                      |

### Credits

Special thanks to [n4kz, RN Material Ripple](https://github.com/n4kz/react-native-material-ripple) for bringing to life Floating Action Button :) Material Ripple should be on built-in feature in React Native.

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Floating Action Button Library is available under the MIT license. See the LICENSE file for more info.
