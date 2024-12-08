import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Modal, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Checkbox } from 'expo-checkbox';

const SignUp = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');

  let [fontsLoaded] = useFonts({
    'Afacad-Regular': require('../assets/fonts/Afacad-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; 
  }

  const [isLoading, setIsLoading] = useState(false); 

  const handleSignUp = async () => {
    setIsLoading(true); 
    setTimeout(() => {
      setIsLoading(false); 
      navigation.navigate('HomeScreen'); 
    }, 2000); 
  };

  const openModal = (type) => {
    setModalType(type);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalType('');
  };

  const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);

  // Toggle the visibility of the first password field
  const togglePasswordVisibility1 = () => {
    setIsPasswordVisible1(!isPasswordVisible1);
  };

  // Toggle the visibility of the second password field
  const togglePasswordVisibility2 = () => {
    setIsPasswordVisible2(!isPasswordVisible2);
  };

  const termsText = (
    <Text style={{ fontWeight: '600', fontSize: 20, fontFamily: 'Afacad-Regular' }}>
      Terms and Conditions Content
    </Text>
  );

  const privacyText = (
    <Text style={{ fontWeight: '', fontSize: 20, fontFamily: 'Afacad-Regular' }}>
      Privacy Policy Content
    </Text>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Sign Up</Text>
        </View>
        <View style={styles.inputContainer}>
          <Image source={require('../assets/icons/user.png')} style={styles.icon} />
          <TextInput style={styles.nameInput} placeholder="Name" />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('../assets/icons/email.png')} style={styles.icon} />
          <TextInput style={styles.nameInput} placeholder="Email Address" />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('../assets/icons/password.png')} style={styles.icon} />
          <TextInput 
            style={styles.nameInput} 
            placeholder="Create Password" 
            secureTextEntry={!isPasswordVisible1}
          />
          <TouchableOpacity onPress={togglePasswordVisibility1} style={styles.view}>
            <Image source={require('../assets/icons/view.png')} style={styles.viewIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('../assets/icons/password.png')} style={styles.icon} />
          <TextInput 
            style={styles.nameInput} 
            placeholder="Confirm Password" 
            secureTextEntry={!isPasswordVisible2}
          />
          <TouchableOpacity onPress={togglePasswordVisibility2} style={styles.view}>
            <Image source={require('../assets/icons/view.png')} style={styles.viewIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isSelected}
            onValueChange={setSelection}
            color={isSelected ? '#007bff' : undefined}
          />
          <Text style={styles.checkboxText}>
            I agree to the{' '}
            <Text style={styles.underlinedText} onPress={() => openModal('terms')}>
              Terms and Conditions
            </Text>{' '}
            and{' '}
            <Text style={styles.underlinedText} onPress={() => openModal('privacy')}>
              Privacy Policy
            </Text>{' '}
            of PawTracker.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        {isLoading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#BF4343" />
            <Text style={styles.loadingText}>Signing Up...</Text>
          </View>
        )}

        <Text style={styles.footer}>
          Already have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.underlinedLoginText}>Login</Text>
          </TouchableOpacity>
        </Text>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text>{modalType === 'terms' ? termsText : privacyText}</Text>
          </ScrollView>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginTop: 70,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Afacad',
    textAlign: 'center',
    fontWeight: '500',
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
    color: '#000',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
  },
  checkboxText: {
    fontSize: 10,
    fontFamily: 'Afacad-Regular',
    marginRight: 20,
    marginLeft: 20,
  },
  underlinedText: {
    marginVertical: 20,
    textDecorationLine: 'underline',
    color: '#007bff',
    fontFamily: 'Afacad-Regular',
  },
  underlinedLoginText: {
    fontSize: 9,
    textDecorationLine: 'underline',
    color: '#007bff',
    fontFamily: 'Afacad-Regular',
  },
  buttonContainer: {
    marginTop: 30,
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
  footer: {
    marginVertical: 30,
    fontSize: 9,
    fontFamily: 'Afacad-Regular',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    height: 400,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25%',
    left: '10%',
    right: '10%',
  },
  scrollContainer: {
    paddingBottom: 20,
    paddingRight: 10,
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

export default SignUp;