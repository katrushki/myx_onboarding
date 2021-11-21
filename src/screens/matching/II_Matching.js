// MATCHING SCREEN

import React, {useState} from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Vibration
} from "react-native";
import Images from "../../../assets/Images";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from 'expo-haptics';


const Matching = ({ navigation }) => {
    const [push, setPush] = useState(false);

    const handlePush = () => {
        if (push === false) {
          setPush(true) && Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy) ;
        } else {
          setPush(false);
        }
      };
  return (
    <ImageBackground
      source={Images.matchBackground}
      resizeMode={"cover"}
      resizeMethod={"auto"}
      style={styles.viewStyle}
    >
      {/**header navigation */}
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row", alignSelf: "center" }}>
          <TouchableOpacity
            style={{ marginLeft: 50, marginTop: 50 }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="chevron-back-circle"
              size={35}
              style={{ color: "#5E17EB" }}
            />
          </TouchableOpacity>
        </View>
        <View flex={1} flexDirection={"row"} style={styles.viewLogoStyle}>
          <Image style={styles.logoStyle} source={Images.logo_s} />
        </View>
        <View style={{ flex: 1 }}></View>
      </View>

      {/**some text*/}

      <View style={styles.viewBodyStyle}>
        <Text style={styles.bodyText}>
          Press to myx - the longer you press the more matches will appear.
        </Text>
      </View>

      {/**THE most IMPORTANT button ever made */}
      <View style={styles.viewButtonStyle}>
        <TouchableOpacity
          style={[styles.buttonStyle, push && styles.pushedButtonStyle]}
          onLongPress= {handlePush}
          onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}
          onPress= {() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}
          onPressOut={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}   >
          <Text style={[styles.buttonText, push && styles.pushedButtonText]}>Push it real good </Text>
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
    flex: 1,
    margin: 100,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
  },
  viewButtonStyle: {
    flex: 5,
    margin: 100,
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomColor: "black",
  },
  viewBodyStyle: {
    flex: 1,
    marginTop: 50,
    justifyContent: "flex-start",
    alignSelf: "baseline",
    alignItems: "center",
    paddingHorizontal: 50,
  },
  headerText: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  bodyText: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "#6C2BEC",
    height: 250,
    width: 250,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",

    // elevation prop adds the drop shadow (!)
    elevation: 38,
  },
  pushedButtonStyle: {
    backgroundColor: "#280372",
    height: 250,
    width: 250,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",

    // elevation prop adds the drop shadow (!)
    elevation: 38,

  },
  buttonText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 28,
    color: "#FFFFFF",
    textTransform: "uppercase",
    textAlign: "center",
    alignSelf: "center",
    paddingHorizontal: 40,
    paddingVertical: 25,
  },
  pushedButtonText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 28,
    color: "#8F63E7",
    textTransform: "uppercase",
    textAlign: "center",
    alignSelf: "center",
    paddingHorizontal: 40,
    paddingVertical: 25,

  },
  imageStyle: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logoStyle: {
    height: 60,
    width: 55,
    marginTop: 50,
    alignItems: "center",
  },
  viewLogoStyle: {
    alignContent: "flex-start",
    justifyContent: "center",
  },
});

export default Matching;
