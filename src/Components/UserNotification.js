import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import imagePath from '../contants/imagePath'
import { moderateScale,verticalScale } from '../styles/scaling'
import colors from '../styles/colors'
const UserNotification = (data) => {
    const user= data.data
  return (
    <View style={styles.container}>
      <Image source={user.userimage} style={styles.image}></Image>
      <View style={styles.textcon}>
        <View style={styles.textContainer}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={{...styles.username,color:colors.heading}}> Addded a new post.</Text>
        </View>
        <Text style={styles.uplode}>{user.uplodetime}</Text>
      </View>
    </View>
  )
}

export default UserNotification

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:'center',
    },
    image: {
        width: moderateScale(40),
        height: verticalScale(40),
        borderRadius: moderateScale(50),
        marginTop: verticalScale(3),
    },
    textContainer:{
        flexDirection:"row",
    },
    username:{
        color:"red",
        fontSize:moderateScale(16),
        fontWeight:"500",
    },
    textcon:{
        marginLeft:moderateScale(16),
        marginTop:verticalScale(16),
        borderBottomWidth:0.5,
        paddingBottom:moderateScale(16),
        borderColor:colors.discription,
        width:"100%"
    },
    uplode:{
        color:colors.discription,
        fontWeight:"500",
    }
})