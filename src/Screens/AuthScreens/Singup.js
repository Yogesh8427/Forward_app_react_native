import {
    StyleSheet,
    View,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from 'react-native'
import { React, useState, useRef } from 'react'
import colors from '../../styles/colors'
import Textcon from '../../Components/Textcon'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import Backbutton from '../../Components/Backbutton'
import navigationString from '../../contants/navigationString'
import { db } from '../../../firebaseConfig'
import { collection, getDocs } from "firebase/firestore";
const Singup = ({ navigation }) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const chekfirstname = /^([A-Za-z]+)$/g;
    const cheklastname = /^([A-Za-z]+)$/g;
    const emailpattern = /^([A-Za-z0-9]+)@([a-zA-Z0-9].{1,4}).([a-z]{2,20})$/g;
    const phonepattern = /^([6,7,8,9][0-9]+)$/g;
    const checkuser = async () => {
        const docRef = collection(db, "users");
        const docSnap = await getDocs(docRef);
        let re = true;
        docSnap.forEach((doc) => {
            if (doc.id == mobile) {
                alert("user with this phone number is all ready exits");
                re = false;
            }
            else if (email == doc.data().email) {
                alert("User with the same Email Id already exists.");
                re = false;
            }
        });
        return re
    }

    const checkdata = async () => {
        if (!chekfirstname.test(firstname.trim())) {
            alert("First name should contain only letters")
        } else if (!cheklastname.test(lastname.trim())) {
            alert('*last name should contain only letters')
        } else if (!emailpattern.test(email.trim())) {
            alert('*email should have in this "abc@gmail.com " format')
        } else if (mobile.length != 10) {
            alert('*Please enter a valid mobile number')
        } else if (!phonepattern.test(mobile)) {
            alert('*first degit should in between\'6,7,8,9\' and also should have 10 digits')
        }
        else {
            try {
                checkuser().then((value) => {
                    if (value) {
                        const data = { firstname, lastname, email, mobile};
                        navigation.navigate(navigationString.OTPSCREEN, data);
                    }
                })
            } catch (error) {
                console.log("error", error);
            }

        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Backbutton onPress={() => navigation.goBack()} />
                <Textcon heading={"Create new account"} discription={"Create an account so you can continue"} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 32 }}>
                    <Input placeholderdata={"First name"} newstyle={{ width: "48%" }}
                        setdata={setfirstname} value={firstname} />
                    <Input placeholderdata={"Last name"} newstyle={{ width: "48%" }}
                        setdata={setlastname} value={lastname} />
                </View>
                <Input placeholderdata={"Email"} newstyle={{ marginTop: 16 }}
                    setdata={setemail} value={email} />
                <Input placeholderdata={"Mobile number"} newstyle={{ marginTop: 16 }} keyboardType={"number-pad"} maxLength={10}
                    setdata={setmobile} value={mobile} />
                <KeyboardAvoidingView style={{ marginTop: "90%" }} behavior='position' keyboardVerticalOffset={50}>
                    <Button name={"Next"} fun={checkdata} />
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Singup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: colors.themcolor
    }
})