import { StyleSheet, Text, View } from 'react-native'
import React, { Profiler } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/core/Home';
// import { Positions } from 'react-native-calendars/src/expandableCalendar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Messages from '../screens/core/Messages';
import Profile from '../screens/core/Profile';
import Calander from '../components/appointment/Calander';

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

function BottomTab({ route }) {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name='Home'
                component={Home}
                initialParams={route.params}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? "home" : "home-outline"}
                            size={24}
                            color={focused ? "#87CEEB" : "gray"}
                        />
                    }
                }}
            />
            {/* <Tab.Screen
                name='Messages'
                component={Messages}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? "chatbox-sharp" : "chatbox-outline"}
                            size={24}
                            color={focused ? "#87CEEB" : "gray"}
                        />
                    }
                }}
            /> */}
            <Tab.Screen
                name='DateandTime'
                component={Calander}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? "calendar" : "calendar-outline"}
                            size={24}
                            color={focused ? "#87CEEB" : "gray"}
                        />
                    }
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? "person" : "person-outline"}
                            size={24}
                            color={focused ? "#87CEEB" : "gray"}
                        />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})