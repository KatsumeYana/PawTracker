import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={styles.backContainer}
        >
          <Image
            source={require('../assets/icons/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Your Profile</Text>

        {/* Settings Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={styles.settingsContainer}
        >
          <Image
            source={require('../assets/icons/settings.png')}
            style={styles.settingsIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={require('../assets/icons/profile.png')}
            style={styles.profileIcon}
          />
          <Text style={styles.profileName}>Mikaella Anne Dela Cruz</Text>
        </View>

        {/* Pets Section */}
        <Text style={styles.myPets}>My Pets</Text>
        <View style={styles.petContainer}>
          <TouchableOpacity style={styles.petButton}>
            <Text style={styles.petText}>Add Pet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.petButton}>
            <Text style={styles.petText}>Pet Name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.petButton}>
            <Text style={styles.petText}>Pet Name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.petButton}>
            <Text style={styles.petText}>Pet Name</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    position: 'relative',
  },
  backContainer: {
    position: 'absolute',
    left: 10,
  },
  backIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'Afacad-Regular',
    textAlign: 'center',
  },
  settingsContainer: {
    position: 'absolute',
    right: 10,
  },
  settingsIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    padding: 24,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Afacad-Regular',
    textAlign: 'center',
  },
  myPets: {
    fontSize: 22,
    fontFamily: 'Afacad-Regular',
    marginTop: 30,
    marginBottom: 10,
  },
  petContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  petButton: {
    backgroundColor: '#fff',
    width: '45%',
    height: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    marginBottom: 15,
  },
  petText: {
    fontSize: 16,
    fontFamily: 'Afacad-Regular',
  },
});

export default Profile;
