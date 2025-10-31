import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios'
import { url } from '../../config/env'

export default function ForgotPass({navigation}) {

        const [email, setEmail] = useState('');
        
        async function handleSubmit() {
            const userData = {
                email : email
            };
            try {
                const res = await axios.post(`${url}/otp/send-otp`, userData);
                if (res.data.status === 'ok') {
                    navigation.navigate('OTP', { email: email});
                } else {
                    Alert.alert("User Not found");
                    navigation.navigate('ForgotPass');
                }
            }
            catch (err) {
                console.log(err);
                Alert.alert('User Not Found');
            }
        };

        return (
            <SafeAreaView >
                <ScrollView style={styles.container}>
                    <View style={styles.section1}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', top: '40%', left: '33%',color:'#000' }}>Illustration</Text>
                    </View>
                    <View style={styles.section2}>
                        <Text style={styles.text1}>Forgot</Text>
                        <Text style={styles.text2}>your Password?</Text>
                        <Text style={styles.text3}>Enter your email address to reset your password</Text>
                        <View style={styles.inputView}>
                            <Ionicons name='mail' color='black' size={20} />
                            <TextInput 
                                style={styles.input} 
                                value={email}
                                onChangeText={text => setEmail(text)}
                            />
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => { handleSubmit() }}>
                            <Text style={styles.text4}>Send OTP</Text>
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
        height: '100%'
    },
    section1: {
        padding: 20,
        flex: 0,
        backgroundColor: '#D9D9D9',
        width: '100%',
        height: '100%'
    },
    section2: {
        padding: 20,
        flex: 0,
        backgroundColor: '#fff',
        width: '100%',
        height: '30%',
    },
    text1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    text2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    text3: {
        marginTop: 20,
        fontSize: 15,
        color: '#000'
    },
    inputView: {
        width:'100%',
        height:50,
        padding:10,
        marginTop:20,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'#D0D0D0'
    },
    input: {
        width:'90%',
        height:30,
        padding:10,
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#000',
        paddingBottom:-15,
        marginBottom:7,
        overflow:'hidden',
        justifyContent:'center'
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
    }
})
