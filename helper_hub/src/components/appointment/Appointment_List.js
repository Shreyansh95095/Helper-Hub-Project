import { Alert, Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import { url } from '../../config/env'



const Appointment_List = ({ route, navigation }) => {
    const [appointData, setAppointData] = useState([]);
    const helperId = "68ceb7fe4e19f529041eae01";
    const getData = async () => {
        try {
            console.log('Senfing data')
            const res = await axios.get(`${url}/appointments/get/${helperId}`);
            console.log(res.data); // Handle response here
            setAppointData(res.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    const Card = ({ vals, navigation }) => {
        console.log("Values ", vals.approve)
        const approve = async (id) => {
            try {
                const res = await axios.post(`${url}/appointments/approve/${id}`, {
                    state: true
                });
                Alert.alert("Approved Successfully")
            } catch (err) {
                console.log(err);
                Alert.alert("Failed to approve");
            }
            getData();
        }
        const reject = async (id) => {
            try {
                const res = await axios.post(`${url}/appointments/approve/${id}`, {
                    state: false
                });
                Alert.alert("Rejected Successfully")
            } catch (err) {
                console.log(err);
                Alert.alert("Failed to approve");
            }
            getData();
        }
        console.log(vals)
        return (
            <View style={styles.section2}>
                <View style={styles.card}>
                    <Text style={styles.text}>{vals.userId.name}</Text>
                    <View>
                        <Text style={styles.text}>{vals.time}</Text>
                        <Text style={styles.text}>{vals.date}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={{ flex: 1, marginRight: 5 }}>
                            <Button
                                title="Approve"
                                onPress={() => approve(vals._id)}
                                color={vals.approve ? "#aaa" : "#4CAF50"}
                                disabled={vals.approve}
                            />
                        </View>
                        <View style={{ flex: 1, marginLeft: 5 }}>
                            <Button
                                title="Reject"
                                onPress={() => reject(vals._id)}
                                color={!vals.approve ? "#aaa" : "#F44336"}
                                disabled={!vals.approve}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.section1} >
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Ionicons name='chevron-back' color={'black'} size={30} />
                </TouchableOpacity>
                <Text style={styles.section1text}>Home</Text>
            </View>
            {
                appointData.map((ele, index) => {
                    return (
                        <Card key={index} vals={ele} navigation={navigation} />
                    )
                })
            }
        </View>
    )
}


export default Appointment_List

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    section1: {
        padding: 10,
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        shadowColor: '#D9D9D9',
        shadowOpacity: 1,
        backgroundColor: '#fff'
    },
    section1text: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
        marginHorizontal: '33%'
    },
    section2: {
        padding: 10,
        width: '100%',
    },
    card: {
        width: '100%',
        height: 60,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
    }
})