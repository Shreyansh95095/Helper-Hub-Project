import axios from 'axios';
import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Appearance, ScrollView, Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { url } from '../../config/env'
export default function Login({ navigation }) {

  const [theam, setTheam] = useState(Appearance.getColorScheme())
  Appearance.addChangeListener((scheme) => {
    setTheam(scheme.colorScheme)
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(true)

  async function handelSubmit() {
    const helperData = {
      email: email,
      password
    };
    try {
      const res = await axios.post(`${url}/h/login`, helperData);
      if (res.data.message === "Helper logged in successfully") {
        Alert.alert("Success", "Login successful!"); 
        navigation.navigate("UserBottomTab");
      } else {
        Alert.alert("Login Failed", res.data.message || "Invalid credentials");
      }
    } catch (err) {
      console.log(err)
      Alert.alert("Login Failed!", err.message || "Invalid Credentials");
    }
  }

  return (
    <SafeAreaView style={styles.container} >
      <ScrollView>
        <View style={styles.section1} >
          <Text style={{ fontSize: 20, fontWeight: 'bold', top: '40%', left: '33%', color: '#000' }}>Illustration</Text>
        </View>
        <View style={styles.section2}>
          <Text style={styles.text1}>Log in</Text>
          <View style={styles.inputView}>
            <View style={styles.inputView1}>
              <Ionicons style={styles.inputIcons} name='mail' color='black' size={20} />
              <TextInput style={[styles.input, { width: '90%' }]} value={email} onChangeText={text => setEmail(text)} autoCapitalize='none' />
            </View>
            <View style={styles.inputView2}>
              <Ionicons style={styles.inputIcons} name='lock-closed' color='black' size={20} />
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={showPassword}
                autoCapitalize='none'
                maxLength={20}
              />
              <TouchableOpacity
                onPress={() => { setShowPassword(!showPassword) }}
              >
                <Text style={styles.text2}>Show Password</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => { navigation.navigate('ForgotPass') }}
          >
            <Text style={styles.text3}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { handelSubmit() }}
          >
            <Text style={styles.text4}>Continue</Text>
          </TouchableOpacity>
          <Text style={styles.text5}>or</Text>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {/* Handle continue with Google action */ }}
          >
            <Text style={styles.text6}>Continue with Google</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '7%' }} >
            <Text style={styles.text7}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => { navigation.navigate('Helper_Signup') }}
            >
              <Text style={styles.text8}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  section1: {
    padding: 20,
    flex: 0,
    backgroundColor: '#D9D9D9',
    width: '100%',
    height: '45%'
  },
  section2: {
    padding: 20,
    flex: 0,
    backgroundColor: '#fff',
    width: '100%',
    height: '55%',
  },
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },
  inputView: {
    backgroundColor: 'white',
  },
  inputView1: {
    width: '100%',
    height: 50,
    padding: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  inputView2: {
    width: '100%',
    height: 50,
    padding: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  input: {
    width: '50%',
    height: 40,
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000'
  },
  inputIcons: {
    // marginTop: -30,
  },
  text2: {
    color: '#000',
    // marginTop: -30,
    marginLeft: '20 %'
  },
  text3: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 30,
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    marginTop: 30,
    height: 50,
    backgroundColor: '#505050',
    padding: 10,
    borderRadius: 10
  },
  text4: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },
  text5: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    textAlign: 'center'
  },
  button2: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    height: 50,
    backgroundColor: '#d9d9d9',
    padding: 10,
    borderRadius: 10
  },
  text6: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold'
  },
  text7: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    // marginTop: 30,
    // marginLeft: -20,
    textAlign: 'center',
  },
  text8: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
    // marginTop: -23,
    // marginLeft: '63%',
    textAlign: 'center'
  },
})