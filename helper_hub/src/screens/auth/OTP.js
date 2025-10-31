import React, { Component, useState, useRef } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native'
import axios from 'axios'
import { url } from '../../config/env'

export default function OTP({ route, navigation }) {
    const { email } = route.params || {};
    const [otp, setOtp] = useState(['', '', '', '', '', '']); // 6-digit OTP
    const [isVerifying, setIsVerifying] = useState(false);
    const [isResending, setIsResending] = useState(false);

    // Create refs for each OTP input field
    const inputRefs = useRef([null, null, null, null, null, null]);

    const handleOtpChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Auto-focus to next input if current input is filled
        if (text && index < 5) {
            // Focus the next input
            inputRefs.current[index + 1]?.focus();
        }
    };

    // Handle key press events for backspace functionality
    const handleKeyPress = (e, index) => {
        // If backspace is pressed and current field is empty, focus previous field
        if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const verifyOtp = async () => {
        const otpString = otp.join('');
        if (otpString.length !== 6) {
            Alert.alert('Error', 'Please enter the complete 6-digit OTP');
            return;
        }

        setIsVerifying(true);

        try {
            const res = await axios.post(`${url}/otp/verify-otp`, {
                email: email,
                otp: otpString
            }, { timeout: 10000 });

            setIsVerifying(false);

            if (res.data.status === 'ok') {
                navigation.navigate('ResetPass', { email: email });
            } else {
                Alert.alert('Invalid OTP', 'Please check and try again.');
            }
        } catch (err) {
            setIsVerifying(false);
            console.log(err);
        }
    };

    const resendOtp = async () => {
        setIsResending(true);

        try {
            const res = await axios.post(`${url}/otp/send-otp`, { email }, { timeout: 10000 });
            setIsResending(false);

            if (res.data.status === 'ok') {
                // Reset OTP input fields
                setOtp(['', '', '', '', '', '']);
                Alert.alert('OTP Sent', 'A new OTP has been sent to your email.');
            } else {
                Alert.alert('Error', 'Failed to resend OTP.');
            }
        } catch (err) {
            setIsResending(false);
            console.log(err);
        }
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.section1}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Illustration</Text>
                </View>
                <View style={styles.section2}>
                    <Text style={styles.text1}>Enter OTP</Text>
                    <Text style={styles.text2}>Enter the OTP sent to your email address</Text>
                    <View style={styles.boxContainer}>
                        {otp.map((digit, index) => (
                            <View key={index} style={styles.box}>
                                <TextInput
                                    ref={el => inputRefs.current[index] = el}
                                    inputMode='numeric'
                                    maxLength={1}
                                    style={styles.text3}
                                    value={digit}
                                    onChangeText={(text) => handleOtpChange(text, index)}
                                    onKeyPress={(e) => handleKeyPress(e, index)}
                                    keyboardType="number-pad"
                                />
                            </View>
                        ))}
                    </View>
                    <TouchableOpacity
                        onPress={resendOtp}
                        disabled={isResending || isVerifying}
                    >
                        {isResending ? (
                            <Text style={[styles.text4, { opacity: 0.7 }]}>Sending...</Text>
                        ) : (
                            <Text style={styles.text4}>Resend OTP</Text>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={verifyOtp}
                        style={[styles.button, (isVerifying || isResending) && { opacity: 0.7 }]}
                        disabled={isVerifying || isResending}
                    >
                        {isVerifying ? (
                            <ActivityIndicator color="#fff" size="small" />
                        ) : (
                            <Text style={styles.text5}>Submit</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%'
    },
    section1: {
        padding: 20,
        flex: 0,
        backgroundColor: '#D9D9D9',
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    section2: {
        padding: 20,
        flex: 0,
        backgroundColor: '#fff',
        width: '100%',
        height: '50%'
    },
    text1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    text2: {
        fontSize: 15,
        color: '#000',
        marginTop: 15
    },
    boxContainer: {
        paddingTop: 20,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    box: {
        padding: 10,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 80,
        backgroundColor: '#D9D9D9',
        margin: 5,
        borderRadius: 6
    },
    text3: {
        paddingTop: 15,
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text4: {
        paddingTop: 15,
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        marginTop: 30,
        height: 50,
        backgroundColor: '#505050',
        padding: 10,
        borderRadius: 10
    },
    text5: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
})