import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Appearance, ScrollView, Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios'
import { url } from '../../config/env';
import { Validator } from 'mongoose';
const validator = require('validator')
const mopngoose = require('mongoose')


export default function Login({ navigation }) {

    const [theam, setTheam] = useState(Appearance.getColorScheme())
    Appearance.addChangeListener((scheme) => {
        setTheam(scheme.colorScheme)
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    function handelSubmit() {
        const userData = {
            email: email,
            password,
            name,
            role
        };
        axios
            .post(`${url}/u/register`, userData)
            .then(res => {
                console.log(res.data)
                if (res.data.status === 'ok') {
                    Alert.alert("Login Succissfull!")
                    navigation.navigate("BottomTab")
                }
                else {
                    Alert.alert(JSON.stringify(res.data));
                }
            }) 
            .catch(e => console.log(e));
    }
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView>
                <View style={styles.section1} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', top: '40%', left: '33%', color: '#000' }}>Illustration</Text>
                </View>
                <View style={styles.section2}>
                    <Text style={styles.text1}>Sign Up</Text>
                    <View style={styles.inputView}>
                        <View style={styles.inputView1}>
                            {/* <Ionicons name='mail' color='black' size={20} /> */}
                            <TextInput
                                style={[styles.input, { width: '90%' }]}
                                value={email}
                                onChangeText={text => setEmail(text)}
                                autoCapitalize='none'
                                placeholder='Email'
                                placeholderTextColor={"#707070"}
                            />
                        </View>
                        <View style={styles.inputView2}>
                            <TextInput
                                style={[styles.input, { width: '90%' }]}
                                value={name}
                                onChangeText={text => setName(text)}
                                autoCapitalize='none'
                                placeholder='User Name'
                                placeholderTextColor={"#707070"}
                            />
                        </View>
                        <View style={styles.inputView2}>
                            <TextInput
                                style={[styles.input, { width: '90%' }]}
                                value={role}
                                onChangeText={text => setRole(text)}
                                autoCapitalize='none'
                                placeholder='Role'
                                placeholderTextColor={"#707070"}
                            />
                        </View>
                        <View style={styles.inputView2}>
                            {/* <Ionicons name='lock-closed' color='black' size={20} /> */}
                            <TextInput
                                style={styles.input}
                                value={password}
                                onChangeText={text => setPassword(text)}
                                secureTextEntry={showPassword}
                                autoCapitalize='none'
                                placeholder='Password'
                                placeholderTextColor={'#707070'}
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
                        style={styles.button}
                        onPress={() => {
                            handelSubmit();
                            navigation.navigate('Login')
                        }}
                    >
                        <Text style={styles.text4}>Continue</Text>
                    </TouchableOpacity>
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
        height: '75%'
    },
    section2: {
        padding: 20,
        flex: 0,
        backgroundColor: '#fff',
        width: '100%',
        height: '25%',
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
        fontWeight: '500',
        marginLeft: 10,
        color: '#000'
    },
    text2: {
        color: '#000',
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
        marginTop: 30,
        marginLeft: -20,
        textAlign: 'center',
    },
    text8: {
        color: '#000',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: -23,
        marginLeft: '63%',
        textAlign: 'center'
    },
})