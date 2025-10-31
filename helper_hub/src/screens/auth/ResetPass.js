import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native'
import axios from 'axios';
import { url } from '../../config/env'

export default function ResetPass({navigation}) {

    const [newPassword, setNewPassword] = useState('');
    const [conformNewPassword, setConformNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    async function handleReset() {
    try {
        // Replace with actual email from logged-in user context / storage
        const email = await axios.get(`${url}/u/:email`) ;

        if (newPassword !== conformNewPassword) {
            Alert.alert("Passwords do not match!");
            return;
        }

        const res = await axios.post(`${url}/u/reset-password`, {
            email,
            newPassword
        });

        if (res.data.status === "failed") {
            Alert.alert(res.data.message);
        } else {
            Alert.alert("Password reset successful!");
            navigation.navigate('Login');
        }
    } catch (err) {
        console.error(err);
        Alert.alert("Reset Password Failed!");
    }
}


    return (
        <SafeAreaView>
            <View style={styles.section1}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Illustration</Text>
            </View>
            <View style={styles.section2}>
                <Text style={styles.text1}>Reset</Text>
                <Text style={styles.text2}>Password?</Text>
                <View style={styles.inputView}>
                    <Text style={{ color: '#000',fontSize:15,fontWeight:'500',paddingLeft:10 }}>New Password</Text>
                    <View style={styles.inputView1}>
                        <TextInput 
                            style={styles.input} 
                            value={newPassword}
                            maxLength={16} 
                            secureTextEntry={true}
                            onChangeText = {(text) => setNewPassword(text)} 
                            autoCapitalize='none' 
                        />
                        <TouchableOpacity onPress={() => { () => setShowPassword(!true) }}>
                            <Text style={styles.text3}>Show Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.inputView}>
                    <Text style={{color:'#000',fontSize:15,fontWeight:'500',paddingLeft:10 }}>Confourm Password</Text>
                    <View style={styles.inputView2}>
                        <TextInput 
                            style={styles.input} 
                            value = {conformNewPassword}
                            maxLength={16} 
                            secureTextEntry={true} 
                            onChangeText = { (text) => setConformNewPassword(text) }
                            autoCapitalize='none' 
                        />
                        <TouchableOpacity onPress={() => { () => setShowPassword(!true) }}>
                            <Text style={styles.text3}>Show Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => { handleReset(), navigation.navigate('Login') }}>
                    <Text style={styles.text4}>Reset Password</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
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
    text2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    inputView: {
        marginTop: 20,
    },
    inputView1:{
        height:50,
        flex:0,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        backgroundColor:'#D9D9D9'
        
    },
    inputView2:{
        height:50,
        flex:0,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        backgroundColor:'#D9D9D9'
    },
    input: {
        width:'50%',
        height:30,
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom:-12,
        color: '#000',
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        marginTop: 50,
        height: 50,
        backgroundColor: '#505050',
        padding: 10,
        borderRadius: 10
    },
    text3: {
        color: '#000',
    },
    text4: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
})
