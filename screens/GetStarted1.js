//Get Started 1
import React, {useState} from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

const GetStarted1 = ({ navigation }) => {
    
    const [currentPage, setCurrentPage] = useState(0);
 
    let [fontsLoaded] = useFonts({
        'Afacad-Regular': require('../assets/fonts/Afacad-Regular.ttf'),
        'Moul-Regular': require('../assets/fonts/Moul-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;  
      }

  return (
    <SafeAreaView style = {{flex:1, backgroundColor:'#fff'}}>
    <View style = {styles.container}>
    <View style = {styles.header}>
    <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('SignUp')}>
      <Text style = {styles.title}>Skip</Text>
      </TouchableOpacity>
      </View>

    <View style = {styles.header}>
    <Image source={require('../assets/images/GetStarted1.png')} 
          style={styles.icon}
        />
      </View>
    
      <View style = {styles.header}>
      <Text style = {styles.text}>Find Nearby Clinics</Text>
    <Text style={styles.textInput}>Ensure your pet receives the best care {' '} without the hassle of searching.</Text>
      </View>

      <View style={styles.pageIndicator}>
          {[0, 1, 2, 3].map((index) => (
            <View
              key={index}
              style={[
                styles.circle,
                index === currentPage ? styles.activeCircle : styles.inactiveCircle,
              ]}
            />
          ))}
        </View>

   <View style={styles.buttonContainer}>
   <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GetStarted2')}>
        <Text style={styles.buttonText}>Next</Text>
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
    marginTop: 0,
  },

  title: {
    fontSize: 16,
    fontFamily: 'Afacad-Regular',
    textAlign: 'right',
  },

  text: {
    fontSize: 16,
    fontFamily: 'Moul-Regular',  
    textAlign: 'center',
    color: '#BF4343', 
  },

  textInput: {
    fontSize: 12,
    fontFamily: 'Afacad-Regular',  
    textAlign: 'center',
    marginTop: 20,
  },


  icon: { 
    alignSelf: 'center',
    width: 400,
    height: 400,         
  },

  pageIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30, 
  },

  circle: {
    width: 16,
    height: 16,
    borderRadius: 10,
    margin: 5,
  },

  activeCircle: {
    backgroundColor: '#BF4343', 
    width: 16,
    height: 16,
    borderRadius: 10,
  },

  inactiveCircle: {
    backgroundColor: '#ccc', 
  },

  buttonContainer: {
  marginTop: 40, 
  width:300,
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

});



export default GetStarted1;