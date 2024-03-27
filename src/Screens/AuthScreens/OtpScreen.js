import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import { React, useEffect, useRef, useState } from 'react'
import colors from '../../styles/colors'
import Backbutton from '../../Components/Backbutton'
import { moderateScale, scale, verticalScale } from '../../styles/scaling'
import Textcon from '../../Components/Textcon'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import navigationString from '../../contants/navigationString'
import { OtpInput } from "react-native-otp-entry";
import { signInWithPhoneNumber } from "@firebase/auth";
import { auth, app } from '../../../firebaseConfig'
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

const OtpScreen = ({ navigation, route }) => {
    const data = route.params;
    const [code, setcode] = useState('');
    const [confirmation, setConfirmation] = useState(null);
    const [timer, setTimer] = useState(15);
    const recaptchaVerifier = useRef(null);
    const checkotp = async (confirmation) => {
        try {
            const userCredential = await confirmation.confirm(code);
            return userCredential;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    const sendOtp = async () => {
        try {
            const newmobile = "+91" + data.mobile;
            const result = await signInWithPhoneNumber(auth, newmobile, recaptchaVerifier.current);
            setConfirmation(result);
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    const navigate = (screen) => {
        checkotp(confirmation).then((userCredential) => {
            if (userCredential) {
                navigation.navigate(screen, data);
            } else {
                alert("is otp field is empty or you entered wrong otp");
            }
        })
    }
    useEffect(() => {
        sendOtp().then((value)=>setConfirmation(value));
        Timer()
    }, [])
    const again_send_otp=()=>{
        setTimer(15);
        sendOtp().then((value)=>setConfirmation(value));
    }
    const Timer = () => {
        setInterval(() => {
            setTimer((timer) => timer - 1);
        }, 1000);
        return  () => clearInterval();
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Backbutton onPress={() => navigation.goBack()} />
                <Textcon heading={`Enter the 6-digit code sent to you at ${route.params.mobile}`} />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.text}>Edit my mobile number</Text>
                </TouchableOpacity >
                <View style={styles.otpcon}>
                    <OtpInput
                        numberOfDigits={6}
                        focusColor="grey"
                        focusStickBlinkingDuration={500}
                        onTextChange={(text) => console.log(text)}
                        onFilled={(text) => setcode(text)}
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
                <FirebaseRecaptchaVerifierModal
                    ref={recaptchaVerifier}
                    firebaseConfig={app.options}
                />
                <KeyboardAvoidingView behavior='position' style={{ marginTop: "110%" }} keyboardVerticalOffset={40}>
                    {timer > 0 ? <Text style={styles.timer}>Resend code in 0:{timer}</Text>
                        : <TouchableOpacity onPress={again_send_otp}>
                            <Text style={{ ...styles.timer, color: colors.singup }}>Resend OTP</Text>
                        </TouchableOpacity>}
                    <Button name="VERIFY" fun={() => navigate(navigationString.SETPASS)} />
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
        width: moderateScale(40),
        marginRight: moderateScale(16),
        height: verticalScale(48),
        backgroundColor: colors.cardbackground,
    },
    inputsContainer: {
        marginTop: verticalScale(32),
        marginLeft: moderateScale(-24),
        justifyContent: 'flex-start'
    },
    pinCodeText: {
        color: colors.discription,
        fontSize: scale(14),
    },
    otpcon: {
        flexDirection: "row"
    },
    timer: {
        color: colors.heading,
        marginBottom: verticalScale(20)
    }
})