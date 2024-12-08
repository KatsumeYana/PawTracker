import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, BackHandler, Alert } from 'react-native';

const HomeScreen = ({ navigation }) => {

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Exit App", "Are you sure you want to exit?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "OK", onPress: () => BackHandler.exitApp() }
      ]);
      return true; // Prevent the default back action (navigating back)
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove(); // Cleanup when component unmounts
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Text style={styles.boxText}>PawTracker</Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={() => navigation.navigate('Profile')} 
          accessibilityLabel="Go to Profile"
          accessibilityRole="button"
        >
          <Image source={require('../assets/icons/profile-icon.png')} style={styles.icon} />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={() => navigation.navigate('VetClinics')} 
          accessibilityLabel="Go to Vet Clinics"
          accessibilityRole="button"
        >
          <Image source={require('../assets/icons/vet-icon.png')} style={styles.icon} />
          <Text style={styles.menuText}>Vet Clinics</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={() => Alert.alert('Feature Coming Soon!')} // Placeholder for future functionality
          accessibilityLabel="Find My Pet (Coming Soon)"
          accessibilityRole="button"
        >
          <Image source={require('../assets/icons/find-icon.png')} style={styles.icon} />
          <Text style={styles.menuText}>Find My Pet</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={() => Alert.alert('Feature Coming Soon!')} // Placeholder for future functionality
          accessibilityLabel="Community Tab (Coming Soon)"
          accessibilityRole="button"
        >
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
  topBox: {
    width: '100%', // Adjusted to 100% for responsiveness
    height: 90,          
    backgroundColor: '#BF4343',  
    justifyContent: 'center',    
    alignItems: 'center',        
    marginBottom: 20,          
  },
  boxText: {
    marginTop: 20,
    fontSize: 24,
    color: '#fff',           
    fontFamily: 'Moul',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 50,
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
    fontFamily: 'Afacad', 
  },
  bottomImageContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;
