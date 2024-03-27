import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from 'react-native'
import React, { useState } from 'react'
import Input from '../../Components/Input'
import Textcon from '../../Components/Textcon'
import Button from '../../Components/Button'
import Backbutton from '../../Components/Backbutton'
import colors from '../../styles/colors'
import { scale } from '../../styles/scaling'
import navigationString from '../../contants/navigationString'
import { getlogin } from '../../redux/Actions/userloginAction'
import { db } from '../../../firebaseConfig'
import { doc, getDoc } from "firebase/firestore";
const Login = ({ navigation }) => {
    const [mobile, setmobile] = useState("");
    const [password, setpassword] = useState("");
    const [show, setshow] = useState(true);
    const passwordpatter = /(?=.*[A-Z])(?=.*[a-z])(?=.*[@#%&]).{8,}/g;
    const phonepattern = /^([6,7,8,9][0-9]+)$/g;
    const navigate = (screen) => {
        navigation.navigate(screen)
    }
    const changescreen = async () => {
        if (mobile.length != 10) {
            alert('*Please enter a valid mobile number')
        } else if (!phonepattern.test(mobile)) {
            alert('*first degit should in between\'6,7,8,9\' and also should have 10 digits')
        }
        else if (!passwordpatter.test(password)) {
            alert("*password should have 8 character 1 uppercase 1 lowercase or also have 1 '@,#,%,&' special character")
        }
        else {
            const docRef = doc(db, "users", mobile);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                if (password == docSnap.data().password) {
                    setmobile("");
                    setpassword("");
                    alert("Login Successfully");
                    getlogin(true);
                }else{
                    alert("invalid user");
                }
            } else {
                alert("invalid user");
            }
        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={style.container} >
                <Backbutton onPress={() => navigate(navigationString.LOGINOPTION)} />
                <Textcon heading={"Welcome back!"} discription={"We are happy to see.You can login to continue"} />
                <View>
                    <Input placeholderdata={"Mobile number"} newstyle={{ marginTop: 32 }}
                        keyboardType={"number-pad"} maxLength={10} setdata={setmobile} value={mobile} />
                </View>
                <View>
                    <Input placeholderdata={"Password"} newstyle={{ marginTop: 16 }} value={password} password={show} setdata={setpassword} />
                    <TouchableOpacity style={{ position: "absolute", right: 16 }}
                        onPress={() => show ? setshow(false) : setshow(true)}>
                        <Text style={{ ...style.text, fontSize: scale(14), top: 33, opacity: 0.5 }}>{show ? "Show" : "Hide"}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity style={{ marginTop: 16 }}>
                        <Text style={{ ...style.text, fontSize: scale(13) }}>Use OTP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 16 }}>
                        <Text style={{ ...style.text, fontSize: scale(13), color: colors.singup }}>Forget Password?</Text>
                    </TouchableOpacity>
                </View>
                <KeyboardAvoidingView behavior='position' style={{ marginTop: "90%" }} keyboardVerticalOffset={40}>
                    <Button name="LOGIN" fun={changescreen} />
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: colors.themcolor
    },
    text: {
        fontSize: 24,
        color: colors.heading,
    },
})

export default Login