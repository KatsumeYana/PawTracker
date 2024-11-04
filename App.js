import React, { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import HomeScreen from './screens/HomeScreen';
import VetClinicsScreen from './screens/VetClinicsScreen';

const Stack = createNativeStackNavigator();

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Moul: require('./assets/fonts/Moul-Regular.ttf'),
    Afacad: require('./assets/fonts/Afacad-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Prevents rendering until fonts are loaded
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'PawTracker',
            headerStyle: { backgroundColor: '#BF4343' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontFamily: 'Moul', fontSize: 24 },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen 
          name="VetClinics" 
          component={VetClinicsScreen} 
          options={{ 
            title: 'Vet Clinics',
            headerStyle: { backgroundColor: '#BF4343' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontFamily: 'Afacad', fontSize: 24 },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
