import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import imagePath from '../contants/imagePath'
import colors from '../styles/colors'
import { moderateScale,verticalScale,scale } from '../styles/scaling'

const Card = () => {
    return (
        <View style={styles.card}>
            <Image source={imagePath.person} style={styles.image} />
            <Text style={styles.heading}>Hendrerit vulputate sem</Text>
            <Text style={styles.discription}>Aenean et convallis nulla.Donec in efficiturnisi,et vestibulum quam aenean.</Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.cardbackground,
        width: moderateScale(328),
        height: verticalScale(600),
        marginTop: verticalScale(10),
        marginHorizontal: moderateScale(13),
        borderRadius: moderateScale(16),
        alignSelf: "center"
    },
    image: {
        marginTop: verticalScale(100),
        marginLeft: moderateScale(31),
    },
    heading: {
        color: colors.heading,
        fontSize: scale(22),
        textAlign: "center",
        marginTop: verticalScale(80),
        fontWeight: "500",
    },
    discription: {
        color: colors.discription,
        fontSize: scale(16),
        textAlign: "center",
        marginTop: verticalScale(14),
        marginHorizontal: moderateScale(24),
        lineHeight: verticalScale(22)
    },
})