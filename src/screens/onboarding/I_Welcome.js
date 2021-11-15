// WELCOME to MYX - Screen

// Roboto and sans-serif are Android-only fonts and therefore we need to specify another font family for each platform respectively

// comment to self: the only thing missing is the logo on the top -> evaluate options either to be added on header or as additional component on screen
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Images from "../../../assets/Images";

// onboarding screen I component creation
const WelcomeOBS = ({ navigation }) => {
  navigation.setOptions({
    headerShown: false,
  });
  return (
    <ImageBackground
      source={Images.background}
      resizeMode={"cover"}
      resizeMethod={"auto"}
      style={styles.viewStyle}
    >
      {/* <View style= {styles.viewImageStyle}>
        <Image 
          source = {Images.logo} 
          style = {styles.imageStyle}/>
      </View> */}
      <View style={styles.viewHeaderStyle}>
        <Text style={styles.headerText}>Welcome to MYX!</Text>
      </View>
      <View style={styles.viewBodyStyle}>
        <Text style={styles.bodyText}>
          Believe us when we say together we will myx some things up. Ready?
        </Text>
      </View>
      <View style={styles.viewButtonStyle}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Born ready!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

// application of styling within the StyleSheet
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#5E18EA",
    flexDirection: "column",
    flex: 1,
  },
  viewHeaderStyle: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 20,
  },
  viewBodyStyle: {
    flex: 1.5,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  viewButtonStyle: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomColor: "black",
    alignItems: "center",
  },
  viewImageStyle: {
    flex: 0.5,
    justifyContent: "flex-start",
  },
  headerText: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  bodyText: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "#6C2BEC",
    height: 60,
    width: 300,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    // elevation prop adds the drop shadow (!)
    elevation: 10,
  },
  buttonText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 15,
    color: "#FFFFFF",
  },
  imageStyle: {
    width: 10,
    height: 12,
  },
});

export default WelcomeOBS;
