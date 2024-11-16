//Verify Code
import React, { useState } from 'react';
import { View, Text,  TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

const VerifyCode = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        'Afacad-Regular': require('../assets/fonts/Afacad-Regular.ttf'),
      });

  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputsRef = React.useRef([]);

  const handleChange = (text, index) => {
    let newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 5) {
      inputsRef.current[index + 1].focus();
    }

    if (newCode.join('').length === 6) {
      navigation.navigate('NewPassword');  
    }
  };

  const handleBackspace = (index) => {
    if (code[index] === '') {
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  
  const isCodeComplete = code.join('').length === 6;

  return (
    <View style={styles.container}>
     <View style = {styles.header}>
      <Text style = {styles.title}>Verify Your Email</Text>
      <Text style={styles.text}>Please enter the 6-digit code sent to your email</Text>
      </View>
      <View style={styles.inputContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                handleBackspace(index);
              }
            }}
            maxLength={1}
            keyboardType="numeric"
            textAlign="center"
            ref={(ref) => inputsRef.current[index] = ref} 
          />
        ))}
      </View>

      {isCodeComplete && (
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate('NewPassword')}  
        >
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#fff',
   },

  header: {
    marginTop: 180,
    marginBottom: 40,

  },

  title: {
    fontSize: 24,
    fontFamily: 'Afacad-Regular',
    textAlign: 'center',
  },

  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '80%', 
    marginTop: 30,
  },

  text:{
    fontSize: 10,
    fontFamily: 'Afacad-Regular',
    marginTop: 20,
  },
 
  input: {
    width: 40, 
    height: 50, 
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center', 
    fontSize: 20,
    borderColor: '#000',
    marginHorizontal: 5, 
  },

  submitButton: {
    backgroundColor: '#BF4343',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 50,
    
  },

  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Afacad-Regular',
  },
});

export default VerifyCode;
