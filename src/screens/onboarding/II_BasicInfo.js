// BASIC INFO - setting up your basic information screen

import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Images from "../../../assets/Images";
import { Ionicons } from "@expo/vector-icons";
import LogoOBS from "../../components/LogoOBS";

const BasicInfoOBS = ({ navigation }) => {
  navigation.setOptions({
    headerShown: false,
  });

  //implement useState function here to hold data input to make a request with axios
  return (
    <ImageBackground
      source={Images.basicInfoBackground}
      resizeMode="cover"
      resizeMethod="auto"
      style={styles.viewStyle}
    >
      <LogoOBS />
      <View style={styles.viewHeader}>
        <Text style={styles.headerText}>Basic Info</Text>
      </View>
      <View style={styles.viewTextInput}>
        <View style={styles.viewContainer}>
          <TextInput
            style={styles.inputText}
            autoCorrect={false}
            placeholderTextColor={"#B392F5"}
            placeholder={"Occupation"}
          ></TextInput>
        </View>
        <View style={styles.viewContainer}>
          <TextInput
            style={styles.inputText}
            autoCorrect={false}
            placeholderTextColor={"#B392F5"}
            placeholder={"Location"}
          ></TextInput>
        </View>
        <View style={styles.viewContainer}>
          <TextInput
            style={styles.inputText}
            autoCorrect={false}
            placeholderTextColor={"#B392F5"}
            placeholder={"Company"}
          ></TextInput>
        </View>
        <View style={styles.viewContainer}>
          <TextInput
            style={styles.inputText}
            autoCorrect={false}
            placeholderTextColor={"#B392F5"}
            placeholder={"Remote/Hybrid/Office"}
          ></TextInput>
        </View>
        <View style={styles.viewContainer}>
          <TextInput
            style={styles.inputText}
            autoCorrect={false}
            placeholderTextColor={"#B392F5"}
            placeholder={"Tenure"}
          ></TextInput>
        </View>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Expertise")}
          style={styles.buttonStyle}
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
  viewTextInput: {
    flex: 4,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
  viewContainer: {
    justifyContent: "center",
    backgroundColor: "#6624EB",
    height: 60,
    width: 300,
    borderColor: "#FFF",
    borderWidth: 0.5,
    borderRadius: 13,
    marginHorizontal: 10,
    elevation: 5,
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
  },
  buttonStyle: {
    paddingHorizontal: 65,
    paddingVertical: 30,
  },
  vectorStyle: {},
  headerText: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 300,
    fontWeight: "bold",
    color: "#FFF",
  },
  inputText: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
  },
  buttonText: {
    fontFamily: "Roboto",
    fontSize: 20,
    opacity: 0.5,
    color: "#FFF",
  },
  iconStyle: {
    color: "#FFF",
    opacity: 0.75,
  },
});

export default BasicInfoOBS;
