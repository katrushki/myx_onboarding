// HOME SCREEN OR PREMATCHING SCREEN - Drag and drop field with search bar to sift through the tags that we have 

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

const Home = ({navigation}) => {
  return (
    <ImageBackground
      source={Images.prematchBackground}
      resizeMode={"cover"}
      resizeMethod={"auto"}
      style={styles.viewStyle}
    >
        <View flex= {1} flexDirection= {'row'} style= {styles.viewLogoStyle}>
            <Image style= {styles.logoStyle} source={Images.logo_s}/> 
        </View>
      <View style={styles.viewHeaderStyle}>
        <Text style={styles.headerText}>Drag and drop the tags that you want to be matched with into the designated field</Text>
      </View>
      <View style={styles.viewButtonStyle}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate("Matching");
          }}
        >
          <Text style={styles.buttonText}>Let's get myxed! </Text>
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
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
  },
  viewButtonStyle: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomColor: "black",
  },
  headerText: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: "#6C2BEC",
    height: 60,
    width: 300,
    borderRadius: 13,
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
    height: 60,
    width: 55,
    marginTop: 50,
    alignItems: "center",
  },
  viewLogoStyle: {
    alignContent: 'flex-start',
    justifyContent: 'center'
  }
});

export default Home;
