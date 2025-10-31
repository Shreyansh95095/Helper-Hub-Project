import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import ProfileUploader from './ProfileUploader';
import axios from 'axios';
import { url } from '../../config/env'
// import { Navigator } from 'expo-router';  


const Profile = ({ navigation }) => {

  async function handleLogOut() {
    const status = await axios.get(`${url}/u/logout`);
    if (status.data.message === 'User logged out successfully') {
      navigation.navigate('UserAndHelper');
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.section1} >
          <ProfileUploader userType="user" />
        </View>
        <View style={styles.section2} >

          <TouchableOpacity
            onPress={() => navigation.navigate('PersonalDetail')}
          >
            <View style={styles.section2View}>
              <View style={styles.section2IconText}>
                <View style={styles.section2Icon}>
                  <Ionicons name='person' size={20} color={'black'} />
                </View>
                <Text style={styles.section2Text} >Personal Details</Text>
              </View>
              <Ionicons name='chevron-forward-outline' size={30} color={'black'} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('About')} >
            <View style={styles.section2View}>
              <View style={styles.section2IconText}>
                <View style={styles.section2Icon}>
                  <Ionicons name='information-circle' size={30} color={'black'} />
                </View>
                <Text style={styles.section2Text} >About</Text>
              </View>
              <Ionicons name='chevron-forward-outline' size={30} color={'black'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.section2View}>
              <View style={styles.section2IconText}>
                <View style={styles.section2Icon}>
                  <Ionicons name='help-circle' size={30} color={'black'} />
                </View>
                <Text style={styles.section2Text} >Help</Text>
              </View>
              <Ionicons name='chevron-forward-outline' size={30} color={'black'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleLogOut()}>
            <View style={styles.section2View}>
              <View style={styles.section2IconText}>
                <View style={styles.section2Icon}>
                  <Ionicons name='log-out-outline' size={30} color={'black'} />
                </View>
                <Text style={styles.section2Text}  >Log out</Text>
              </View>
              <Ionicons name='chevron-forward-outline' size={30} color={'black'} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 10
  },
  section1: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section1Text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000'
  },
  section2: {
    height: '75%',
    marginTop: 15,
  },
  section2View: {
    flex: 0,
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  section2IconText: {
    flexDirection: 'row'
  },
  section2Icon: {
    width: 40,
    height: 40,
    marginHorizontal: 20,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  section2Text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginTop: 6
  },
})