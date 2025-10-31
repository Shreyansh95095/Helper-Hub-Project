import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'

export default function Categories({ navigation }) {
    const doctorImgs = []
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.section1}>
                    <View style={styles.section1view}>
                        <TextInput placeholder='Search Categories' style={styles.input} />
                    </View>
                </View>
                <View style={styles.section2}>
                    <TouchableOpacity style={styles.section2Contaainer} onPress={() => navigation.navigate("Doctors")}>
                        <View style={styles.section2view}>
                            <View style={styles.section2view1}>
                                <Image source={require("../../assets/Images/doctors-transparent-icon-10.png")} style={{width:'100%', height:'100%', objectFit:'contain'}} />
                            </View>
                            <View style={styles.section2view2}>
                                <Text style={styles.section2text}>Doctors</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.section2Contaainer} onPress={() => navigation.navigate("Dentist")}>
                        <View style={styles.section2view}>
                            <View style={styles.section2view1}>
                            <Image source={require("../../assets/Images/Dentist-Profile.png")} style={{width:'100%', height:'100%', objectFit:'contain'}} />
                            </View>
                            <View style={styles.section2view2}>
                                <Text style={styles.section2text}>Dentist</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.section2Contaainer} onPress={() => navigation.navigate("Doctors")}>
                        <View style={styles.section2view}>
                            <View style={styles.section2view1}>
                            <Image source={require("../../assets/Images/HairDresser-Profile.png")} style={{width:'100%', height:'100%', objectFit:'contain'}} />
                            </View>
                            <View style={styles.section2view2}>
                                <Text style={styles.section2text}>HairDresser</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.section2Contaainer} onPress={() => navigation.navigate("Doctors")}>
                        <View style={styles.section2view}>
                            <View style={styles.section2view1}>
                            <Image source={require("../../assets/Images/Plumber-Profile.png")} style={{width:'100%', height:'100%', objectFit:'contain'}} />
                            </View>
                            <View style={styles.section2view2}>
                                <Text style={styles.section2text}>Plumber</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={styles.section2Contaainer} onPress={() => navigation.navigate("Doctors")}>
                        <View style={styles.section2view}>
                            <View style={styles.section2view1}></View>
                            <View style={styles.section2view2}>
                                <Text style={styles.section2text}>Elecctriation</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.section2Contaainer} onPress={() => navigation.navigate("Doctors")}>
                        <View style={styles.section2view}>
                            <View style={styles.section2view1}></View>
                            <View style={styles.section2view2}>
                                <Text style={styles.section2text}>Mechanic</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.section2Contaainer} onPress={() => navigation.navigate("Doctors")}>
                        <View style={styles.section2view}>
                            <View style={styles.section2view1}></View>
                            <View style={styles.section2view2}>
                                <Text style={styles.section2text}>Tutor</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.section2Contaainer} onPress={() => navigation.navigate("Doctors")}>
                        <View style={styles.section2view}>
                            <View style={styles.section2view1}></View>
                            <View style={styles.section2view2}>
                                <Text style={styles.section2text}>Nutrition</Text>
                            </View>
                        </View>
                    </TouchableOpacity> */}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        height: '100%',
        width: '100%',
    },
    section1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    section1text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    section1view: {
        width: '100%',
        height: 50,
        marginTop: 20,
        paddingLeft: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
    },
    input: {
        width: '100%',
        height: '100%',
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
    },
    section2: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    section2Contaainer: {
        width: '100%',
    },
    section2view: {
        width: '100%',
        height: 200,
        marginBottom: 40,
        backgroundColor: '#A7A7A7',
        // borderWidth: 1,
        borderColor: '#000',
        flexDirection: 'column',
    },
    section2view1: {
        height: '70%',
    },
    section2view2: {
        padding: 10,
        height: '30%',
        backgroundColor: '#EBEBEB',
    },
    section2text: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
    },
})
