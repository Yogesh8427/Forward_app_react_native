import {
    StyleSheet, Text, View, KeyboardAvoidingView, FlatList,
    ScrollView,
    keyboardA,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
import { moderateScale, scale, verticalScale } from '../../styles/scaling'
import Textcon from '../../Components/Textcon'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import Showlocation from '../../Components/Showlocation'
import navigationString from '../../contants/navigationString'

const LocationScreen = ({ navigation }) => {
    const navigate=(screen)=>{
        navigation.navigate(screen)
    }
    const data = [
        { loc: "Sector 55,Chandigarh" },
        { loc: "Sector 22,Chandigarh" },
        { loc: "Sector 48,Chandigarh" },
        { loc: "Sector 55,Chandigarh" },
        { loc: "Sector 55,Chandigarh" },
        { loc: "Sector 55,Mohali" },

    ]
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
                    <Input placeholderdata="Enter Location manually" newstyle={styles.input} />
                </View>
                <Text style={{ ...styles.or, alignSelf: "flex-start" }}>Suggetions</Text>
                <FlatList
                    style={styles.flat}
                    data={data}
                    renderItem={(item) => <Showlocation loc={item} />}
                    keyExtractor={(item, index) => index}
                />
                <Button name="SELECT & PROCEED" style={styles.button2} fun={()=>navigate(navigationString.LOGIN)} />
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
    button2:{
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
    flat:{
        flexGrow:0,
        // backgroundColor:"red",
        height:verticalScale(360)
    }
})