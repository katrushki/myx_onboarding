import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeOBS from './src/screens/onboarding/I_Welcome';
import AllSetOBS from './src/screens/onboarding/VI_AllSet';
import BasicInfo from './src/screens/onboarding/II_BasicInfo';
import BasicInfoOBS from './src/screens/onboarding/II_BasicInfo';


const AppNavigator = createNativeStackNavigator();

const App = ()=> {
  return(
    <NavigationContainer>
      <AppNavigator.Navigator>
        <AppNavigator.Screen 
          name=' ' 
          component ={BasicInfoOBS} />
      </AppNavigator.Navigator>
    </NavigationContainer>
  )
};

export default App;