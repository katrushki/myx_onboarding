// MEETING FOR SCREEN - Coffee, Tea, Lunch, Drinks, Chat, Walk, Other

import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Images from "../../../assets/Images";
import { Ionicons } from "@expo/vector-icons";
import Emoji from "react-native-emoji";
import LogoOBS from "../../components/LogoOBS";

const MeetForOBS = ({ navigation }) => {
  navigation.setOptions({
    headerShown: false,
  });

  return (
    <ImageBackground
      source={Images.basicInfoBackground}
      resizeMode="cover"
      resizeMethod="auto"
      style={styles.viewStyle}
    >
      <LogoOBS />
      <View style={styles.viewHeader}>
        <Text style={styles.headerText}>Let's meet for ...</Text>
        <Text style={styles.bodyText}>Multiple selection possible</Text>
      </View>
      <View style={styles.viewSelection}>
        <TouchableOpacity style={styles.selectionStyle}>
          <Text style={styles.selectionText}>
            <Emoji name="coffee" style={{ fontSize: 20, marginRight: 10 }} />{" "}
            Coffee/Tea
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionStyle}>
          <Text style={styles.selectionText}>
            <Emoji
              name="fork_and_knife"
              style={{ fontSize: 20, marginRight: 10 }}
            />{" "}
            Lunch
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionStyle}>
          <Text style={styles.selectionText}>
            <Emoji name="cocktail" style={{ fontSize: 20, marginRight: 10 }} />{" "}
            Drinks
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionStyle}>
          <Text style={styles.selectionText}>
            <Emoji name="nerd_face" style={{ fontSize: 20, marginRight: 10 }} />{" "}
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionStyle}>
          <Text style={styles.selectionText}>
            <Emoji
              name="deciduous_tree"
              style={{ fontSize: 20, marginRight: 10 }}
            />{" "}
            Walk
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionStyle}>
          <Text style={styles.selectionText}>
            <Emoji name="rocket" style={{ fontSize: 20, marginRight: 10 }} />{" "}
            Other
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("AllSet")}
        >
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Ionicons
            name="chevron-forward-circle"
            size={35}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#5E18EA",
    flexDirection: "column",
    flex: 1,
  },
  viewSelection: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  viewButton: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  viewHeader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#FFF",
    borderBottomWidth: 1,
    marginBottom: 68,
  },
  selectionStyle: {
    justifyContent: "center",
    backgroundColor: "#6624EB",
    height: 60,
    width: 300,
    borderRadius: 13,
    borderWidth: 0.5,
    borderColor: "#FFF",
    marginBottom: 15,
  },
  buttonStyle: {
    paddingHorizontal: 65,
    paddingVertical: 30,
  },
  headerText: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 300,
    fontWeight: "bold",
    color: "#FFF",
  },
  bodyText: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: "#FFF",
    opacity: 0.75,
  },
  buttonText: {
    fontFamily: "Roboto",
    fontSize: 20,
    opacity: 0.5,
    color: "#FFF",
  },
  selectionText: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
  },
  iconStyle: {
    color: "#FFF",
    opacity: 0.75,
  },
});

export default MeetForOBS;
