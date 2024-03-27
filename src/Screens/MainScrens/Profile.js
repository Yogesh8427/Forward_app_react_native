import { Dimensions, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
import { moderateScale, scale, verticalScale } from '../../styles/scaling'
import imagePath from '../../contants/imagePath'
import navigationString from '../../contants/navigationString'
import { getlogout } from '../../redux/Actions/userloginAction'
const Profile = ({navigation}) => {
  const navigate=(screen)=>{
    navigation.navigate(screen);
  }
  const logout=()=>{
    getlogout(false)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <TouchableOpacity style={styles.button} onPress={()=>navigate(navigationString.EDITPROFILE)}>
        <Image source={imagePath.user}/>
        <Text style={styles.Text}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>navigate(navigationString.CHANGEPASSWORD)}>
        <Image source={imagePath.key}/>
        <Text style={styles.Text}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Image source={imagePath.logout}/>
        <Text style={styles.Text2}>Singout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:24,
    backgroundColor:colors.themcolor
},
heading:{
  marginTop:verticalScale(39.34),
  fontWeight:"600",
  color:colors.heading,
  fontSize:moderateScale(16),
},

Text:{
  textAlign:"center",
  color:colors.heading,
  marginLeft:moderateScale(20),
  fontSize:scale(15)
},
Text2:{
  textAlign:"center",
  color:colors.heading,
  marginLeft:moderateScale(25),
  fontSize:scale(15)
},
button:{
  flexDirection:"row",
  marginTop:verticalScale(40),
}
})