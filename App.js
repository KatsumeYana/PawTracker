import React, { useState, createContext, useEffect } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemeProvider } from './screens/ThemeContext';

// Import your screen components
import GetStarted1 from './screens/GetStarted1';
import GetStarted2 from './screens/GetStarted2';
import GetStarted3 from './screens/GetStarted3';
import GetStarted4 from './screens/GetStarted4';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import VerifyCode from './screens/VerifyCode';
import NewPassword from './screens/NewPassword';
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';
import VetClinics from './screens/VetClinics';
import AddPet from './screens/AddPet';
import Settings from './screens/Settings';
import MyAccount from './screens/MyAccount';
import ChangePassword from './screens/ChangePassword';
import Appearance from './screens/Appearance';
import HelpAndSupport from './screens/HelpAndSupport';

// Create a context for managing pet data
export const PetContext = createContext();

const Stack = createNativeStackNavigator();

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1));
  const [screenOpacity] = useState(new Animated.Value(0));
  const [pets, setPets] = useState([]); // Global state to manage pets

  useEffect(() => {
    const prepareApp = async () => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }).start();

        setTimeout(() => {
          setIsReady(true);
          SplashScreen.hideAsync();

          Animated.timing(screenOpacity, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
          }).start();
        }, 1500);
      }, 2000);
    };

    prepareApp();
  }, [fadeAnim, screenOpacity]);

  if (!isReady) {
    return (
      <LinearGradient
        colors={['#AF0A0A', '#CE554F', '#FFCCBC']}
        style={styles.splashContainer}
        start={[0, 0]}
        end={[1, 1]}
      >
        <Animated.View
          style={[
            styles.splashContainer,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          <Image
            source={require('./assets/images/PawTracker.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.loadingLine} />
        </Animated.View>
      </LinearGradient>
    );
  }

  return (
    <PetContext.Provider value={{ pets, setPets }}>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="GetStarted1"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="GetStarted1" component={GetStarted1} />
            <Stack.Screen name="GetStarted2" component={GetStarted2} />
            <Stack.Screen name="GetStarted3" component={GetStarted3} />
            <Stack.Screen name="GetStarted4" component={GetStarted4} />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                gestureEnabled: false,
              }}
            />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="VerifyCode" component={VerifyCode} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                gestureEnabled: false,
              }}
            />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="VetClinics" component={VetClinics} />
            <Stack.Screen name="AddPet" component={AddPet} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="MyAccount" component={MyAccount} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="Appearance" component={Appearance} />
            <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PetContext.Provider>
  );
};

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

export default App;
