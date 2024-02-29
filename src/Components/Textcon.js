import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { scale, verticalScale } from '../styles/scaling'
import colors from '../styles/colors'

const Textcon = (props) => {
    return (
        <View style={{...props.style,marginTop: 16 }}>
            <Text style={style.text}>{props.heading}</Text>
            <Text style={style.discription}>{props.discription}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    text: {
        fontSize: scale(24),
        color:colors.heading,
        marginTop: verticalScale(11.5)
    },
    discription: {
        fontSize: scale(15),
        color: colors.discription2,
        lineHeight: 27,
        marginBottom: verticalScale(9),
    }
})
export default Textcon