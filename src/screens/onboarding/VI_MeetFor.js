// MEETING FOR SCREEN - Coffee, Tea, Lunch, Drinks, Chat, Walk, Other

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Images from "../../../assets/Images";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Emoji from "react-native-emoji";
import LogoOBS from "../../components/LogoOBS";
import { ScrollView } from "react-native-gesture-handler";

const MeetForOBS = ({ navigation }) => {
  const [coffee, setCoffee] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [drinks, setDrinks] = useState(false);
  const [chat, setChat] = useState(false);
  const [walk, setWalk] = useState(false);
  const [other, setOther] = useState(false);

  const handleCoffee = () => {
    if (coffee === false) {
      setCoffee(true);
    } else {
      setCoffee(false);
    }
  };

  const handleLunch = () => {
    if (lunch === false) {
      setLunch(true);
    } else {
      setLunch(false);
    }
  };

  const handleDrinks = () => {
    if (drinks === false) {
      setDrinks(true);
    } else {
      setDrinks(false);
    }
  };

  const handleChat = () => {
    if (chat === false) {
      setChat(true);
    } else {
      setChat(false);
    }
  };

  const handleWalk = () => {
    if (walk === false) {
      setWalk(true);
    } else {
      setWalk(false);
    }
  };

  const handleOther = () => {
    if (other === false) {
      setOther(true);
    } else {
      setOther(false);
    }
  };

  return (
    <ImageBackground
      source={Images.basicInfoBackground}
      resizeMode="cover"
      resizeMethod="auto"
      style={styles.viewStyle}
    >
      {/**header navigation */}
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ marginLeft: 50, marginTop: 50 }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="chevron-back-circle"
              size={35}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <LogoOBS />
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
      {/**section header  */}
      <View style={styles.viewHeader}>
        <Text style={styles.headerText}>Let's meet for ...</Text>
        <Text style={styles.bodyText}>Multiple selection possible</Text>
      </View>

      {/**clickable items  */}
      <View style={styles.viewSelection}>
        <TouchableOpacity
          style={[
            styles.selectionStyle,
            coffee && styles.selectionEnabledStyle,
          ]}
          onPress={handleCoffee}
        >
          <Text
            style={[
              styles.selectionText,
              coffee && styles.selectionEnabledText,
            ]}
          >
            <Emoji name="coffee" style={{ fontSize: 20, marginRight: 10 }} />{" "}
            Coffee/Tea
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.selectionStyle, lunch && styles.selectionEnabledStyle]}
          onPress={handleLunch}
        >
          <Text
            style={[styles.selectionText, lunch && styles.selectionEnabledText]}
          >
            <Emoji
              name="fork_and_knife"
              style={{ fontSize: 20, marginRight: 10 }}
            />{" "}
            Lunch
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.selectionStyle,
            drinks && styles.selectionEnabledStyle,
          ]}
          onPress={handleDrinks}
        >
          <Text
            style={[
              styles.selectionText,
              drinks && styles.selectionEnabledText,
            ]}
          >
            <Emoji name="cocktail" style={{ fontSize: 20, marginRight: 10 }} />{" "}
            Drinks
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.selectionStyle, chat && styles.selectionEnabledStyle]}
          onPress={handleChat}
        >
          <Text
            style={[styles.selectionText, chat && styles.selectionEnabledText]}
          >
            <Emoji name="nerd_face" style={{ fontSize: 20, marginRight: 10 }} />{" "}
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.selectionStyle, walk && styles.selectionEnabledStyle]}
          onPress={handleWalk}
        >
          <Text
            style={[styles.selectionText, walk && styles.selectionEnabledText]}
          >
            <Emoji
              name="deciduous_tree"
              style={{ fontSize: 20, marginRight: 10 }}
            />{" "}
            Walk
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.selectionStyle, other && styles.selectionEnabledStyle]}
          onPress={handleOther}
        >
          <Text
            style={[styles.selectionText, other && styles.selectionEnabledText]}
          >
            <Emoji name="rocket" style={{ fontSize: 20, marginRight: 10 }} />{" "}
            Other
          </Text>
        </TouchableOpacity>
      </View>

      {/**bottom navigation */}
      <View style={styles.viewButton}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("AllSet")}
        >
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("AllSet")}>
          <AntDesign name="checkcircle" size={35} style={styles.iconStyle} />
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
  selectionEnabledStyle: {
    justifyContent: "center",
    backgroundColor: "#FFF",
    height: 60,
    width: 300,
    borderRadius: 13,
    borderWidth: 0.5,
    borderColor: "#FFF",
    marginBottom: 15,
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
  selectionEnabledText: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#6624EB",
    textAlign: "center",
  },
});

export default MeetForOBS;
