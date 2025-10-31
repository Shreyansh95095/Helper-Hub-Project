import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Keyboard } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { url } from '../../config/env';

export default function PersonalDetailsScreen() {
  // Initial state with sample data
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
        try {
            // console.log(API_BASE_URL)
            const res = await axios.get(`${url}/u/${email}`);
            const userData = res.data;
            // console.log(res.data)
            setName(userData.name || '');
            setEmail(userData.email || '');
            setPhone(userData.phone || '');
            setAddress(userData.address || '');
            // setGender(userData.gender || '');
        } catch (error) {
            console.error('Error fetching user data:', error);
            Alert.alert('Error', 'Failed to fetch user data.');
        }
    };

    fetchUserData();
}, []);

  // Handle save button click
  const handleSaveChanges = async () => {
    try {
        const updatedUserData = {
            name,
            email,
            phone,
            address,
        };
        await axios.post(`${url}/u/update-details`, updatedUserData);
        Alert.alert('Success', 'Your details have been updated successfully!');
        Keyboard.dismiss();
    } catch (error) {
        console.error('Error saving user data:', error);
        Alert.alert('Error', 'Failed to save your details. Please try again.');
    }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Details</Text>

      {/* Editable Name */}
      <View style={ styles.inputContainer }>
        <TextInput
          style={ styles.input }
          value={ name }
          onChangeText={ setName }
          placeholder="Enter your name"
        />
      </View>

      {/* Editable Email */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor='#'
        />
      </View>

      {/* Editable Phone Number */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your phone number"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          placeholder="Enter your  address"
        />
      </View>
      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
    backgroundColor:'#D9D9D9',
    borderRadius:10
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    fontWeight:'600',
    color:'#000'
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
