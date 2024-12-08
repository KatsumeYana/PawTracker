import React from 'react';
import { View, Text, Switch, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useTheme } from './ThemeContext';  // Import the useTheme hook

const Appearance = ({ navigation }) => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Access dark mode state and toggle function

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }, // Change container background based on dark mode
      ]}
    >
      {/* Header with back button */}
      <View style={[styles.header, { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/icons/back.png')} // Ensure the icon path is correct
            style={[styles.backIcon, { tintColor: isDarkMode ? '#FFFFFF' : '#121212' }]} // Change back button icon color based on dark mode
          />
        </TouchableOpacity>
        {/* Ensure title is inside a <Text> component */}
        <Text style={[styles.title, { color: isDarkMode ? '#FFFFFF' : '#121212' }]}>Appearance</Text>
      </View>

      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#121212' : '#FFFFFF'}
      />

      {/* Scrollable content area */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Light Mode */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF', // Card background color
              borderColor: isDarkMode ? '#333333' : '#DDDDDD', // Card border color
            },
          ]}
        >
          <Text style={[styles.text, { color: isDarkMode ? '#BBBBBB' : '#000000' }]}>
            Light Mode
          </Text>
          <Switch
            value={!isDarkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={!isDarkMode ? '#f4f3f4' : '#f4f3f4'}
          />
        </View>

        {/* Dark Mode */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF', // Card background color
              borderColor: isDarkMode ? '#333333' : '#DDDDDD', // Card border color
            },
          ]}
        >
          <Text style={[styles.text, { color: isDarkMode ? '#BBBBBB' : '#000000' }]}>
            Dark Mode
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingTop: 20, 
    paddingHorizontal: 20,
    zIndex: 1, 
  },
  title: {
    fontSize: 24,
    fontFamily: 'Afacad',
    flex: 1, 
    textAlign: 'center', 
    fontWeight: '450',
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  contentContainer: {
    paddingTop: 170,  // Offset the content to make space for the header
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Afacad-Regular',
  },
});

export default Appearance;
