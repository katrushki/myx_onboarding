// EXPERTISE SCREEN - What are your areas of expertise? Select as many as you like

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
import _ from 'lodash';


const ExpertiseOBS = ({ navigation }) => {
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
      <View style= {{flexDirection: 'row', flex: 1}}>
        <View style= {{flex: 1 }}>
          <TouchableOpacity
            style={{marginLeft: 50, marginTop: 50}}
            onPress={() => navigation.navigate("BasicInfo")}
          >
            <Ionicons
              name="chevron-back-circle"
              size={35}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>
        <View 
          style= {{flex: 1}}>
          <LogoOBS />
        </View>
        <View
          style= {{flex: 1}}></View>
      </View>
      <View style={styles.viewHeader}>
        <Text style={styles.headerText}>What are your areas of expertise?</Text>
        <Text style={styles.bodyText}>Select multiple options</Text>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Interests")}
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
  headerText: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 300,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: 'center'
  },
  bodyText: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#FFF',
    opacity: 0.75
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

export default ExpertiseOBS;
