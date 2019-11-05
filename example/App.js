import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FloatingActionButton from "react-native-floating-action-button";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ left: 32, fontStyle: "italic" }}>Without Text: </Text>
        <View style={styles.column}>
          <FloatingActionButton
            iconName="plus"
            iconType="AntDesign"
            textDisable
          />
          <FloatingActionButton
            iconName="edit"
            iconType="MaterialIcons"
            textDisable
          />
          <FloatingActionButton
            iconName="controller-play"
            iconType="Entypo"
            textDisable
          />
          <FloatingActionButton
            iconName="pause"
            iconType="Foundation"
            textDisable
          />
        </View>
        <Text style={{ left: 32, fontStyle: "italic" }}>With Text: </Text>
        <View style={styles.column}>
          <FloatingActionButton
            iconName="star"
            iconType="FontAwesome"
            iconColor="green"
            text="Star"
            textColor="green"
            shadowColor="green"
            rippleColor="green"
          />
          <FloatingActionButton
            iconName="heart"
            iconType="Foundation"
            iconColor="red"
            text="Heart"
            textColor="red"
            shadowColor="red"
            rippleColor="red"
          />
          <FloatingActionButton
            iconName="md-share"
            iconType="Ionicons"
            iconColor="purple"
            text="Share"
            textColor="purple"
            shadowColor="purple"
            rippleColor="purple"
          />
          <FloatingActionButton
            iconName="my-location"
            iconType="MaterialIcons"
            text="Location"
            shadowColor="rgba(110, 157, 251, 1.0)"
          />
        </View>
        <Text style={{ left: 32, top: 12, fontStyle: "italic" }}>
          With Text Material Shadow:{" "}
        </Text>
        <View style={styles.column}>
          <FloatingActionButton
            iconName="star"
            iconType="FontAwesome"
            iconColor="green"
            text="Star"
            textColor="green"
            shadowColor="green"
            rippleColor="green"
            materialShadow
          />
          <FloatingActionButton
            iconName="heart"
            iconType="Foundation"
            iconColor="red"
            text="Heart"
            textColor="red"
            shadowColor="red"
            rippleColor="red"
            materialShadow
          />
          <FloatingActionButton
            iconName="md-share"
            iconType="Ionicons"
            iconColor="purple"
            text="Share"
            textColor="purple"
            shadowColor="purple"
            rippleColor="purple"
            materialShadow
          />
          <FloatingActionButton
            iconName="my-location"
            iconType="MaterialIcons"
            iconColor="blue"
            text="Location"
            textColor="blue"
            shadowColor="blue"
            rippleColor="blue"
            materialShadow
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  column: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16
  }
});
