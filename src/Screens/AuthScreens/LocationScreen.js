import {
    StyleSheet, Text, View, KeyboardAvoidingView, FlatList,
    ScrollView,
    keyboardA,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import React, { useEffect } from 'react'
import colors from '../../styles/colors'
import { moderateScale, scale, verticalScale } from '../../styles/scaling'
import Textcon from '../../Components/Textcon'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import Showlocation from '../../Components/Showlocation'
import navigationString from '../../contants/navigationString'
import { db } from '../../../firebaseConfig'
import { doc, setDoc } from "firebase/firestore";
const LocationScreen = ({ navigation, route }) => {
    const {confirmation,...userdata} = route.params;
    const send_to_db = async () => {
        await setDoc(doc(db, "users", userdata.mobile), userdata)
        alert("Users Created Succesfuly");
    }
    const navigate = async (screen) => {
        send_to_db().then(() => navigation.navigate(screen))
    }
    let data = [
        { loc: "Sector 55,Chandigarh" },
        { loc: "Sector 22,Chandigarh" },
        { loc: "Sector 48,Chandigarh" },
        { loc: "Sector 55,Chandigarh" },
        { loc: "Sector 55,Chandigarh" },
        { loc: "Sector 55,Mohali" },

    ]
    const [address, setAddress] = React.useState("");
    const [newaddress, setnewaddress] = React.useState([]);
    const [image, setimage] = React.useState(true);
    let input;
    useEffect(() => {
        input = setTimeout(() => {
            let patter = new RegExp(address, 'g');
            let newdata = data.filter((item) => item.loc.match(patter));
            if (newdata.length > 0) {
                setnewaddress(newdata);
                setimage(true);
            } else {
                setnewaddress([{ loc: "Search not found :(" }]);
                setimage(false);
            }
        }, 1000)
    }, [address])
    const getaddress = (text) => {
        setAddress(text);
        clearTimeout(input);
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.topcon}>
                    <Textcon
                        heading="Device location is off"
                        discription="Turning on device location will ensure accurate road alerts."
                        style={{ width: "78%" }} />
                    <Button name="TURN ON" style={styles.button} textstyle={styles.textstyle} />
                </View >
                <Text style={styles.or}>Or</Text>
                <View style={styles.inputcon}>
                    <Input placeholderdata="Enter Location manually" newstyle={styles.input}
                        setdata={(text) => getaddress(text)} />
                </View>
                <Text style={{ ...styles.or, alignSelf: "flex-start" }}>Suggetions</Text>
                <FlatList
                    style={styles.flat}
                    data={newaddress}
                    renderItem={(item) => <Showlocation loc={item} image={image} />}
                    keyExtractor={(item, index) => index}
                />
                <Button name="SELECT & PROCEED" style={styles.button2} fun={() => navigate(navigationString.LOGIN)} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default LocationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.themcolor,
        paddingHorizontal: moderateScale(24),
    },
    topcon: {
        marginTop: verticalScale(23),
        flexDirection: "row",
    },
    button: {
        width: moderateScale(80),
        height: verticalScale(32),
        marginTop: verticalScale(27),
    },
    button2: {
        marginTop: "5%",
        marginBottom: "3%"
    },
    textstyle: {
        fontSize: scale(12),
        fontWeight: "bold"
    },
    or: {
        marginTop: verticalScale(26),
        color: colors.heading,
        alignSelf: 'center',
        fontSize: scale(16),
    },
    input: {
        // textAlign: "right"
    },
    inputcon: {
        marginTop: verticalScale(26),
    },
    flat: {
        flexGrow: 0,
        // backgroundColor:"red",
        height: verticalScale(360)
    }
})