import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@native-stackreact-navigation/stack';
import WelcomeOBS from './src/screens/onboarding/I_Welcome';


const AppNavigator = createNativeStackNavigator();

const App = ()=> {
  return(
    <NavigationContainer>
      <AppNavigator.Navigator>
        <AppNavigator.Screen 
          name='-' 
          component ={WelcomeOBS} />
      </AppNavigator.Navigator>
    </NavigationContainer>
  )
};

export default NavigationContainer(AppNavigator);