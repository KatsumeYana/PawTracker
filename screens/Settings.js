import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from './ThemeContext';

const Setting = () => {
  const navigation = useNavigation();
  const { isDarkMode } = useTheme();

  const [fadeAnim] = useState(new Animated.Value(1));

  const handleLogout = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      navigation.replace('Login');
    });
  };

  const handleAccountPress = () => {
    navigation.navigate('MyAccount');
  };

  const handleAppearancePress = () => {
    navigation.navigate('Appearance');
  };

  const handleChangePress = () => {
    navigation.navigate('ChangePassword');
  };

  const handleHelpPress = () => {
    navigation.navigate('HelpAndSupport');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }]}>
      <Animated.View style={[styles.innerContainer, { opacity: fadeAnim }]}>
        
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Image 
            source={require('../assets/icons/back.png')} 
            style={[styles.backIcon, { tintColor: isDarkMode ? '#FFFFFF' : '#000000' }]} 
          />
        </TouchableOpacity>

        {/* Settings Title */}
        <Text style={[styles.title, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>Settings</Text>

        {/* Menu Rows */}
        <TouchableOpacity style={[styles.row, { borderBottomColor: isDarkMode ? '#FFFFFF' : '#000000', borderBottomWidth: isDarkMode ? 1 : 2 }]} onPress={handleAccountPress}>
          <Image 
            source={require('../assets/icons/account.png')} 
            style={[styles.icon, { tintColor: isDarkMode ? '#FFFFFF' : '#000000' }]} 
          />
          <Text style={[styles.text, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>My Account</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.row, { borderBottomColor: isDarkMode ? '#FFFFFF' : '#000000', borderBottomWidth: isDarkMode ? 1 : 2 }]} 
          onPress={() => console.log('Notifications clicked')}
        >
          <Image 
            source={require('../assets/icons/notification.png')} 
            style={[styles.icon, { tintColor: isDarkMode ? '#FFFFFF' : '#000000' }]} 
          />
          <Text style={[styles.text, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.row, { borderBottomColor: isDarkMode ? '#FFFFFF' : '#000000', borderBottomWidth: isDarkMode ? 1 : 2 }]} onPress={handleAppearancePress}>
          <Image 
            source={require('../assets/icons/appearance.png')} 
            style={[styles.icon, { tintColor: isDarkMode ? '#FFFFFF' : '#000000' }]} 
          />
          <Text style={[styles.text, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>Appearance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.row, { borderBottomColor: isDarkMode ? '#FFFFFF' : '#000000', borderBottomWidth: isDarkMode ? 1 : 2 }]} onPress={handleChangePress}>
          <Image 
            source={require('../assets/icons/change.png')} 
            style={[styles.icon, { tintColor: isDarkMode ? '#FFFFFF' : '#000000' }]} 
          />
          <Text style={[styles.text, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.row, { borderBottomColor: isDarkMode ? '#FFFFFF' : '#000000', borderBottomWidth: isDarkMode ? 1 : 2 }]} onPress={handleHelpPress}>
          <Image 
            source={require('../assets/icons/help.png')} 
            style={[styles.icon, { tintColor: isDarkMode ? '#FFFFFF' : '#000000' }]} 
          />
          <Text style={[styles.text, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>Help and Support</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log out</Text>
        </TouchableOpacity>

      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  // Back Button
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },

  backIcon: {
    width: 30,
    height: 30,
  },

  // Settings Title
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Afacad-Regular',
    position: 'absolute',
    top: 20,
    left: 10,
    right: 0,
    textAlign: 'center',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
    width: '90%',
  },

  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },

  text: {
    fontSize: 24,
    flex: 1,
    fontFamily: 'Afacad-Regular',
  },

  logoutButton: {
    marginTop: 40,
    backgroundColor: '#BF4343',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoutButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Afacad-Regular',
  },
});

export default Setting;
