import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView } from 'react-native'
import Backbutton from '../../Components/Backbutton'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import colors from '../../styles/colors'
import { moderateScale, verticalScale, scale } from '../../styles/scaling'
import React from 'react'
import imagePath from '../../contants/imagePath'

const EditProfile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topcon}>
                <Backbutton onPress={() => navigation.goBack()} />
                <Text style={styles.text2}>Edit Profile</Text>
            </View>
            <TouchableOpacity style={styles.editimage}>
                <Image source={imagePath.dummyprofile} style={styles.image} />
                <Image source={imagePath.edit} style={styles.editbutton} />
            </TouchableOpacity>
            <View style={styles.firstname}>
                <Input placeholderdata={"First name"} newstyle={styles.input} />
                <Input placeholderdata={"Last name"} newstyle={styles.input} />
            </View>
            <Input placeholderdata={"Email"} newstyle={styles.inputmargen} />
            <Input placeholderdata={"Mobile number"} newstyle={styles.inputmargen}
                keyboardType={"number-pad"} maxLength={10} />
             <KeyboardAvoidingView style={{marginTop:"80%"}} behavior='position' keyboardVerticalOffset={6}>
                <Button name={"SAVE CHANGES"} />
             </KeyboardAvoidingView>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.themcolor,
        paddingHorizontal: moderateScale(24)
    },
    text2: {
        color: colors.heading,
        fontWeight: "600",
        marginTop: verticalScale(52.34),
        marginLeft: moderateScale(16),
        fontSize: scale(16),
    }, topcon: {
        flexDirection: "row",
        marginBottom: verticalScale(30)
    },
    input: {
        width: "48%",
    },
    inputmargen:{
        marginTop: 16
    },
    image: {
        width: moderateScale(80),
        height: verticalScale(80),
        borderRadius: moderateScale(50),
    },
    editbutton: {
        position: "absolute",
        top: verticalScale(62),
        left: moderateScale(60),
    },
    editimage: {
        justifyContent: "center",
        alignSelf: "center"
    },
    firstname: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 32
    }
})