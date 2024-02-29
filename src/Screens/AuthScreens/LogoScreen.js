import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../../styles/colors'
import imagePath from '../../contants/imagePath'
import navigationString from '../../contants/navigationString'

const LogoScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate(navigationString.FIRSTSCREEN);
        },1000)
    },[])
    return (
        <View  style={styles.container}>
            <Image source={imagePath.logo}/>
        </View>
    )
}

export default LogoScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.themcolor,
        justifyContent:"center",
        alignItems:"center"
    }
})