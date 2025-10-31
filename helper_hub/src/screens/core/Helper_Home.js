import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Helper_Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.section1} >
        <TouchableOpacity onPress={() =>{}}>
          <Ionicons name='chevron-back' color={'black'} size={30} />
        </TouchableOpacity>
        <Text style={styles.section1text}>Home</Text>
      </View>
      <View style={styles.section2} >
          <TouchableOpacity 
          style={styles.box} 
          onPress={() =>{navigation.navigate("Appointment_list")}} >
            <Text style={styles.boxText} >Appointment's</Text>
            <Ionicons name='chevron-forward' color={'#000'} size={30} />
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Helper_Home

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  section1: {
    padding:10,
    width: '100%',
    height:70,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    shadowColor:'#D9D9D9',
    shadowOpacity:1,
    backgroundColor:'#fff'
  },
  section1text: {
    fontSize:20,
    fontWeight:'600',
    color:'#000',
    marginTop: 10,
    marginLeft:'35%',
    marginBottom:1
  },
  section2: {
    padding:10,
    width:'100%',
    height:'100%',
  },
  box: {
    width:'100%',
    height:'15%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#D9D9D9',
    borderRadius:15
  },
  boxText: {
    fontSize:20,
    fontWeight:'800',
    color:'#000',
    marginLeft:10
  }
})