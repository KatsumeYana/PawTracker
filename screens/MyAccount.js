import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { useFonts } from 'expo-font';
import DateTimePicker from '@react-native-community/datetimepicker'; // Import the DateTimePicker

const MyAccount = ({ navigation }) => {
  const [imageUri, setImageUri] = useState(null); // State to store the selected image URI
  const [isUpdating, setIsUpdating] = useState(false); // State for loading state
  const [updateMessage, setUpdateMessage] = useState(''); // State for update success message
  const [showDatePicker, setShowDatePicker] = useState(false); // State to toggle the date picker visibility
  const [birthday, setBirthday] = useState(new Date()); // Store the selected date

  let [fontsLoaded] = useFonts({
    'Afacad-Regular': require('../assets/fonts/Afacad-Regular.ttf'),
    'Moul-Regular': require('../assets/fonts/Moul-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  // Handle Image Picking
  const handleImagePick = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access media library is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri); // Set the picked image URI
    }
  };

  // Handle Profile Update
  const handleUpdateProfile = () => {
    setIsUpdating(true); // Set loading state to true

    // Simulate profile update delay
    setTimeout(() => {
      setIsUpdating(false); // Set loading state to false after update
      setUpdateMessage('Profile has been updated!'); // Show success message
    }, 2000); // 2 seconds delay to simulate API call
  };

  // Handle Date Change from DatePicker
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthday;
    setShowDatePicker(false); // Close date picker after date is selected
    setBirthday(currentDate); // Update the birthday state
  };

  // Format the date as YYYY-MM-DD
  const formattedBirthday = birthday.toISOString().split('T')[0];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>My Account</Text>

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backContainer}>
              <Image
                source={require('../assets/icons/back.png')}
                style={styles.backIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Profile Image and Select Image Button */}
          <View style={styles.profileImageContainer}>
            <Image
              source={imageUri ? { uri: imageUri } : require('../assets/icons/profile.png')}
              style={styles.profileImage}
            />
            <TouchableOpacity onPress={handleImagePick} style={styles.selectImageContainer}>
              <Image
                source={require('../assets/icons/select_image.png')}
                style={styles.selectImage}
              />
            </TouchableOpacity>
          </View>

          {/* Name Input */}
          <View style={styles.inputContainer}>
            <Image source={require('../assets/icons/name.png')} style={styles.icon} />
            <TextInput
              style={styles.nameInput}
              placeholder="Name"
            />
          </View>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Image source={require('../assets/icons/mail.png')} style={styles.icon} />
            <TextInput
              style={styles.nameInput}
              placeholder="Email Address"
            />
          </View>

          {/* Birthday Input */}
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.inputContainer}>
            <Image source={require('../assets/icons/calendar.png')} style={styles.icon} />
            <TextInput
              style={styles.nameInput}
              placeholder="Birthday"
              value={formattedBirthday} // Display the formatted date
              editable={false} // Make the input non-editable
            />
          </TouchableOpacity>

          {/* Date Picker inside input container */}
          {showDatePicker && (
            <DateTimePicker
              value={birthday}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          {/* Phone Number Input */}
          <View style={styles.inputContainer}>
            <Image source={require('../assets/icons/phone.png')} style={styles.icon} />
            <TextInput
              style={styles.nameInput}
              placeholder="Phone Number"
              keyboardType="numeric"
            />
          </View>

          {/* Address Input */}
          <View style={styles.inputContainer}>
            <Image source={require('../assets/icons/address.png')} style={styles.icon} />
            <TextInput
              style={styles.nameInput}
              placeholder="Home Address"
            />
          </View>

          {/* Update Profile Button */}
          <TouchableOpacity style={styles.updateButton} onPress={handleUpdateProfile}>
            <Text style={styles.updateButtonText}>Update Profile</Text>
          </TouchableOpacity>

          {/* Loading and Success Message */}
          {isUpdating ? (
            <ActivityIndicator size="large" color="#BF4343" style={styles.loading} />
          ) : (
            updateMessage ? (
              <Text style={styles.successMessage}>{updateMessage}</Text>
            ) : null
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  scrollContainer: {
    flexGrow: 1, // Allow content to expand and fill the screen
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
    fontWeight: '450',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 25,
    marginTop: 30,
    width: 350,
    height: 62,
    alignSelf: 'center',
    position: 'relative',
    justifyContent: 'center',
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
    position: 'relative',
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  selectImageContainer: {
    position: 'absolute',
    bottom: 0,
    left: 210,
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  selectImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  updateButton: {
    marginTop: 50,
    width: 200,
    alignSelf: 'center',
    backgroundColor: '#BF4343',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },
  updateButtonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Afacad-Regular',
  },
  loading: {
    marginTop: 20,
  },
  successMessage: {
    fontSize: 16,
    fontFamily: 'Afacad-Regular',
    color: 'green',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default MyAccount;
