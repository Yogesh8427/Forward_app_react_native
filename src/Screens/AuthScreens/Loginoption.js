import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
import imagePath from '../../contants/imagePath'
import { moderateScale, scale, verticalScale } from '../../styles/scaling'
import Button from '../../Components/Button'
import LogoButton from '../../Components/LogoButton'
import navigationString from '../../contants/navigationString'

const Loginoption = ({navigation}) => {
    const toNext=(screen)=>{
        navigation.navigate(screen);
    }
    return (
        <View style={styles.container}>
            <Image source={imagePath.logo} style={styles.image} />
            <Text style={styles.text}>By clicking"Log In",you agree with our Terms.
                learn how we process your data in our Privicy policy</Text>
            <Button name={"Log in with Phone number"} style={styles.button} fun={()=>toNext(navigationString.LOGIN)}/>
            <Text style={{ ...styles.text, marginTop: verticalScale(16), fontSize: scale(16) }}>or</Text>
            <LogoButton name={"Log in with Google"}
                style={{ ...styles.button, marginTop: verticalScale(16) }}
                logo={imagePath.google}
            />
            <LogoButton name={"Log in with Facebook"}
                style={{ ...styles.button, marginTop: verticalScale(16) }}
                logo={imagePath.facebook}
            />
            <LogoButton name={"Log in with Apple"}
                style={{ ...styles.button, marginTop: verticalScale(16) }}
                logo={imagePath.apple}
            />
            <View style={styles.singup}>
                <Text style={{ color:colors.heading,fontWeight:"600"}}>New here? </Text>
                <TouchableOpacity onPress={()=> toNext(navigationString.SINGUP)}>
                    <Text style={{ color:colors.singup,fontWeight:"600" }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Loginoption

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.themcolor
    },
    image: {
        width: moderateScale(178),
        height: verticalScale(178),
        marginTop: verticalScale(60),
        alignSelf: "center",
        resizeMode:"contain"
    },
    text: {
        textAlign: "center",
        marginHorizontal: moderateScale(24),
        fontSize: scale(13),
        color: colors.discription,
        marginTop: verticalScale(50)
    },
    button: {
        marginHorizontal: moderateScale(24),
        marginTop: verticalScale(35)
    },
    singup: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%"
    }
})