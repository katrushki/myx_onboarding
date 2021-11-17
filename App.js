import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeOBS from './src/screens/onboarding/I_Welcome';
import AllSetOBS from './src/screens/onboarding/VII_AllSet';
import BasicInfo from './src/screens/onboarding/II_BasicInfo';
import BasicInfoOBS from './src/screens/onboarding/II_BasicInfo';


const AppNavigator = createNativeStackNavigator();

const App = ()=> {
  return(
    <NavigationContainer>
      <AppNavigator.Navigator>
        <AppNavigator.Screen 
          name='Welcome' 
          component ={WelcomeOBS} />
        <AppNavigator.Screen
          name='BasicInfo'
          component= {BasicInfoOBS}
          />
        <AppNavigator.Screen
          name= 'AllSet'
          component= {AllSetOBS}/>
      </AppNavigator.Navigator>
    </NavigationContainer>
  )
};

export default App;