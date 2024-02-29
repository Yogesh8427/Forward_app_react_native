import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'


const Nodification = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={{textAlign:"center",marginTop:"70%",fontSize:70,color:colors.buttoncolor}}>Notification</Text>
    </View>
  )
}

export default Nodification

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