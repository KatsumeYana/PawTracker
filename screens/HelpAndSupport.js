import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, ScrollView, Image } from 'react-native';
import { useTheme } from './ThemeContext'; // Import the ThemeContext for dark mode

const HelpAndSupport = ({ navigation }) => {
  const { isDarkMode } = useTheme(); // Access dark mode state
  const [activeTab, setActiveTab] = useState('FAQ');
  const [openIndex, setOpenIndex] = useState(null);

  // State for contact form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function for back button
  const handleBackPress = () => {
    navigation.goBack();
  };

  // Function to handle form submission (email sending logic should be implemented here)
  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }
    // Add email sending logic here using an API
    Alert.alert('Success', 'Your message has been sent!');
  };

  // FAQ Questions and Answers
  const faqData = [
    {
      question: "What is PawTracker?",
      answer: "PawTracker is a mobile app designed to help users rescue stray animals and locate lost pets using GPS tracking and community engagement.",
    },
    {
      question: "Who can use PawTracker?",
      answer: "Anyone in the community can use PawTracker, including pet owners, rescuers, and animal lovers looking to help.",
    },
    {
      question: "How do I create an account?",
      answer: "Download the app from your app store, open it, and follow the prompts to sign up with your email.",
    },
    {
      question: "How do I report a lost pet?",
      answer: "Navigate to the Lost & Found section, upload a photo, and provide a description and last known location of your lost pet.",
    },
    {
      question: "How do I find nearby veterinary clinics?",
      answer: "Use the Location Finder feature, which utilizes your phone’s GPS to display a list of nearby veterinary clinics and animal care centers, along with their contact information.",
    },
    {
      question: "How can I contact emergency services for animals?",
      answer: "Use the Call Rescuer section in the app to find local animal rescue hotlines and contact numbers.",
    },
    {
      question: "How does the GPS locator work?",
      answer: "The GPS locator allows users to track their lost pets or stray animals by providing their last known location.",
    },
    {
      question: "How do I post a lost pet alert?",
      answer: "Go to the Community tab, select the Lost Pet option, and upload a photo along with a description and details about the last known location.",
    },
    {
      question: "What should I do if I encounter issues using any features?",
      answer: "If you experience any issues, please reach out through the Contact Us section in the app or email our support team at support@pawtracker.com for assistance.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            source={require('../assets/icons/back.png')}
            style={[styles.backButtonImage, { tintColor: isDarkMode ? '#fff' : '#000' }]}
          />
        </TouchableOpacity>
        <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Help and Support</Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'FAQ' && styles.activeTab, { borderBottomColor: isDarkMode ? '#fff' : '#000' }]}
          onPress={() => setActiveTab('FAQ')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'FAQ' && styles.activeTabText, { color: isDarkMode ? '#fff' : '#000' }]}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Contact Us' && styles.activeTab, { borderBottomColor: isDarkMode ? '#fff' : '#000' }]}
          onPress={() => setActiveTab('Contact Us')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'Contact Us' && styles.activeTabText, { color: isDarkMode ? '#fff' : '#000' }]}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      {/* FAQ Section */}
      {activeTab === 'FAQ' && (
        <View>
          {faqData.map((item, index) => (
            <View key={index} style={styles.faqItem}>
              <TouchableOpacity onPress={() => toggleAnswer(index)} style={styles.faqQuestion}>
                <Text style={[styles.sectionText, { color: isDarkMode ? '#fff' : '#000' }]}>{item.question}</Text>
              </TouchableOpacity>
              {openIndex === index && (
                <Text style={[styles.sectionAnswer, { color: isDarkMode ? '#ccc' : '#555' }]}>{item.answer}</Text>
              )}
            </View>
          ))}
        </View>
      )}

      {/* Contact Us Form */}
      {activeTab === 'Contact Us' && (
        <View style={[styles.contactBox, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
          <Text style={[styles.contactTitle, { color: isDarkMode ? '#fff' : '#000' }]}>Contact</Text>
          <TextInput
            style={[styles.input, { backgroundColor: isDarkMode ? '#555' : '#fff', color: isDarkMode ? '#fff' : '#000' }]}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            placeholderTextColor={isDarkMode ? '#ccc' : '#888'}
          />
          <TextInput
            style={[styles.input, { backgroundColor: isDarkMode ? '#555' : '#fff', color: isDarkMode ? '#fff' : '#000' }]}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor={isDarkMode ? '#ccc' : '#888'}
          />
          <TextInput
            style={[styles.input, { height: 100, backgroundColor: isDarkMode ? '#555' : '#fff', color: isDarkMode ? '#fff' : '#000' }]}
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
            multiline
            placeholderTextColor={isDarkMode ? '#ccc' : '#888'}
          />
          <TouchableOpacity style={[styles.submitButton, { backgroundColor: isDarkMode ? '#BF4343' : '#BF4343' }]} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Footer Text */}
      <View style={styles.footerTextContainer}>
        <Text style={[styles.footerText, { color: isDarkMode ? '#888' : '#555' }]}>© 2024 PawTracker. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
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
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginHorizontal: 5,
  },
  tabButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Afacad-Regular',
  },
  activeTab: {
    borderBottomWidth: 3,
  },
  activeTabText: {
    fontFamily: 'Afacad-Regular',
  },
  sectionText: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: 'Afacad-Regular',
  },
  sectionAnswer: {
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 10,
    fontFamily: 'Afacad-Regular',
  },
  faqItem: {
    marginBottom: 20,
  },
  faqQuestion: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '95%',
    maxWidth: 400,
    marginLeft: 10,
  },
  contactBox: {
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginTop: 20,
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Afacad-Regular',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    fontFamily: 'Afacad-Regular',
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Afacad-Regular',
  },
  footerTextContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'Afacad-Regular',
  },
});

export default HelpAndSupport;
