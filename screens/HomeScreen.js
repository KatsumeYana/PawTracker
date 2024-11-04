import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButton}>
          <Image source={require('../assets/icons/profile-icon.png')} style={styles.icon} />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={() => navigation.navigate('VetClinics')}
        >
          <Image source={require('../assets/icons/vet-icon.png')} style={styles.icon} />
          <Text style={styles.menuText}>Vet Clinics</Text>
        </TouchableOpacity>
      

        <TouchableOpacity style={styles.menuButton}>
          <Image source={require('../assets/icons/find-icon.png')} style={styles.icon} />
          <Text style={styles.menuText}>Find My Pet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Image source={require('../assets/icons/community-icon.png')} style={styles.icon} />
          <Text style={styles.menuText}>Community Tab</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.bottomImageContainer}>
        <Image source={require('../assets/images/bottom-illustration.png')} style={styles.bottomImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  menuButton: {
    backgroundColor: '#FFFFFF',
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 10, 
    elevation: 8, 
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  menuText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Afacad', // Ensure consistency with fontFamily name
  },
});

export default HomeScreen;