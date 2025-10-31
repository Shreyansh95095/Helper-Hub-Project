import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

const UserAndHelper = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.Text} >
                <Text style={styles.Text1} >HELPER'S</Text>
                <Text style={styles.Text2} >HUB</Text>
            </View>
            <View style={styles.ButtonView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={styles.Button}
                >
                    <Text style={styles.ButtonText} >User Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Helper_Login")}
                    style={styles.Button}
                >
                    <Text style={styles.ButtonText} >Helper Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UserAndHelper

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor:'#e9fdfc',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text: {
        width:'100%',
        height:'80%',
        alignItems:'center',
        justifyContent:'center',
    },
    Text1: {
        fontSize:50,
        color:'#000',
    },
    Text2: {
        fontSize:50,
        color:'#000',
    },
    ButtonView:{
        width:'100%',
        height:'20%',
    },
    Button: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        borderRadius: 10,
        marginTop: 15
    },
    ButtonText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff'
    }
})