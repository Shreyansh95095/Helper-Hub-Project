import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Messages from '../../screens/core/Messages';
import Home from '../../screens/core/Home';

const Tab = createBottomTabNavigator();

const MyAppointments = () => {
  return (
    <>
      <Tab.Navigator initialRouteName='Home' sceneContainerStyle={{ position: 'relative', bottom: '50%' }} >
        {/* <Tab.Screen name='Home' component={HomeScreen}  /> */}
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='msg' component={Messages} />
      </Tab.Navigator>
    </>
  )
}

export default MyAppointments

const styles = StyleSheet.create({})