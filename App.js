import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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

export default App;