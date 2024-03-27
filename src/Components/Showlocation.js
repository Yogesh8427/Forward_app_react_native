import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React, { useState } from 'react'
import { scale, verticalScale } from '../styles/scaling'
import colors from '../styles/colors'
import imagePath from '../contants/imagePath'

const Showlocation = ({loc,image}) => {
    const[clicked,setclicked]=useState(true)
    const push=()=>{
        setclicked(clicked?false:true)
    }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{loc.item.loc}</Text>
      {image&&<TouchableOpacity onPress={push}>
        <Image source={imagePath.tick} style={clicked?{tintColor:colors.cardbackground}:null} />
      </TouchableOpacity>}
    </View>
  )
}

export default Showlocation

const styles = StyleSheet.create({
    container:{
        marginTop:verticalScale(26),
        flexDirection:"row",
       justifyContent:"space-between" 
    },
    text:{
        fontSize:scale(15),
        color:colors.discription
    }
})