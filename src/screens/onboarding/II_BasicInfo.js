// BASIC INFO - setting up your basic information screen

import * as React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const BasicInfo = () => {
    return( 
        <View style = {styles.viewStyle}>
            <View>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>
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