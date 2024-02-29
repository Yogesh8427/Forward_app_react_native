import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
const Search = () => {
  return (
    <View style={styles.container}>
        <Text style={{textAlign:"center",marginTop:"70%",fontSize:100,color:colors.buttoncolor}}>Search</Text>
    </View>
  )
}

export default Search
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