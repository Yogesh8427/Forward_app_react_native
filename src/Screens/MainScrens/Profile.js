import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={{textAlign:"center",marginTop:"70%",fontSize:100,color:colors.buttoncolor}}>Profile</Text>
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
Text:{
  textAlign:"center",
  marginTop:"70%",
  fontSize:100,
  color:colors.buttoncolor
}
})