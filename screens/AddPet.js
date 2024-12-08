import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Alert, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { useFonts } from 'expo-font';
import { PetContext } from '../App';
import DropDownPicker from 'react-native-dropdown-picker'; // Import DropDownPicker

const AddPet = ({ navigation }) => {
  const { setPets } = useContext(PetContext);
  const [imageUri, setImageUri] = useState(null);
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState(null);  // Initial value set to null
  const [gender, setGender] = useState(null);  // Initial value set to null
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');
  const [petTypeOpen, setPetTypeOpen] = useState(false);  // For controlling dropdown open state
  const [genderOpen, setGenderOpen] = useState(false);  // For controlling dropdown open state

  let [fontsLoaded] = useFonts({
    'Afacad-Regular': require('../assets/fonts/Afacad-Regular.ttf'),
    'Moul-Regular': require('../assets/fonts/Moul-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

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
      setImageUri(result.assets[0].uri);
    }
  };

  const handleAddPet = () => {
    if (petName && petType && breed && age && color && description && imageUri) {
      setPets((prevPets) => [
        ...prevPets,
        { petName, petType, breed, gender, age, color, description, image: imageUri },
      ]);
      navigation.navigate('Profile');
    } else {
      Alert.alert('Missing Fields', 'Please fill all fields and add an image.');
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        
        {/* Replace ScrollView with FlatList */}
        <FlatList
          ListHeaderComponent={
            <View style={styles.container}>
              <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            source={require('../assets/icons/back.png')}
            style={styles.backButtonImage}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Add Pet</Text>
      </View>

              <TouchableOpacity style={styles.imagePickerContainer} onPress={handleImagePick}>
                <Image source={imageUri ? { uri: imageUri } : require('../assets/icons/profile.png')} style={styles.petImage} />
                <Image source={require('../assets/icons/select_image.png')} style={styles.selectImage} />
              </TouchableOpacity>

              <TextInput style={styles.input} value={petName} onChangeText={setPetName} placeholder="Pet Name" />
              
              {/* Pet Type Dropdown */}
              <DropDownPicker
                open={petTypeOpen}
                value={petType}
                items={[
                  { label: 'Dog', value: 'dog' },
                  { label: 'Cat', value: 'cat' },
                ]}
                setOpen={setPetTypeOpen}
                setValue={setPetType}
                placeholder="Select Pet Type"
                style={styles.dropdown}
                dropDownStyle={styles.dropdownStyle}
                placeholderStyle={styles.placeholderStyle}  // Apply the same placeholder style
                zIndex={1000} // Set a higher zIndex to ensure it shows up above the gender dropdown
              />

              {/* Gender Dropdown */}
              <DropDownPicker
                open={genderOpen}
                value={gender}
                items={[
                  { label: 'Male', value: 'male' },
                  { label: 'Female', value: 'female' },
                ]}
                setOpen={setGenderOpen}
                setValue={setGender}
                placeholder="Select Gender"
                style={styles.dropdown}
                dropDownStyle={styles.dropdownStyle}
                placeholderStyle={styles.placeholderStyle}  // Apply the same placeholder style
                zIndex={500} // Lower zIndex to make sure the pet type dropdown is on top
              />

              <TextInput style={styles.input} value={age} onChangeText={setAge} placeholder="Age" keyboardType="numeric" />
              <TextInput style={styles.input} value={breed} onChangeText={setBreed} placeholder="Breed" />
              <TextInput style={styles.input} value={color} onChangeText={setColor} placeholder="Color" />
              <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Description" />

              <TouchableOpacity style={styles.addButton} onPress={handleAddPet}>
                <Text style={styles.addButtonText}>Add Pet</Text>
              </TouchableOpacity>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}  // If using items, this helps uniquely identify them
        />
        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
  input: {
    width: 350,
    height: 62,
    borderColor: '#000',
    borderWidth: 2,
    marginBottom: 30,
    paddingLeft: 10,
    borderRadius: 25,
    fontFamily: 'Afacad-Regular',  // Apply the font to the text inputs
    alignSelf: 'center',
    position: 'relative',
    justifyContent: 'center',
  },
  imagePickerContainer: {
    alignItems: 'center',
    marginVertical: 20,
    position: 'relative',
  },
  petImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  selectImage: {
    position: 'absolute',
    bottom: 0,  // Position it slightly below the profile image
    left: 210,   // Position it slightly to the right of the profile image
    backgroundColor: '#fff',
    borderRadius: 50,  // Circular button for select image icon
    borderWidth: 2,
    borderColor: '#ccc',
  },
  addButton: {
    backgroundColor: '#BF4343',
    padding: 14,
    borderRadius: 25,
    marginTop: 20,
    width: 200,
    alignSelf: 'center',
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Afacad-Regular',  // Apply the font to the button text
  },
  dropdown: {
    width: 350,
    height: 62,
    borderColor: '#000',
    borderWidth: 2,
    marginBottom: 30,
    borderRadius: 25,
    alignSelf: 'center',
    position: 'relative',
    justifyContent: 'center',
  },
  dropdownStyle: {
    backgroundColor: '#fafafa',
  },
  placeholderStyle: {
    color: '#ccc',  // Set the placeholder text color to match other input fields
    fontFamily: 'Afacad-Regular',  // Apply the same font as the other input fields
  },
});

export default AddPet;
