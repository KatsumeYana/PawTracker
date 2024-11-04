import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert, Image, Modal } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';

const VetClinicsScreen = () => {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [clinics, setClinics] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); // For handling modal visibility

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Permission to access location was denied");
        return;
      }da

      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  const handleDestinationSelect = () => {
    if (location) {
      setDestination({
        latitude: location.latitude + 0.01,
        longitude: location.longitude + 0.01,
      });
    } else {
      Alert.alert("User location is not available");
    }
  };

  const handleSearchClinics = () => {
    const sampleClinics = [
      { id: '1', name: 'Carriage Animal Hospital', phone: '123-456-7890' },
      { id: '2', name: 'Quezon City Animal Center', phone: '987-654-3210' },
      { id: '3', name: 'VetCare Clinic', phone: '555-123-4567' },
    ];
    setClinics(sampleClinics);
    setModalVisible(true); // Show the modal when search button is clicked
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={location}
        showsUserLocation={true}
      >
        {location && <Marker coordinate={location} title="Your Location" />}
        {destination && <Marker coordinate={destination} title="Destination" pinColor="red" />}
        {location && destination && (
          <Polyline coordinates={[location, destination]} strokeColor="#000" strokeWidth={3} />
        )}
      </MapView>

      <View style={styles.searchPanel}>
        <Text style={styles.title}>Search Clinics</Text>
        
        <TouchableOpacity style={styles.input} onPress={() => Alert.alert('Select Your Location')}>
          <Image source={require('C:/Users/Juliana/PawTracker/assets/icons/cil_hospital.png')} style={styles.icon} />
          <Text style={styles.inputText}>Your Location</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.input} onPress={handleDestinationSelect}>
          <Image source={require('C:/Users/Juliana/PawTracker/assets/icons/cil_hospital.png')} style={styles.icon} />
          <Text style={styles.inputText}>Select Destination</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchButton} onPress={handleSearchClinics}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for displaying clinics */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Nearby Clinics</Text>
            <FlatList
              data={clinics}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.clinicItem}>
                  <Image source={require('C:/Users/Juliana/PawTracker/assets/icons/cil_hospital.png')} style={styles.icon} />
                  <Text style={styles.clinicName}>{item.name}</Text>
                  <TouchableOpacity style={styles.callButton} onPress={() => Alert.alert(`Options for ${item.name}`)}>
                    <Image source={require('C:/Users/Juliana/PawTracker/assets/icons/3 dot.png')} style={styles.callIcon} />
                  </TouchableOpacity>
                </View>
              )}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  searchPanel: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Afacad', 
    marginBottom: 15,
    color: '#000',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  inputText: {
    fontSize: 16,
    fontFamily: 'Afacad',
    color: '#666',
  },
  searchButton: {
    backgroundColor: '#BF4343',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Afacad',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  clinicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  clinicName: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Afacad',
    color: '#000',
  },
  callButton: {
    padding: 10,
    borderRadius: 50,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  callIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  closeButton: {
    backgroundColor: '#BF4343',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VetClinicsScreen;
