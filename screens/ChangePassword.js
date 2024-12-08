import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useTheme } from './ThemeContext'; // Import the ThemeContext for dark mode

const ChangePassword = ({ navigation }) => {
  const { isDarkMode } = useTheme(); // Access dark mode state
  
  let [fontsLoaded] = useFonts({
    'Afacad-Regular': require('../assets/fonts/Afacad-Regular.ttf'),
  });

  // Separate states for old and new password visibility
  const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  // Toggle the old password visibility
  const toggleOldPasswordVisibility = () => {
    setIsOldPasswordVisible(!isOldPasswordVisible);
  };

  // Toggle the new password visibility
  const toggleNewPasswordVisibility = () => {
    setIsNewPasswordVisible(!isNewPasswordVisible);
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackPress}>
            <Image
              source={require('../assets/icons/back.png')}
              style={[styles.backButtonImage, { tintColor: isDarkMode ? '#fff' : '#000' }]}
            />
          </TouchableOpacity>
          <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Change Password</Text>
        </View>

        {/* Old Password Input */}
        <View style={[styles.inputContainer, { backgroundColor: isDarkMode ? '#333' : '#fff', borderColor: isDarkMode ? '#fff' : '#000' }]}>
          <Image source={require('../assets/icons/password.png')} style={styles.icon} />
          <TextInput 
            style={[styles.nameInput, { color: isDarkMode ? '#fff' : '#000' }]} 
            placeholder="Old Password" 
            placeholderTextColor={isDarkMode ? '#ccc' : '#888'}
            secureTextEntry={!isOldPasswordVisible} // Toggle secureTextEntry based on isOldPasswordVisible state
          />
          <TouchableOpacity onPress={toggleOldPasswordVisibility} style={styles.view}>
            <Image 
              source={require('../assets/icons/view.png')} 
              style={styles.viewIcon} 
            />
          </TouchableOpacity>
        </View>

        {/* New Password Input */}
        <View style={[styles.inputContainer, { backgroundColor: isDarkMode ? '#333' : '#fff', borderColor: isDarkMode ? '#fff' : '#000' }]}>
          <Image source={require('../assets/icons/password.png')} style={styles.icon} />
          <TextInput 
            style={[styles.nameInput, { color: isDarkMode ? '#fff' : '#000' }]} 
            placeholder="New Password" 
            placeholderTextColor={isDarkMode ? '#ccc' : '#888'}
            secureTextEntry={!isNewPasswordVisible} // Toggle secureTextEntry based on isNewPasswordVisible state
          />
          <TouchableOpacity onPress={toggleNewPasswordVisibility} style={styles.view}>
            <Image 
              source={require('../assets/icons/view.png')} 
              style={styles.viewIcon} 
            />
          </TouchableOpacity>
        </View>

        {/* Save Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: isDarkMode ? '#BF4343' : '#BF4343' }]} 
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 170,
  },
  backButtonImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Afacad',
    fontWeight: '450',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 25,
    marginVertical: 12,
    width: 300,
    height: 62,
    alignSelf: 'center',
    position: 'relative',
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
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 10,
  },
  checkboxText: {
    fontSize: 15,
    fontFamily: 'Afacad-Regular',
    marginLeft: 10,
  },
  forgotText: {
    fontSize: 10,
    color: '#007bff',
    fontFamily: 'Afacad-Regular',
    textAlign: 'right',
    marginRight: 20,
    marginTop: 4,
  },
  underlinedText: {
    textDecorationLine: 'underline',
    color: '#007bff',
  },
  buttonContainer: {
    marginTop: 50,
    width: 200,
    alignSelf: 'center',
  },
  button: {
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
});

export default ChangePassword;
