import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../screens/core/Profile';
import Helper_Home from '../screens/core/Helper_Home';
import Messages from '../screens/core/Messages';


const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideonKeynbord: true,
    headerShow: false,
    tabBarStyle: {
        Positions: 'absolute',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        elevation: 0,
        height: 60
    }
}

const HelperBottomTab = ({ route }) => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name='Home'
                component={Helper_Home}
                initialParams={route?.params}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? "home" : "home-outline"}
                            size={24}
                            color={focused ? "#87CEEB" : "gray"}
                        />
                    },
                    headerShown: false
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                initialParams={route?.params}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? "person" : "person-outline"}
                            size={24}
                            color={focused ? "#87CEEB" : "gray"}
                        />
                    },
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export default HelperBottomTab

const styles = StyleSheet.create({})