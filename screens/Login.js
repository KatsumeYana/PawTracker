//Login
import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

const Login = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Afacad-Regular': require('../assets/fonts/Afacad-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  const [isLoading, setIsLoading] = useState(false); 

  const handleLogin = async () => {
    setIsLoading(true); 

    
    setTimeout(() => {
      setIsLoading(false); 
      navigation.navigate('HomeScreen'); 
    }, 2000); 
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
       
        <View style={styles.header}>
          <Text style={styles.title}>Login</Text>
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('../assets/icons/email.png')} style={styles.icon} />
          <TextInput style={styles.nameInput} placeholder="Email Address" />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('../assets/icons/password.png')} style={styles.icon} />
          <Image source={require('../assets/icons/view.png')} style={styles.view} />
          <TextInput style={styles.nameInput} placeholder="Password" secureTextEntry />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>
          No account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.underlinedSignUpText}>Sign Up</Text>
          </TouchableOpacity>
        </Text>

        {isLoading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#BF4343" />
            <Text style={styles.loadingText}>Logging in...</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginTop: 130,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Afacad-Regular',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 25,
    marginVertical: 12,
    width: 300,
    height: 62,
    alignSelf: 'center',
    position: 'relative',
  },
  icon: {
    marginLeft: 15,
    marginTop: 15,
  },
  nameInput: {
    fontSize: 14,
    fontFamily: 'Afacad-Regular',
    flex: 1,
    marginLeft: 10,
    paddingVertical: 0,
    paddingHorizontal: 10,
    color: '#000',
  },
  view: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -10 }],
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  forgotText: {
    fontSize: 10,
    color: '#007bff',
    fontFamily: 'Afacad-Regular',
    textAlign: 'right',
    marginRight: 30,
    marginTop: 3,
  },
  buttonContainer: {
    marginTop: 50,
    width: 200,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#BF4343',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Afacad-Regular',
  },
  underlinedSignUpText: {
    fontSize: 9,
    fontFamily: 'Afacad-Regular',
    textDecorationLine: 'underline',
    color: '#007bff',
  },
  footer: {
    marginVertical: 70,
    fontSize: 9,
    fontFamily: 'Afacad-Regular',
    textAlign: 'center',
  },
  
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    zIndex: 10, 
  },
  loadingText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
});

export default Login;
