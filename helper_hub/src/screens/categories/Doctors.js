import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
// import Footer from './Footer'

export default function Doctors({ route, navigation } ) {
  const { name } = route.params || {}; // Access route params safely
  console.log(name);
  let arr = [
    { name: "Dr. Androw", prof:"M.B.B.S" ,img: require('../../assets/Images/doctor-2.jpg'), info:"Dr. Andrew is an experienced dentist with over 10 years of practice. He specializes in general dentistry and offers a range of services." },
    { name: "Dr. B.Revati", prof:"Nutrition and Dietetics" ,img: require('../../assets/Images/doctor-B_Revathi.png'),info:"B. Revathi had more than 3.5 years of experience as a consultant dietician. Worked in the best hospitals in Hyderabad. Provides best and healthy life styles diet plans specific to the patients' needs."},
    { name: "Dr. Santosh Gunapu", prof:"M.B.B.S, MS.ENT" ,img: require('../../assets/Images/Doctor-Dr_SanthoshKumar.png'),info:"Dr. Santosh Kumar Gunapu is a skilled ENT surgeon with 8 years of experience, backed by a strong educational background. He earned his MBBS from Siddhartha Medical College and completed his MS in ENT at Andhra Medical College, Government ENT Hospital, Vizag. Dr. Santosh Kumar Gunapu has served as an Associate Professor at SSSMCRI Chennai, where he contributed to medical education and training. Additionally, he worked as a Consultant at SRHC in New Delhi, gaining valuable experience in the field. His expertise and commitment to patient care make him a trusted name in ENT surgery." },
    { name: "Dr.Chandra Shekar", prof:"MBBS, MD-General Medicine, DM-Neurology" ,img: require('../../assets/Images/Doctors/Dr-Chandra-Shekar.png'),info:"Dr. P Chandra Shekar is a renowned Neurologist in Hyderabad working at Prathima Hospital, KAchiguda, Hyderabad. For the past 10+ years, Dr. P Chandra Shekar has worked as a Neuro Physician and gained proficient skills and knowledge in the segments." },
    { name: "Dr. Dhabaleswar Sahoo", prof:"M.B.B.S,MD (GENERAL MEDICINE), DM cardiology" ,img: require('../../assets/Images/Doctors/Dr-Sahoo.png'),info:"Dr. Andrew is an experienced dentist with over 10 years of practice. He specializes in general dentistry and offers a range of services." }
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section1}>
        <TextInput placeholder='Search Doctors' style={styles.input} />
      </View>

      <Text style={styles.text}>List of Doctors</Text>
      {
        arr.map((ele)=>{
          return(
            <Doc vals={ele} navigation={navigation}/>
          )
        })
      }
      
    </ScrollView>
  )
}

const Doc = ({vals, navigation})=>{
  return(
    <View style={styles.section2}>
        <View style={styles.section2view}>
          <View style={styles.section2view1}>
            <Image source={vals.img} style={{ width: '100%', height: '70%' }} />
          </View>
          <View style={styles.section2view2}>
            <View style={styles.section2view2Info}>
              <Text style={styles.section2view2infotext1}>{vals.name}</Text>
              <Text style={styles.section2view2infotext2}>{vals.prof}</Text>
            </View>
            <View style={styles.section2view2details}>
              <Text style={styles.section2view2detailsText}numberOfLines={4} >{vals.info}</Text>
            </View>
            <View style={styles.section2view2Status}>
              <View style={styles.section2view2Status1}>
                <Text style={styles.section2view2Status1text}>Available</Text>
              </View>
              <TouchableOpacity style={styles.section2view2Status2} onPress={() => navigation.navigate('Appointment',{ 
                img: vals.img, 
                name: vals.name,
                prof:vals.prof,
                info: vals.info,
                } )}>
                <Text style={styles.section2view2Status2text}>Book</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    width: '100%',
  },
  section1: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section1text: {
    fontSize: 25,
    fontWeight: '800',
    color: '#000',
  },
  input: {
    marginTop: 15,
    paddingLeft: 15,
    width: '100%',
    height: 60,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    color: '#000',
    fontSize: 20,
    fontWeight: '500'
  },
  section2: {
    padding: 10,
    height: 190,
    marginBottom:10
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    marginLeft: 10,
  },
  section2view: {
    padding: 15,
    flexDirection: 'row',
    height: '100%',
    backgroundColor: '#E0E0E0',
  },
  section2view1: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  section2view2: {
    padding: 10,
    width: '80%',
    height: '100%',
  },
  section2view2Info: {
    marginTop: -10
  },
  section2view2infotext1: {
    width:'100%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  section2view2infotext2: {
    fontSize: 10,
    fontWeight: '800',
    color: '#000',
  },
  section2view2details: {
    marginTop: 10,
    width: '100%',
    height: '45%',
  },
  section2view2detailsText: {
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'justify',
    color: '#000',
  },
  section2view2Status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  section2view2Status1: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
  },
  section2view2Status1text: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '500',
  },
  section2view2Status2: {
    backgroundColor: '#fff',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  section2view2Status2text: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
})
