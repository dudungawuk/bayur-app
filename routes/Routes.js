import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/Screen/Home';
import SplashScreen from '../components/Screen/SplashScreen';
import OnBoardingScreen from '../components/Screen/Onboarding';
import Login from '../components/Screen/Login/Login';
import Daftar from '../components/Screen/Daftar';
import Verifikasi  from '../components/Screen/Verif';

const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Daftar'>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
          <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Daftar" component={Daftar} options={{headerShown: false}}/>
          <Stack.Screen name="Verifikasi" component={Verifikasi} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;