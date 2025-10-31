import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    ScrollView,
    Keyboard,
    Alert,
} from 'react-native';
import axios from 'axios';
import { url } from '../../config/env';
import ProfileUploader from '../core/ProfileUploader';

function AccountInfo() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [gender, setGender] = useState('');

    // Replace with your backend URL
    const API_BASE_URL = `${url}`;

    // Fetch user data from the backend on component mount
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Get user email from route params or use a default
                const userEmail = 'shreyansh0142@gmail.com'; // You can make this dynamic
                const response = await axios.get(`${url}/u/${userEmail}`);
                const userData = response.data;
                console.log(response.data)
                setUserName(userData.name || '');
                setEmail(userData.email || '');
                setPhone(userData.phone || '');
                setLocation(userData.location || '');
                setGender(userData.gender || '');
            } catch (error) {
                console.error('Error fetching user data:', error);
                Alert.alert('Error', 'Failed to fetch user data.');
            }
        };

        fetchUserData();
        console.log(url)
    }, []);

    // Handle Save Changes
    const handleSaveChanges = async () => {
        try {
            const updatedUserData = {
                userName,
                email,
                phone,
                location,
                gender,
            };
            await axios.post(`${API_BASE_URL}/u/update-details`, updatedUserData);
            Alert.alert('Success', 'Your details have been updated successfully!');
            Keyboard.dismiss();
        } catch (error) {
            console.error('Error saving user data:', error);
            Alert.alert('Error', 'Failed to save your details. Please try again.');
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.section1}>
                <ProfileUploader />
            </View>
            <View style={styles.section2}>
                <View style={styles.section2View}>
                    <Text style={styles.section2Text}>Name</Text>
                    <View style={styles.section2InputView}>
                        <TextInput
                            style={styles.input}
                            value={userName}
                            onChangeText={setUserName}
                            placeholder="Enter your name"
                        />
                    </View>
                </View>
                <View style={styles.section2View}>
                    <Text style={styles.section2Text}>Email</Text>
                    <View style={styles.section2InputView}>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Enter your email"
                            keyboardType="email-address"
                        />
                    </View>
                </View>
                <View style={styles.section2View}>
                    <Text style={styles.section2Text}>Phone</Text>
                    <View style={styles.section2InputView}>
                        <TextInput
                            style={styles.input}
                            value={phone}
                            onChangeText={setPhone}
                            placeholder="Enter your phone number"
                            keyboardType="phone-pad"
                            maxLength={10}
                        />
                    </View>
                </View>
                <View style={styles.section2View}>
                    <Text style={styles.section2Text}>Location</Text>
                    <View style={styles.section2InputView}>
                        <TextInput
                            style={styles.input}
                            value={location}
                            onChangeText={setLocation}
                            placeholder="Enter your location"
                        />
                    </View>
                </View>
                <View style={styles.section2View}>
                    <Text style={styles.section2Text}>Gender</Text>
                    <View style={styles.section2InputView}>
                        <TextInput
                            style={styles.input}
                            value={gender}
                            onChangeText={setGender}
                            placeholder="Enter your gender"
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.Button} onPress={handleSaveChanges}>
                    <Text style={styles.ButtonText}>Save Changes</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section3}></View>
        </ScrollView>
    );
}

export default AccountInfo;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 10,
        backgroundColor: '#fff',
    },
    section1: {
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    section1Text: {
        color: '#000',
        fontSize: 20,
        fontWeight: '600',
    },
    section2: {
        padding: 10,
        gap: 20,
        justifyContent: 'space-evenly',
    },
    section2View: {
        padding: 5,
    },
    section2Text: {
        fontSize: 16,
        color: '#5A5A5A',
    },
    section2InputView: {
        padding: 10,
        height: 45,
        backgroundColor: '#E2FFFD',
        borderRadius: 10,
        justifyContent: 'center',
    },
    input: {
        color: '#000',
        height: 40,
    },
    section3: {
        marginTop: '20%',
    },
    Button: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#373737',
        borderRadius: 15,
    },
    ButtonText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
    },
});

