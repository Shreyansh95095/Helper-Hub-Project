import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'

export default function LoadingPage({ navigation }) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.container1}>
                        <Image source={require('../../assets/App_Logo/AppLogo.jpeg.jpg')} style={{width:300, height:300,  }} />
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("UserAndHelper")} 
                        style={styles.box}
                    >
                        <Text style={styles.text1}>Lets's Go</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 13,
        height: '100%',
        backgroundColor:'#e9fdfc'
    },
    container1: {
        marginTop: '80%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
    },
    container2: {
        marginTop: '80%',
        height: '20%',
        alignItems: 'center',

    },
    box: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#505050',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
})