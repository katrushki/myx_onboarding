import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeOBS from './src/screens/onboarding/I_Welcome';
import AllSetOBS from './src/screens/onboarding/VII_AllSet';
import BasicInfoOBS from './src/screens/onboarding/II_BasicInfo';
import ExpertiseOBS from './src/screens/onboarding/III_Expertise';
import InterestsOBS from './src/screens/onboarding/IV_Interests';
import MeetPrefOBS from './src/screens/onboarding/V_MeetPref';
import MeetForOBS from './src/screens/onboarding/VI_MeetFor';
import Home from './src/screens/matching/I_Home';



const Stack = createNativeStackNavigator();

const App = ()=> {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          options = {{headerShown: false}}
          name='Welcome' 
          component ={WelcomeOBS} />
        <Stack.Screen
          options = {{headerShown: false}}
          name='BasicInfo'
          component= {BasicInfoOBS}
          />
        <Stack.Screen
          options = {{headerShown: false}}
          name= 'Expertise'
          component= {ExpertiseOBS}/>
        <Stack.Screen
          options = {{headerShown: false}}
          name= 'Interests'
          component= {InterestsOBS}/>
        <Stack.Screen
          options = {{headerShown: false}}
          name= 'MeetPref'
          component= {MeetPrefOBS}/>
        <Stack.Screen
          options = {{headerShown: false}}
          name= 'MeetFor'
          component= {MeetForOBS}/>
        <Stack.Screen
          options = {{headerShown: false}}
          name= 'AllSet'
          component= {AllSetOBS}/>
        <Stack.Screen
          options = {{headerShown: false}}
          name= 'Home'
          component= {Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;