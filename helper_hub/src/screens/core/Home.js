import React, { Component, useEffect, useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyAppointments from '../../components/appointment/MyAppointments';
import Messages from './Messages';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { url } from '../../config/env'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
export default function Home({ navigation, route }) {

  const [allUserData, setAllUserData] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [userName, setUserName] = useState('');
  const userId = "673ecb845e0bb0e58ec7f063";
  const userAllData = route.params?.userAllData;


  let arr = [
    { name: "Dr. Androw", prof: "M.B.B.S", img: require('../../assets/Images/doctor-2.jpg'), info: "Dr. Andrew is an experienced dentist with over 10 years of practice. He specializes in general dentistry and offers a range of services." },
    { name: "Dr. B.Revati", prof: "Nutrition and Dietetics", img: require('../../assets/Images/doctor-B_Revathi.png'), info: "B. Revathi had more than 3.5 years of experience as a consultant dietician. Worked in the best hospitals in Hyderabad. Provides best and healthy life styles diet plans specific to the patients' needs." },
    { name: "Dr. Santosh Gunapu", prof: "M.B.B.S, MS.ENT", img: require('../../assets/Images/Doctor-Dr_SanthoshKumar.png'), info: "Dr. Santosh Kumar Gunapu is a skilled ENT surgeon with 8 years of experience, backed by a strong educational background. He earned his MBBS from Siddhartha Medical College and completed his MS in ENT at Andhra Medical College, Government ENT Hospital, Vizag. Dr. Santosh Kumar Gunapu has served as an Associate Professor at SSSMCRI Chennai, where he contributed to medical education and training. Additionally, he worked as a Consultant at SRHC in New Delhi, gaining valuable experience in the field. His expertise and commitment to patient care make him a trusted name in ENT surgery." },
    { name: "Dr.Chandra Shekar", prof: "MBBS, MD-General Medicine, DM-Neurology", img: require('../../assets/Images/Doctors/Dr-Chandra-Shekar.png'), info: "Dr. P Chandra Shekar is a renowned Neurologist in Hyderabad working at Prathima Hospital, KAchiguda, Hyderabad. For the past 10+ years, Dr. P Chandra Shekar has worked as a Neuro Physician and gained proficient skills and knowledge in the segments." },
    { name: "Dr. Dhabaleswar Sahoo", prof: "M.B.B.S, MD, DM cardiology", img: require('../../assets/Images/Doctors/Dr-Sahoo.png'), info: "Dr. Andrew is an experienced dentist with over 10 years of practice. He specializes in general dentistry and offers a range of services." },
  ];

  let Arr = [
    { name: "Dr. Androw", prof: "M.B.B.S", img: require('../../assets/Images/doctor-2.jpg'), info: "Dr. Andrew is an experienced dentist with over 10 years of practice. He specializes in general dentistry and offers a range of services." },
    { name: "Dr. B.Revati", prof: "Nutrition and Dietetics", img: require('../../assets/Images/doctor-B_Revathi.png'), info: "B. Revathi had more than 3.5 years of experience as a consultant dietician. Worked in the best hospitals in Hyderabad. Provides best and healthy life styles diet plans specific to the patients' needs." },
  ];

  const getUserData = async () => {
    console.log(userAllData);
    try {
      if (!userAllData) {
        console.error('No user email provided');
        return;
      }
      const res = await axios.get(`${url}/u/${userAllData.email}`);
      console.log(res);
      setUserName(res.data.name || 'User');
    } catch (err) {
      console.error('Error fetching user data:', err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.section1}>
            <TouchableOpacity
              style={styles.user}
              onPress={() => { navigation.navigate('About') }}
            >
              <View style={styles.Userimg}>
                <Image
                  source={require("../../assets/Images/UserProfile.jpg")}
                  style={{ width: 66, height: 66, overflow: "hidden" }}
                />
              </View>
              <View style={{ width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.username}>{userName}</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notifications')}
                >
                  <Ionicons name='notifications' color={'black'} size={30} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.section2}>
            <View style={styles.search}>
              <TextInput
                style={{ color: '#000', fontSize: 15, width: '90%' }}
                placeholder='Search'
                placeholderTextColor={"#707070"}
                value={searchQuery}
              // onChangeText={handleSearch}
              />
              <TouchableOpacity>
                <Ionicons name='search' color={'#000'} size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.section3}>
            <View>
              <Text style={styles.section3text1}>Looking For</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View ><Text style={styles.section3text2}>More</Text></View>
            </TouchableOpacity>
          </View>
          <View style={styles.section4}>
            <TouchableOpacity
              style={styles.section4view}
              onPress={() => navigation.navigate("Doctors")}
            >
              <View style={styles.section4viewimg}>
                <Image
                  source={require("../../assets/Images/doctors-transparent-icon-10.png")}
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
              <Text style={styles.section4viewtext}>Doctor</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.section4view}
              onPress={() => navigation.navigate("Dentist")}
            >
              <View style={styles.section4viewimg}>
                <Image
                  source={require("../../assets/Images/Dentist-Profile.png")}
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
              <Text style={styles.section4viewtext}>Dentist</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.section4view}
              onPress={() => navigation.navigate("HairDresser")}
            >
              <View style={styles.section4viewimg}>
                <Image
                  source={require("../../assets/Images/HairDresser-Profile.png")}
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
              <Text style={styles.section4viewtext}>HairDresser</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.section4view}
              onPress={() => navigation.navigate("Plumber")}
            >
              <View style={styles.section4viewimg}>
                <Image
                  source={require("../../assets/Images/Plumber-Profile.png")}
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
              <Text style={styles.section4viewtext}>Plumber</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section5}>
            <Text style={styles.section5text}>Popular</Text>
            <ScrollView horizontal={true}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {
                  arr.map((ele) => {
                    return (
                      <List vals={ele} navigation={navigation} key={ele.name} />
                    )
                  })
                }
              </View>
            </ScrollView>
          </View>
          <ScrollView>
            <Text style={styles.section6text}>List of more popular Helper's</Text>
            {
              Arr.map((ele) => {
                return (
                  <Doc vals={ele} navigation={navigation} key={ele.name} />
                )
              })
            }
          </ScrollView>
        </View>
      </ScrollView>

    </>
  )
}

