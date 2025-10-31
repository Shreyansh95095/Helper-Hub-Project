import React, { useState, useEffect } from 'react';
import {
  View,
  Button,
  Image,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {
  launchImageLibrary,
} from 'react-native-image-picker';
import axios from 'axios';

import { url } from '../../config/env'

const API_URL = url;
const ProfileUploader = ({ userType = 'user' }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // Load existing profile image on component mount
  useEffect(() => {
    loadProfileImage();
  }, [userType]);

  const loadProfileImage = async () => {
    try {
      const response = await axios.get(`${url}/u/get-profile-image?userType=${userType}`);

      if (response.data.success && response.data.profileImage) {
        setImage({
          uri: response.data.profileImage,
          base64: response.data.profileImage.split(',')[1], // Extract base64 part
          type: response.data.profileImage.split(';')[0].split(':')[1] // Extract MIME type
        });
      }
    } catch (error) {
      console.log('No existing profile image or error loading:', error.message);
    }
  };

  const selectImage = async () => {
    setModalVisible(false);

    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
      includeBase64: true,
      quality: 0.8,
    });

    if (result.assets && result.assets.length > 0) {
      setImage(result.assets[0]);
    }
  };

  const uploadImage = async () => {
    if (!image) return;

    setLoading(true);
    setModalVisible(false);

    try {
      // Convert image to base64
      const base64Image = `data:${image.type};base64,${image.base64}`;

      // User type is passed as prop

      const response = await axios.post(`${API_URL}/u/update-profile-image`, {
        profileImage: base64Image,
        userType: userType,
        imageUri: image.uri
      });

      if (response.data.success) {
        Alert.alert('Success', 'Profile image updated successfully');
      } else {
        Alert.alert('Error', response.data.message || 'Failed to update profile image');
      }
    } catch (error) {
      console.error('Upload failed:', error);
      Alert.alert('Error', 'Failed to update profile image');
    } finally {
      setLoading(false);
    }
  };

  const removeImage = async () => {
    setLoading(true);
    setModalVisible(false);
    try {
      // User type is passed as prop

      const response = await axios.post(`${API_URL}/u/remove-profile-image`, {
        userType: userType
      });

      if (response.data.success) {
        setImage(null);
        Alert.alert('Success', 'Profile image removed');
      } else {
        Alert.alert('Error', response.data.message || 'Failed to remove profile image');
      }
    } catch (error) {
      console.error('Remove failed:', error);
      Alert.alert('Error', 'Failed to remove profile image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        activeOpacity={0.7}
      >
        {image ? (
          <Image source={{ uri: image.uri }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Image
              source={require('../../assets/Images/Plumber-Profile.png')}
              style={styles.image}
            />
          </View>
        )}
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Profile Options</Text>
          <View style={styles.modalButtonContainer}>
            <Button title="Select Image" onPress={selectImage} />
          </View>
          <View style={styles.modalButtonContainer}>
            <Button title="Upload Image" onPress={uploadImage} disabled={!image} />
          </View>
          <View style={styles.modalButtonContainer}>
            <Button title="Remove Image" onPress={removeImage} />
          </View>
          <View style={styles.modalButtonContainer}>
            <Button title="Cancel" color="#888" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  image: { width: 150, height: 150, borderRadius: 75, marginBottom: 10 },
  placeholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    position: 'absolute',
    top: '40%',
    left: '10%',
    right: '10%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalButtonContainer: {
    width: '100%',
    marginVertical: 4,
  },
});

export default ProfileUploader;
