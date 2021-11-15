// BASIC INFO - setting up your basic information screen

import * as React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import Images from '../../../assets/Images';

const BasicInfoOBS = ({navigation}) => {
    navigation.setOptions ({
        headerShown: false,
      });

    return( 
        <ImageBackground 
            source= {Images.basicInfoBackground}
            resizeMode = 'cover'
            resizeMethod = 'auto'
            style = {styles.viewStyle}>
            <View style={styles.viewHeader}>
                <Text style = {styles.headerText}>Basic Info</Text>
            </View>
            <View
                style={{
                    flex: 0.1,
                    borderBottomColor: '#FFF',
                    borderBottomWidth: 1,
                    justifyContent: 'flex-start',
                    marginVertical: 10
                }}
                />
            <View style={ styles.viewTextInput}>
                <TextInput
                    style= {styles.inputText}
                    autoCorrect= {false}
                    placeholderTextColor= {'#B392F5'} 
                    placeholder= {'Occupation'}></TextInput>
                <TextInput 
                    style= {styles.inputText}
                    autoCorrect= {false}
                    placeholderTextColor= {'#B392F5'} 
                    placeholder= {'Location'}></TextInput>
                <TextInput
                    style= {styles.inputText} 
                    autoCorrect= {false}
                    placeholderTextColor= {'#B392F5'} 
                    placeholder={'Company'}></TextInput>
                <TextInput 
                    style = {styles.inputText}
                    autoCorrect= {false}
                    placeholderTextColor= {'#B392F5'} 
                    placeholder={'Remote/Hybrid/Office'}></TextInput>
                <TextInput 
                    style = {styles.inputText}
                    autoCorrect= {false}
                    placeholderTextColor= {'#B392F5'} 
                    placeholder={'Tenure (in years)'}></TextInput>
            </View>
            <View style= {styles.viewButton}>
                <TouchableOpacity>
                    <Text>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Forward</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
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
        borderColor: '#FFF',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    viewButton: {
        flex: 1,
        flexDirection: 'row'
    },
    viewHeader: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    buttonStyle: {

    },
    vectorStyle: {

    },
    headerText: {
        fontFamily: "Roboto",
        fontSize: 30,
        fontWeight: 300,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    inputText: {
        fontFamily: "Roboto",
        fontSize: 20,
        color: "#FFFFFF",
        textAlign: 'center'
    },
    buttonText: {
        fontFamily: "Roboto",
        fontSize: 16,
        opacity: 0.5,
        color: '#FFF'
    }
});

export default BasicInfoOBS;