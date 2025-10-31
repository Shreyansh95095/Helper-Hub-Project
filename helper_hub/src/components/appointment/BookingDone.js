import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Home from '../../screens/core/Home';

function PaymentDone({ navigation }){
    return (
        <View style={styles.container}>
            <View style={styles.Done}>
                <Fontisto name='check' color='white' size={60} />
            </View>
            <View style={styles.textView}>
                <Text style={styles.text1}>Congratulations!</Text>
                <Text style={styles.text2} >Your Request send Successfully</Text>
            </View>
            <TouchableOpacity 
            style={styles.Button}
            onPress={() => { navigation.navigate('Home')}}
            >
                <Text style={styles.ButtonText} >Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PaymentDone

const styles = StyleSheet.create({
    container: {
        padding:10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    Done: {
        width: '50%',
        height: '25%',
        marginTop: '25%',
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#666666',
        borderRadius: 100
    },
    textView:{
        marginTop:'15%',
    },
    text1: {
        color: '#000',
        fontSize:25,
        fontWeight:'500',
        textAlign:'center'
    },
    text2:{
        color:'gray',
        fontSize:20,
        fontWeight:'400'
    },
    Button:{
        width:'100%',
        height:50,
        marginTop:'70%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#373737',
        borderRadius:15
    },
    ButtonText:{
        fontSize:20,
        fontWeight:'600',
        color:'#fff'
    }
})