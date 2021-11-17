// MEETING PREFERENCE SCREEN - in person, Zoom, or prefer not to meet

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

const MeetPrefOBS = ({ navigation }) => {
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
          <View style={styles.viewHeader}>
            <Text style={styles.headerText}>How do you prefer to meet?</Text>
          </View>
          <View>
              <TouchableOpacity>
                  <Text>In person</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                  <Text>Zoom</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                  <Text>Prefer not to meet</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.viewButton}>
        <TouchableOpacity style={styles.buttonStyle}>
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
    )
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

export default MeetPrefOBS;