// import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, Keyboard } from 'react-native'
// import React, { useState } from 'react'

// function AccountInfo() {

//     const [userName, setUserName] = useState('')
//     const [email, setEmail] = useState('')
//     const [phone, setPhone] = useState('')
//     const [location, setLocation] = useState('')
//     const [gender, setGender] = useState('')

//     function handlelChanges() {
//         Keyboard.dismiss();
//         setUserName(userName);
//         setEmail(email);
//         setPhone(phone);
//         setLocation(location);
//         setGender(gender);
//     }

//     return (
//         <ScrollView style={styles.container}>
//             {/* <View > */}
//                 <View style={styles.section1} >
//                     <Text style={styles.section1Text}> Img </Text>
//                 </View>
//                 <View style={styles.section2} >
//                     <View style={styles.section2View}>
//                         <Text style={styles.section2Text} >Name</Text>
//                         <View style={styles.section2InputView}>
//                             <TextInput
//                                 style={{ color: '#000', height: 40 }}
//                                 value={userName}
//                                 onChangeText={text => setUserName(text)}
//                             />
//                         </View>
//                     </View>
//                     <View style={styles.section2View}>
//                         <Text style={styles.section2Text} >Email</Text>
//                         <View style={styles.section2InputView}>
//                             <TextInput
//                                 style={{ color: '#000', height: 40 }}
//                                 inputMode='email'
//                                 value={email}
//                                 onChangeText={text => setEmail(text)}
//                             />
//                         </View>
//                     </View>
//                     <View style={styles.section2View}>
//                         <Text style={styles.section2Text} >Phone</Text>
//                         <View style={styles.section2InputView}>
//                             <TextInput
//                                 style={{ color: '#000', height: 40 }}
//                                 inputMode='numeric' value={phone}
//                                 onChangeText={text => setPhone(text)}
//                                 maxLength={10}
//                             />
//                         </View>
//                     </View>
//                     <View style={styles.section2View}>
//                         <Text style={styles.section2Text} >Location</Text>
//                         <View style={styles.section2InputView}>
//                             <TextInput
//                                 style={{ color: '#000', height: 40 }}
//                                 value={location}
//                                 onChangeText={text => setLocation(text)}
//                             />
//                         </View>
//                     </View>
//                     <View style={styles.section2View}>
//                         <Text style={styles.section2Text} >Gender</Text>
//                         <View style={styles.section2InputView}>
//                             <TextInput
//                                 style={{ color: '#000', height: 40 }}
//                                 value={gender}
//                                 onChangeText={text => setGender(text)}
//                             />
//                         </View>
//                     </View>
//                     <TouchableOpacity
//                     style={styles.Button}
//                     onPress={() => {handlelChanges()}}
//                     >
//                         <Text style={styles.ButtonText}>Save Changes</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <View style={styles.section3} >

//                 </View>
//             {/* </View> */}
//         </ScrollView>
//     )
// }

// export default AccountInfo

// const styles = StyleSheet.create({
//     container: {
//         width: '100%',
//         height: '100%',
//         padding: 10,
//         backgroundColor: '#fff'
//     },
//     section1: {
//         height: '20%',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     section1Text: {
//         color: '#000',
//         fontSize: 20,
//         fontWeight: '600'
//     },
//     section2: {
//         height: '70%',
//         padding: 10,
//         gap: 20,
//         justifyContent: 'space-evenly'
//     },
//     section2View: {
//         padding: 5,
//     },
//     section2Text: {
//         fontSize: 16,
//         color: '#5A5A5A'
//     },
//     section2InputView: {
//         padding: 10,
//         height: 45,
//         backgroundColor: '#E2FFFD',
//         borderRadius: 10,
//         justifyContent: 'center'
//     },
//     section3: {
//         marginTop: '20%'
//     },
//     Button: {
//         width: '100%',
//         height: 50,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#373737',
//         borderRadius: 15
//     },
//     ButtonText: {
//         fontSize: 20,
//         fontWeight: '600',
//         color: '#fff'
//     }
// })