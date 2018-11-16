import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FloatingActionButton from "react-native-fab";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ left: 32, fontStyle: "italic" }}>Without Text: </Text>
        <View style={styles.column}>
          <FloatingActionButton
            iconName="plus"
            iconType="feather"
            textDisable
            onPress={() => {
              console.log("onPress :O");
            }}
          />
          <FloatingActionButton
            iconName="edit"
            iconType="material-icons"
            textDisable
          />
          <FloatingActionButton
            iconName="controller-play"
            iconType="entypo"
            textDisable
          />
          <FloatingActionButton
            iconName="pause"
            iconType="foundation"
            textDisable
          />
        </View>
        <Text style={{ left: 32, fontStyle: "italic" }}>With Text: </Text>
        <View style={styles.column}>
          <FloatingActionButton
            iconName="star"
            iconType="font-awesome"
            iconColor="green"
            text="Star"
            textColor="green"
            shadowColor="green"
            rippleColor="green"
          />
          <FloatingActionButton
            iconName="heart"
            iconType="foundation"
            iconColor="red"
            text="Heart"
            textColor="red"
            shadowColor="red"
            rippleColor="red"
          />
          <FloatingActionButton
            iconName="md-share"
            iconType="ionicon"
            iconColor="purple"
            text="Share"
            textColor="purple"
            shadowColor="purple"
            rippleColor="purple"
          />
          <FloatingActionButton
            iconName="my-location"
            iconType="material-icon"
            iconColor="blue"
            text="Location"
            textColor="blue"
            shadowColor="blue"
            rippleColor="blue"
          />
        </View>
        <Text style={{ left: 32, top: 12, fontStyle: "italic" }}>
          With Text Material Shadow:{" "}
        </Text>
        <View style={styles.column}>
          <FloatingActionButton
            iconName="star"
            iconType="font-awesome"
            iconColor="green"
            text="Star"
            textColor="green"
            shadowColor="green"
            rippleColor="green"
            materialShadow
          />
          <FloatingActionButton
            iconName="heart"
            iconType="foundation"
            iconColor="red"
            text="Heart"
            textColor="red"
            shadowColor="red"
            rippleColor="red"
            materialShadow
          />
          <FloatingActionButton
            iconName="md-share"
            iconType="ionicon"
            iconColor="purple"
            text="Share"
            textColor="purple"
            shadowColor="purple"
            rippleColor="purple"
            materialShadow
          />
          <FloatingActionButton
            iconName="my-location"
            iconType="material-icon"
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