const List = ({ vals, navigation }) => {
  return (
    <View style={styles.section5view}>
      <View style={styles.section5viewinfo}>
        <View style={styles.section5viewimg1}>
          <Image source={vals.img} style={{ width: '100%', height: '100%' }} />
        </View>
        <View style={styles.section5viewtext}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>{vals.name}</Text>
          <Text style={{ fontSize: 13, color: '#fff' }}>{vals.prof}</Text>
        </View>
      </View>
      <View style={styles.section5view1}>
        <Text numberOfLines={3} style={{ fontSize: 13, fontWeight: 'bold', color: '#fff' }}>{vals.info}</Text>
      </View>
      <View style={styles.section5view2}>
        <View style={styles.section5view2Icon}>
          <Ionicons name='star' color={'yellow'} size={20} />
          <Ionicons name='star' color={'yellow'} size={20} />
          <Ionicons name='star' color={'yellow'} size={20} />
          <Ionicons name='star' color={'yellow'} size={20} />
          <Ionicons name='star-half' color={'yellow'} size={20} />
        </View>
        <TouchableOpacity style={styles.section5view2btn}
          onPress={() => navigation.navigate('Appointment',
            {
              img: vals.img,
              name: vals.name,
              prof: vals.prof,
              info: vals.info,
            }
          )}
        >
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#011627' }}>Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Doc = ({ vals, navigation }) => {
  return (
    <View style={styles.section6}>
      <View style={styles.section6view}>
        <View style={styles.section6view1}>
          <Image source={vals.img} style={{ width: '100%', height: '70%' }} />
        </View>
        <View style={styles.section6view2}>
          <View style={styles.section6view2Info}>
            <Text style={styles.section6view2infotext1}>{vals.name}</Text>
            <Text style={styles.section6view2infotext2}>{vals.prof}</Text>
          </View>
          <View style={styles.section6view2details}>
            <Text style={styles.section6view2detailsText} numberOfLines={4} >{vals.info}</Text>
          </View>
          <View style={styles.section6view2Status}>
            <View style={styles.section6view2Status1}>
              <Text style={styles.section6view2Status1text}>Available</Text>
            </View>
            <TouchableOpacity style={styles.section6view2Status2}
              onPress={() => navigation.navigate('Appointment',
                {
                  img: vals.img,
                  name: vals.name,
                  prof: vals.prof,
                  info: vals.info,
                }
              )}
            >
              <Text style={styles.section6view2Status2text}>Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%'
  },
  section1: {
    width: '100%',
    height: 50
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  Userimg: {
    width: 66,
    height: 66,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    overflow: 'hidden'
  },
  username: {
    marginLeft: 10,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold'
  },
  section2: {
    marginTop: 45,
    width: '100%',
    backgroundColor: '#D9D9D9',
    height: 50,
    borderRadius: 10
  },
  search: {
    paddingHorizontal: 15,
    width: '100%',
    height: 50,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  searchtext: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  resultsContainer: {
    padding: 10,
  },
  resultItem: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f5f5f5',
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  resultImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  resultText: {
    flex: 1,
  },
  resultName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultProfession: {
    fontSize: 14,
    color: '#707070',
  },
  resultInfo: {
    fontSize: 12,
    color: '#707070',
  },
  noResultsText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#707070',
  },
  section3: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  section3text1: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
    color: '#000'
  },
  section3text2: {
    fontSize: 20,
    marginTop: 20,
    marginRight: 10,
    color: '#011627'
  },
  section4: {
    width: '100%',
    flex: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10
  },
  section4view: {
    padding: 10,
    width: '25%',
    height: 100,
    borderColor: '#D9D9D9',
    borderRadius: 10
  },
  section4viewimg: {
    width: '100%',
    height: '100%',
    backgroundColor: '#D9D9D9'
  },
  section4viewtext: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 10,
    color: '#000'
  },
  section5: {
    padding: 10,
    marginTop: 20,
    width: '100%',
  },
  section5text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000'
  },
  section5view: {
    padding: 10,
    marginTop: 20,
    marginRight: 20,
    width: 319,
    height: '90%',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    backgroundColor: '#525252',
    color: '#fff'
  },
  section5viewinfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  section5viewimg1: {
    width: 41,
    height: 41,
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 50,
    overflow: 'hidden'
  },
  section5viewtext: {
    marginLeft: 10
  },
  section5view1: {
    marginTop: 10
  },
  section5view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  section5view2Icon: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  section5view2btn: {
    padding: 10,
    width: 100,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10
  },
  section6: {
    padding: 10,
    height: '40%',
    marginTop: 10
  },
  section6text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    marginLeft: 10,
  },
  section6view: {
    marginTop: 10,
    padding: 15,
    flexDirection: 'row',
    height: '100%',
    backgroundColor: '#E0E0E0',
  },
  section6view1: {
    width: '20%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center'
  },
  section6view2: {
    padding: 10,
    width: '80%',
    height: '100%',
  },
  section6view2Info: {
    marginTop: -10
  },
  section6view2infotext1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  section6view2infotext2: {
    fontSize: 10,
    fontWeight: '800',
    color: '#000',
  },
  section6view2details: {
    marginTop: 10,
    width: '100%',
  },
  section6view2detailsText: {
    fontSize: 12,
    fontWeight: '900',
    textAlign: 'justify',
    color: '#000',
  },
  section6view2Status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  section6view2Status1: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
  },
  section6view2Status1text: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '500',
  },
  section6view2Status2: {
    backgroundColor: '#fff',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  section6view2Status2text: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
})