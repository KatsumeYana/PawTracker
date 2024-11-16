import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Animated, ActivityIndicator } from 'react-native'; // Updated import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { LinearGradient } from 'expo-linear-gradient';

// Import screens
import GetStarted1 from './screens/GetStarted1';
import GetStarted2 from './screens/GetStarted2';
import GetStarted3 from './screens/GetStarted3';
import GetStarted4 from './screens/GetStarted4';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';
import VerifyCode from './screens/VerifyCode';
import NewPassword from './screens/NewPassword';
import HomeScreen from './screens/HomeScreen';
import VetClinics from './screens/VetClinics';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

// Prevent auto-hiding the splash screen until fonts are loaded
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1));
  const [screenOpacity] = useState(new Animated.Value(0));

  const [fontsLoaded] = useFonts({
    'Moul-Regular': require ('./assets/fonts/Moul-Regular.ttf'),
    'Afacad-Regular': require ('./assets/fonts/Afacad-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide the splash screen when fonts are loaded
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    // Show a loader while fonts are loading
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#BF4343" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetStarted1"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="GetStarted1"
          component={GetStarted1}
          options={{
            animation: 'fade',
            cardStyle: {
              opacity: screenOpacity,
            },
          }}
        />
        <Stack.Screen
          name="GetStarted2"
          component={GetStarted2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GetStarted3"
          component={GetStarted3}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GetStarted4"
          component={GetStarted4}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="VerifyCode"
          component={VerifyCode}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: true, // Ensure the header is displayed
            title: 'PawTracker',
            headerStyle: { backgroundColor: '#BF4343' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontFamily: 'Moul-Regular', fontSize: 24 },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="VetClinics"
          component={VetClinics}
          options={{
            headerShown: true, // Ensure the header is displayed
            title: 'Vet Clinics',
            headerStyle: { backgroundColor: '#BF4343' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontFamily: 'Afacad-Regular', fontSize: 24 },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  logo: {
    width: 250,  
    height: 250,  
  },
  loadingLine: {
    position: 'absolute',
    bottom: '10%',  
    height: 4,  
    backgroundColor: '#fff',  
    borderRadius: 2,  
  },
});