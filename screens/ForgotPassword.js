import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

const ForgotPassword = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        'Afacad-Regular': require('../assets/fonts/Afacad-Regular.ttf'),
      });
    
      const handleForgot = () => {
        console.log("Send Button Pressed");
      };
    
      return (
        <SafeAreaView style = {{flex:1, backgroundColor:'#fff'}}>
        <View style = {styles.container}>
        <View style = {styles.header}>
          <Text style = {styles.title}>Forgot Password</Text>
          </View>
        <View style = {styles.inputContainer}>
          <TextInput style = {styles.nameInput} placeholder = "Enter your email address"/>
        </View>
        

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VerifyCode')}>
            <Text style={styles.buttonText}>Send Code</Text>
          </TouchableOpacity>
        </View>
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
    marginLeft: 15,
    marginTop: 10, 
},
      
checkboxText: {
    fontSize: 15,
    fontFamily: 'Afacad-Regular',
    marginLeft: 10,
},
    
    
buttonContainer: {
    marginTop: 20, 
    width:200,
    alignSelf: 'center',
},
    
button: {
  backgroundColor: '#BF4343', 
  paddingVertical: 14,
  borderRadius: 25,
  alignItems: 'center', // Center the text
},

buttonText: {
    fontSize: 16,
    color: '#fff', // White text
    fontFamily: 'Afacad-Regular', // Custom font
  },

    
footer: {
    fontSize: 15,
    fontFamily: 'Afacad-Regular',
    marginTop: 30,
    textAlign: 'center',
},
});
    
    
    
export default ForgotPassword;
    