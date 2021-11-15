// BASIC INFO - setting up your basic information screen

import * as React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const BasicInfo = ({navigation}) => {
    navigation.setOptions ({
        headerShown: false,
      });
      
    return( 
        <View style = {styles.viewStyle}>
            <View>
                <TextInput placeholder= {'Occupation'}></TextInput>
                <TextInput placeholder= {'Location'}></TextInput>
                <TextInput placeholder={'Company'}></TextInput>
                <TextInput placeholder={'Remote/Hybrid/Office'}></TextInput>
                <TextInput placeholder={'Tenure'}></TextInput>
            </View>
            <View>
                <TouchableOpacity></TouchableOpacity>
                <TouchableOpacity></TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#5E18EA",
        flexDirection: "column",
        flex: 1
    },
    viewTextInput: {
        flex: 4,
        justifyContent: 'space-between'
    },
    viewButton: {
        flex: 1,
        flexDirection: 'row'
    },
    buttonStyle: {

    },
    vectorStyle: {

    },
    inputText: {
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: "100",
        color: "#FFFFFF",
    },
    buttonText: {
        fontFamily: "Roboto",
        fontSize: 16,
        opacity: 0.5,
        color: '#FFF'
    }
});

export default BasicInfo;