import * as React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';


const BackButtonOBS = () => {
    return(
        <View>
            <TouchableOpacity style={styles.buttonStyle}>
                <Ionicons
                name="chevron-back-circle"
                size={35}
                style={styles.iconStyle}
                />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginHorizontal: 65,
    marginVertical: 50,
    alignSelf: 'flex-start'
  },
  iconStyle: {
    color: "#FFF",
    opacity: 0.75,
  },
  viewStyle: {
      flex: 0.5,
      flexDirection: 'row'
  }
});

export default BackButtonOBS;