import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PetContext } from '../App'; // Import PetContext to access the list of pets
import * as ImagePicker from 'expo-image-picker'; // Import expo-image-picker
import defaultProfileImage from '../assets/icons/profile.png';
import { useTheme } from './ThemeContext'; // Import ThemeContext

const Profile = ({ navigation }) => {
  const { pets } = useContext(PetContext); // Access the global pet state
  const { isDarkMode } = useTheme(); // Access dark mode state from ThemeContext
  const [profileImage, setProfileImage] = useState(null); // State to hold the selected profile image

  // Function to request permission and open image picker
  const handleImagePick = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission required", "You need to grant permission to access the camera and photo library.");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri); // Update the state with the selected image URI
    }
  };

  // Dynamic shadow color
  const shadowStyle = {
    shadowColor: isDarkMode ? '#fff' : '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8, // For Android
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? '#121212' : '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Your Profile</Text>

          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backContainer}>
            <Image
              source={require('../assets/icons/back.png')}
              style={[styles.backIcon, { tintColor: isDarkMode ? '#fff' : '#000' }]}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.settingsContainer}>
            <Image
              source={require('../assets/icons/settings.png')}
              style={[styles.settingsIcon, { tintColor: isDarkMode ? '#fff' : '#000' }]}
            />
          </TouchableOpacity>
        </View>

        {/* Profile Image and Select Image Button */}
        <View style={styles.profileImageContainer}>
          <Image
            source={profileImage ? { uri: profileImage } : defaultProfileImage} // Fallback to default image
            style={styles.profileImage}
          />
          <TouchableOpacity onPress={handleImagePick} style={styles.selectImageContainer}>
            <Image
              source={require('../assets/icons/select_image.png')}
              style={styles.selectImage}
            />
          </TouchableOpacity>
        </View>

        <Text style={[styles.profileName, { color: isDarkMode ? '#fff' : '#000' }]}>Mikaella Anne Dela Cruz</Text>
        <Text style={[styles.myPets, { color: isDarkMode ? '#fff' : '#000' }]}>My Pets</Text>

        {/* Menu Buttons Section */}
        <ScrollView contentContainerStyle={styles.menuContainer}>
          {/* First row for "Add Pet" and First Pet */}
          <View style={styles.horizontalLayout}>
            <TouchableOpacity
              style={[styles.menuButton, { backgroundColor: isDarkMode ? '#333' : '#fff' }, shadowStyle]}
              onPress={() => navigation.navigate('AddPet')}
            >
              <Text style={[styles.menuText, { color: isDarkMode ? '#fff' : '#000' }]}>Add Pet</Text>
            </TouchableOpacity>

            {/* Render First Pet (if exists) */}
            {pets.length > 0 && (
              <View style={[styles.firstPetBox, { backgroundColor: isDarkMode ? '#333' : '#fff' }, shadowStyle]}>
                <Image
                  source={{ uri: pets[0].image }}
                  style={[styles.petImage, { borderColor: isDarkMode ? '#fff' : '#000' }]}
                />
                <Text style={[styles.petName, { color: isDarkMode ? '#fff' : '#000' }]}>{pets[0].name}</Text>
              </View>
            )}
          </View>

          {/* Second row for Pet 2 and Pet 3 */}
          <View style={styles.horizontalLayout}>
            {/* Render Pet 2 (if exists) */}
            {pets.length > 1 && (
              <View style={[styles.petBox, { backgroundColor: isDarkMode ? '#333' : '#fff' }, shadowStyle]}>
                <Image
                  source={{ uri: pets[1].image }}
                  style={[styles.petImage, { borderColor: isDarkMode ? '#fff' : '#000' }]}
                />
                <Text style={[styles.petName, { color: isDarkMode ? '#fff' : '#000' }]}>{pets[1].name}</Text>
              </View>
            )}

            {/* Render Pet 3 (if exists) */}
            {pets.length > 2 && (
              <View style={[styles.petBox, { backgroundColor: isDarkMode ? '#333' : '#fff' }, shadowStyle]}>
                <Image
                  source={{ uri: pets[2].image }}
                  style={[styles.petImage, { borderColor: isDarkMode ? '#fff' : '#000' }]}
                />
                <Text style={[styles.petName, { color: isDarkMode ? '#fff' : '#000' }]}>{pets[2].name}</Text>
              </View>
            )}
          </View>
        </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    position: 'relative',
  },

  title: {
    fontSize: 24,
    fontFamily: 'Afacad',
    textAlign: 'center',
    flex: 1,
    fontWeight: '450',
  },

  settingsContainer: {
    position: 'absolute',
    right: 3,
  },

  settingsIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  backContainer: {
    position: 'absolute',
    left: 3,
  },

  backIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  profileImageContainer: {
    alignItems: 'center',
    marginTop: 40,
    position: 'relative', // Parent container for absolute positioning
  },

  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 75, // Circular profile image
    borderWidth: 2,
    borderColor: '#ccc',
  },

  selectImageContainer: {
    position: 'absolute',
    bottom: 0,  // Position it slightly below the profile image
    left: 210,   // Position it slightly to the right of the profile image
    backgroundColor: '#fff',
    borderRadius: 50,  // Circular button for select image icon
    borderWidth: 2,
    borderColor: '#ccc',
  },

  selectImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  profileName: {
    fontSize: 18,
    fontFamily: 'Afacad-Regular',
    textAlign: 'center',
    marginTop: 20,
  },

  myPets: {
    fontSize: 30,
    fontFamily: 'Afacad-Regular',
    textAlign: 'left',
    marginTop: 30,
  },

  menuContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  menuButton: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  menuText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Afacad',
  },

  horizontalLayout: {
    flexDirection: 'row',
    justifyContent: 'center', // Center all items horizontally
    marginTop: 20,
    alignItems: 'center', // Align the items vertically in the center
  },

  firstPetBox: {
    width: 150,
    height: 150,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  petImage: {
    width: 100,
    height: 100,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: '#000', // Default black border
  },

  petBox: {
    width: 150,
    height: 150,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  petName: {
    fontSize: 16,
    fontFamily: 'Afacad-Regular',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default Profile;
