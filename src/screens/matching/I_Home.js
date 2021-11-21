//

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Images from "../../../assets/Images";

const Home = () => {
  return (
    <ImageBackground
      source={Images.prematchBackground}
      resizeMode={"cover"}
      resizeMethod={"auto"}
      style={styles.viewStyle}
    >
        <View>
            <Image style= {styles.logoStyle} source={Images.logo_s}/> 
        </View>
      <View style={styles.viewHeaderStyle}>
        <Text style={styles.headerText}>Drag and drop</Text>
      </View>
      <View style={styles.viewBodyStyle}>
        <Text style={styles.bodyText}>It's about time to get you myxed?! </Text>
      </View>
      <View style={styles.viewButtonStyle}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.buttonText}>Enter the myxverse </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    // backgroundColor: "#5E18EA",
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
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logoStyle: {
    height: 46,
    width: 41,
    marginTop: 50,
    alignItems: "center",
  },
});

export default Home;
