import {
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView
} from 'react-native'
import React, { useState } from 'react'
import colors from '../../styles/colors'
import { moderateScale, scale } from '../../styles/scaling'
import Backbutton from '../../Components/Backbutton'
import Textcon from '../../Components/Textcon'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import navigationString from '../../contants/navigationString'

const SetpassScreen = ({ navigation, route }) => {
    const [passshow, setpassshow] = useState(true);
    const [confshow, setconfshow] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('')
    const checkpassword = () => {
        const pattern = /(?=.*[A-Z])(?=.*[a-z])(?=.*[@#%&]).{8,}/g;
        if (!pattern.test(password)) {
            alert("*password should have 8 character 1 uppercase 1 lowercase or also have 1 \'@,#,%,&\' special character")
            return false;
        }else if(confirmPass!=password){
            alert("*Confirm Password Should Be Same as Password Field");
            return false;
        }else{
            const data = { ...route.params, password: password };
            navigate(navigationString.LOCATION,data);
            setPassword("");
            setConfirmPass("");
            return true;
        }
    }
    const navigate = (screen,data) => {
            navigation.navigate(screen, data);
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Backbutton onPress={() => navigate(navigationString.SINGUP)} />
                <Textcon heading="Set Password" discription="Create Secure and unique password" />
                <View>
                    <Input placeholderdata={"Password"} newstyle={{ marginTop: 16 }} password={passshow} setdata={setPassword} />
                    <TouchableOpacity style={{ position: "absolute", right: 16 }}
                        onPress={() => passshow ? setpassshow(false) : setpassshow(true)}>
                        <Text style={{ ...styles.text, top: 33, }}>{passshow ? "Show" : "Hide"}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Input placeholderdata={"Confirm Password"} newstyle={{ marginTop: 16 }} password={confshow} setdata={setConfirmPass}/>
                    <TouchableOpacity style={{ position: "absolute", right: 16 }}
                        onPress={() => confshow ? setconfshow(false) : setconfshow(true)}>
                        <Text style={{ ...styles.text, top: 33, }}>{confshow ? "Show" : "Hide"}</Text>
                    </TouchableOpacity>
                </View>
                <KeyboardAvoidingView behavior='position' style={{ marginTop: "110%" }} keyboardVerticalOffset={40}>
                    <Button name="GET STARTED" fun={() => checkpassword()} />
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SetpassScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.themcolor,
        paddingHorizontal: moderateScale(24)
    },
    text: {
        fontSize: 24,
        color: colors.heading,
        fontSize: scale(14),
        opacity: 0.5
    },
})