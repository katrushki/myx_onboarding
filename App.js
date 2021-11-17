import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeOBS from './src/screens/onboarding/I_Welcome';
import AllSetOBS from './src/screens/onboarding/VII_AllSet';
import BasicInfo from './src/screens/onboarding/II_BasicInfo';
import BasicInfoOBS from './src/screens/onboarding/II_BasicInfo';
import ExpertiseOBS from './src/screens/onboarding/III_Expertise';
import InterestsOBS from './src/screens/onboarding/IV_Interests';
import MeetPrefOBS from './src/screens/onboarding/V_MeetPref';
import MeetForOBS from './src/screens/onboarding/VI_MeetFor';


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
          name= 'Expertise'
          component= {ExpertiseOBS}/>
        <AppNavigator.Screen
          name= 'Interests'
          component= {InterestsOBS}/>
        <AppNavigator.Screen
          name= 'MeetPref'
          component= {MeetPrefOBS}/>
        <AppNavigator.Screen
          name= 'MeetFor'
          component= {MeetForOBS}/>
        <AppNavigator.Screen
          name= 'AllSet'
          component= {AllSetOBS}/>
      </AppNavigator.Navigator>
    </NavigationContainer>
  )
};

export default App;