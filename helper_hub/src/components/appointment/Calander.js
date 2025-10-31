import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Payment from './Payment';
import {url} from '../../config/env';
import axios from 'axios';

const Calander = ({ navigation }) => {
    const toDate = new Date();
    const userId = axios.get(`${url}/u/:id`);
    const helperId = axios.get(`${url}/h/:id`);
    console.log(userId, helperId);
    // const userId = '68ceb7fe4e19f529041eae01';
    // const helperId = '68cebdd9a2a4bb26957dfa63';
    const [selected, setSelected] = useState(toDate.getFullYear()+"-"+(toDate.getMonth()+1)+'-'+toDate.getDate());
    const [time, setTime] = useState('');
    const times = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "3:00 PM", "4:00 PM"];  
    const bookSend = async ()=>{
        console
        try{
            const res = await axios.post(`${url}/appointments/add`, {
                date: selected,
                time,
                userId,
                helperId
            });
            // console.log(res.data)
            navigation.navigate('BookingDone')
        }catch(err){
            console.log(err);
        }
    }
    const [selectedTimeIdx, setSelectedTimeIdx] = useState(1000);
    return (
        <View style={styles.container}>
            <View>
                <Calendar
                    onDayPress={(day) => {
                        setSelected(day.dateString);
                        // console.log(day.dateString);
                    }}
                    markedDates={{
                        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                    }}
                />
            </View>
            <View style={styles.Time}>
                <Text style={styles.text1}>Available Time Slot</Text>
                <View style={styles.TimeContainer}>
                   {
                     times.map((ele, index)=>{
                        return(
                    <TouchableOpacity
                            key={index}
                        style={[styles.box, , { backgroundColor: selectedTimeIdx == index ? '#000' : "#D9D9D9" }]}
                        onPress={() => {
                            setTime(times[index])
                            setSelectedTimeIdx(index
                            );
                        }}
                    >
                        <Text style={[styles.text2, { color: selectedTimeIdx == index ? '#fff' : "#000" }]}>{ele}</Text>
                    </TouchableOpacity>
                    )
                    })
                   }

                </View>
                <TouchableOpacity
                    style={styles.Bookbutton}
                    onPress={() => { bookSend()}}
                >
                    <Text style={styles.BookText}>Request Now</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Calander

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    Time: {
        width: '100%',
        padding: 10
    },
    text1: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000'
    },
    TimeContainer: {
        marginTop: 20,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },
    box: {
        margin: 10,
        width: '25%',
        height: 40,
        borderRadius: 10,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text2: {
        fontSize: 15,
        fontWeight: '500',
    },
    Bookbutton: {
        width: '100%',
        height: 50,
        backgroundColor: '#373737',
        marginTop: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    BookText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff'
    }

})