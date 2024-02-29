import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
import Backbutton from '../../Components/Backbutton'
import { moderateScale, scale, verticalScale } from '../../styles/scaling'
import Textcon from '../../Components/Textcon'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import navigationString from '../../contants/navigationString'
import { OtpInput } from "react-native-otp-entry";

const OtpScreen = ({ navigation }) => {
    const navigate=(screen)=>{
        navigation.navigate(screen);
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Backbutton onPress={() => navigation.goBack()} />
                <Textcon heading="Enter the 4-digit code sent to you at 8645676787" />
                <TouchableOpacity>
                    <Text style={styles.text}>Edit my mobile number</Text>
                </TouchableOpacity>
                <View style={styles.otpcon}>
                    <OtpInput
                        numberOfDigits={4}
                        focusColor="grey"
                        focusStickBlinkingDuration={500}
                        onTextChange={(text) => console.log(text)}
                        onFilled={(text) => console.log(`OTP is ${text}`)}
                        theme={{
                            containerStyle: styles.container,
                            inputsContainerStyle: styles.inputsContainer,
                            pinCodeContainerStyle: styles.pinCodeContainer,
                            pinCodeTextStyle: styles.pinCodeText,
                            focusStickStyle: styles.focusStick,
                            focusedPinCodeContainerStyle: styles.activePinCodeContainer
                        }}
                    />
                </View>
                <KeyboardAvoidingView behavior='position' style={{ marginTop: "110%" }} keyboardVerticalOffset={40}>
                    <Text style={styles.timer}>Resend code in 0:14</Text>
                    <Button name="VERIFY" fun={() =>navigate(navigationString.SETPASS)} />
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default OtpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.themcolor,
        paddingHorizontal: moderateScale(25)
    },
    text: {
        marginTop: verticalScale(-10),
        color: colors.singup,
        fontSize: scale(15)
    },
    pinCodeContainer: {
        borderColor: "transparent",
        textAlign: "center",
        width:moderateScale(40),
        marginRight:moderateScale(16),
        height:verticalScale(48),
        backgroundColor: colors.cardbackground,
    },
    inputsContainer:{
        marginTop: verticalScale(32),
        marginLeft:moderateScale(-24),
        justifyContent:'flex-start'
    },
    pinCodeText:{
        color:colors.discription,
        fontSize:scale(14),
    },
    otpcon: {
        flexDirection: "row"
    },
    timer: {
        color: colors.heading,
        marginBottom: verticalScale(20)
    }
})