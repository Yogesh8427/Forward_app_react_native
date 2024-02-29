import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import { moderateScale, scale, verticalScale } from '../styles/scaling'
import imagePath from '../contants/imagePath'
const LogoButton = ({ name, style, fun,logo}) => {
  return (
    <View>
      <TouchableOpacity onPress={fun} style={{ ...styles.button, ...style }}>
        <Image source={logo} style={styles.image}/>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default LogoButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.heading,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: moderateScale(8),
      },
      text: {
        fontSize: scale(14),
        marginVertical: verticalScale(16),
        fontWeight:"bold"
      },
      image:{
        position:"absolute",
        left:moderateScale(16)
      }
})