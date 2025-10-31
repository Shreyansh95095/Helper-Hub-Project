import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PaymentDone from './BookingDone';

function Payment({ navigation }) {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ color: '#000' }}>Payment</Text>
      <TouchableOpacity
        style={{ width: '100%', height: 50, backgroundColor: '#D9D9D9', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
        onPress={() => { navigation.navigate('Booking') }}
      >
        <Text style={{ color: '#000', fontSize: 20, fontWeight: 600 }}>Pay</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({})