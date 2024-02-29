import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import colors from '../styles/colors'
import { moderateScale, verticalScale } from '../styles/scaling'

const Input = (props) => {
    return (
        <TextInput placeholder={props.placeholderdata} 
        style={{ ...style.input, ...props.newstyle }} 
        placeholderTextColor={colors.heading} secureTextEntry={props.password} {...props} onChangeText={props.setdata}/>
    )
}

const style = StyleSheet.create({
    input: {
        backgroundColor: colors.cardbackground,
        color: colors.heading,
        height: verticalScale(48),
        borderRadius: moderateScale(8),
        paddingHorizontal: moderateScale(16),
        opacity:0.5
    }
})
export default Input