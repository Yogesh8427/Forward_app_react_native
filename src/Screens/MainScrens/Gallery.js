import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'


const Gallery = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.Text}>Gallery</Text>
    </View>
  )
}

export default Gallery

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