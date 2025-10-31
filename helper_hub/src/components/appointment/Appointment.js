import React, { useState } from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Appointment({ route, navigation }) {
    const { img, name, info, biography, prof } = route.params || {};

    const [selectedIndex, setSelectedIndex] = useState(null);

    const toggleSelection = (index) => {
        setSelectedIndex(index === selectedIndex ? null : index);
    };


    return (
        <View style={styles.container}>
            <View style={styles.section1}>
                <View style={styles.image}>
                    <Image source={img} style={{ width: '100%', height: '100%' }} />
                </View>
                <View style={styles.Details}>
                    <Text style={styles.section1text1}>{name}</Text>
                    <Text style={styles.section1text2}>{info}</Text>
                    <View style={styles.section1Icon}>
                        <Ionicons name='star' color={'black'} size={20} />
                        <Ionicons name='star' color={'black'} size={20} />
                        <Ionicons name='star' color={'black'} size={20} />
                        <Ionicons name='star' color={'black'} size={20} />
                        <Ionicons name='star-half' color={'black'} size={20} />
                    </View>
                </View>
            </View>
            <View style={styles.section2}>
                <View style={styles.section2View1}>
                    <Text style={styles.section2text1}>Biography</Text>
                    <Text style={styles.section2text2}>I am an experienced dentist with over 10 years of practice. I am specialized in general dentistry and I will offer a range of services.</Text>
                </View>
                <View style={styles.section2View2}>
                    <TouchableOpacity style={[styles.fav,]}
                        onPress={() => toggleSelection(0)}
                    >
                        <AntDesign name='heart' size={30} color={selectedIndex === 0 ? 'red' : 'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Date And Time")}>
                        <Text style={styles.buttonText}>Request for Appointment</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 15,
    },
    section1: {
        marginTop: 30,
        width: '100%',
        height: '30%',
        padding: 15,
        flexDirection: 'row',
    },
    image: {
        width: '40%',
        height: '100%',
        backgroundColor: '#D9D9D9',
        marginBottom: '-20%'
    },
    Details: {
        width: '60%',
        paddingHorizontal: 10,
        gap: 10,
    },
    section1text1: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000'
    },
    section1text2: {
        fontSize: 13,
        color: 'gray',
        fontWeight: '400'
    },
    section1Icon: {
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    section2: {
        width: '100%',
        height: '65%',
        marginTop: 25
    },
    section2View1: {
        height: 150
    },
    section2text1: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000'
    },
    section2text2: {
        width: '80%',
        fontSize: 13,
        color: 'gray',
        fontWeight: '400',
        marginTop: 30
    },
    section2View2: {
        width: '100%',
        height: '70%',
        flex: 1,
        flexDirection: 'row',
        gap: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: 30
    },

    fav: {
        width: '15%',
        height: '17%',
        borderRadius: 100,
        backgroundColor: '#373737',
        borderWidth: 2,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: '80%',
        height: '17%',
        borderRadius: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#373737'
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#fff'
    }
})


