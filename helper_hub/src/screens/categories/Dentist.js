import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
// import Footer from './Footer'

export default function Doctors({ route, navigation } ) {
  
  let arr = [
    { name: "Dr.Aman Ahuja", prof:"BDS │ Masters │ Digital Smile Design" ,img: require("../../assets/Images/Dentist/dr-Aman_Ahuja.jpeg"), info:"Dr Aman Ahuja established “COSMODONT INDIA” which is a multi-specialty dental clinic. He is one of the top 10 dentists in India. Dr Aman has been associated with International Implant Foundation, Bourn Hall Hospital,  MS Ramaiah Dental College and VIMHANS in the past." },
    { name: "Dr.Ateksha Khanna", prof:"BDS │ MJDF │ MFDS" ,img: require('../../assets/Images/Dentist/dr-Ateksha_Khanna.jpeg'),info:"Dr Ateksha Bhardwaj Khanna is one of the top Prosthodontist and Endodontist in India. Her specializations include implantology, prosthodontics, endodontics & Restorative Dentistry and Cosmetic Dentistry."},
    { name: "Dr.Rajesh Koppikar", prof:"BDS │ MDS" ,img: require('../../assets/Images/Dentist/dr-Rajesh_Koppikar.jpeg'),info:"Dr Rajesh Kappikar's expertise includes tooth implantation and periodontics. Dr Kappikarhas also worked at Bharati Vidhyapit Dental College and Nair Hospital Dental College as a professor." },
    { name: "Dr.Sarika Solanki", prof:" BDS │ MDS │ MD │ Diploma " ,img: require('../../assets/Images/Dentist/dr-Sarika_Solanki.jpeg'),info:"With 17 years of experience in dental sciences, Dr Sarika Chaudhry Solanki has gained specialization in conservative dentistry and endodontics. She is currently working at Venkateshwar Hospital. She has also worked at Maulana Azad Institute of Dental Science and Safdarjung Hospital. Dr Sarika is also a reputed member of American Association of Endodontics, SOLA, FODI and Indian Dental Association. " },
    { name: "Dr.Uday Mukherjee", prof:"BDS │ MDS │ FDSRCS" ,img: require('../../assets/Images/Dentist/dr-Uday_Mukherjee.jpeg'),info:"Dr Uday Mukherjee is amongst the best dentists in Kolkata, who has 27 years of experience in the dental science department. Dr Mukherjee is a member of FHNO, Indian Dental Association, British Association of Oral & Maxillofacial Surgeons etc." }
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
              <TouchableOpacity style={styles.section2view2Status2} onPress={() => navigation.navigate('Appointment', 
                {
                  img:vals.img,
                  name:vals.name, 
                  info:vals.info,
                  biography:vals.info
                  })}>
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
    width: '25%',
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
