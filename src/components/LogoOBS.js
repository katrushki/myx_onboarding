import * as React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Images from '../../assets/Images';
import { NavigationContainer } from '@react-navigation/native';

const LogoOBS = () => {
  return (
    <View style={styles.viewStyle}>
      {/* <TouchableOpacity 
        style={styles.buttonStyle}>
        <Ionicons
          name="chevron-back-circle"
          size={35}
          style={styles.iconStyle}
        />
      </TouchableOpacity> */}
      <Image source={Images.logo} style={styles.imageStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 50,
    marginLeft: 50,
    alignSelf: "flex-start",
  },
  iconStyle: {
    color: "#FFF",
    opacity: 0.75,
  },
  viewStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around',
  },
  imageStyle: {
    height: 46,
    width: 41,
    marginTop: 50,
    alignItems: "center",
  },
});

export default LogoOBS;