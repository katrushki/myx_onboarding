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
import GroupButton1 from './src/screens/archive/Expertise_GB';
import GroupButton2 from './src/screens/archive/Interest_GB';


const AppNavigator = createNativeStackNavigator();

const App = ()=> {
  return(
    <NavigationContainer>
      <AppNavigator.Navigator>
        <AppNavigator.Screen 
          options = {{headerShown: false}}
          name='Welcome' 
          component ={WelcomeOBS} />
        <AppNavigator.Screen
          options = {{headerShown: false}}
          name='BasicInfo'
          component= {BasicInfoOBS}
          />
        <AppNavigator.Screen
          options = {{headerShown: false}}
          name= 'Expertise'
          component= {ExpertiseOBS}/>
        <AppNavigator.Screen
          options = {{headerShown: false}}
          name= 'Interests'
          component= {InterestsOBS}/>
        <AppNavigator.Screen
          options = {{headerShown: false}}
          name= 'MeetPref'
          component= {MeetPrefOBS}/>
        <AppNavigator.Screen
          options = {{headerShown: false}}
          name= 'MeetFor'
          component= {MeetForOBS}/>
        <AppNavigator.Screen
          options = {{headerShown: false}}
          name= 'AllSet'
          component= {AllSetOBS}/>
      </AppNavigator.Navigator>
    </NavigationContainer>
  )
};

export default App;