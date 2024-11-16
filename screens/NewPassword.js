// New Password
import React, {} from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

const NewPassword = ({ navigation }) => {
 
  let [fontsLoaded] = useFonts({
    'Afacad-Regular': require('../assets/fonts/Afacad-Regular.ttf'),
  });

  return (
    <SafeAreaView style = {{flex:1, backgroundColor:'#fff'}}>
    <View style = {styles.container}>
    <View style = {styles.header}>
      <Text style = {styles.title}>Create New Password</Text>
      </View>

    <View style = {styles.inputContainer}>
    <Image source={require('../assets/icons/newPassword.png')} 
          style={styles.icon}
        />
        <Image source={require('../assets/icons/view.png')}
          style={styles.view}
        />
      <TextInput style = {styles.nameInput} placeholder = "New Password"/>
    </View>
    <View style = {styles.inputContainer}>
    <Image source={require('../assets/icons/password.png')}
          style={styles.icon}
        />
        <Image source={require('../assets/icons/view.png')}
          style={styles.view}
        />
      <TextInput style = {styles.nameInput} placeholder = "Confirm Password" secureTextEntry/>
    </View>
    

   <View style={styles.buttonContainer}>
   <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Save</Text>
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
  width:200,
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



export default NewPassword;
