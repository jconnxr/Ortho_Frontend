import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AboutScreen from './screens/AboutScreen';
import FollowUpScreen from './screens/FollowUpScreen';
import InjuryIntakeScreen from './screens/InjuryIntakeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import TriageResultScreen from './screens/TriageResultScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SelfCareTipsScreen from './screens/SelfCareTipsScreen'; //

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Injury Intake" component={InjuryIntakeScreen} />
        <Stack.Screen name="Triage Results" component={TriageResultScreen} />
        <Stack.Screen name="Follow Up" component={FollowUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="User Profile" component={UserProfileScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Self-Care Tips" component={SelfCareTipsScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
