import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import { moderateScale, scale, verticalScale } from '../styles/scaling'

const Button = ({ name, style, fun,textstyle}) => {
  return (
    <TouchableOpacity onPress={fun} style={{ ...styles.button, ...style }}>
      <Text style={{...styles.text,...textstyle}}>{name}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttoncolor,
    borderRadius: moderateScale(8),
    height:verticalScale(48),
    justifyContent:"center"
  },
  text: {
    fontSize: scale(14),
    textAlign:"center",
    color: colors.heading,
  }
})