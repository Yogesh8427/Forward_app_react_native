import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import colors from '../../styles/colors'
import imagePath from '../../contants/imagePath'
import { moderateScale, scale, verticalScale } from '../../styles/scaling'
import Card from '../../Components/Card'
import navigationString from '../../contants/navigationString'

const FirstScreen = ({navigation}) => {
    const [index, setindex] = useState(0);
    const getIndex = (e) => {
        let offsetx = e.nativeEvent.contentOffset.x;
        let width = Dimensions.get('window').width;
        let index=Math.ceil(offsetx/width)
        setindex(index);
    }
    const tologin=()=>{
        navigation.navigate(navigationString.LOGINOPTION)
    }
    const backgroundColor = { backgroundColor: "red", width: moderateScale(25) }
    return (
        <View style={styles.container}>
            <ScrollView horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={20}
                onScroll={(e) => getIndex(e)}
                pagingEnabled>
                <Card />
                <Card />
                <Card />
            </ScrollView>
            <View style={styles.endcon}>
                <View style={styles.dotscon}>
                    {[0, 1, 2].map(i => (
                 <View key={i} style={index === i ? { ...styles.dots, ...backgroundColor } : { ...styles.dots }}></View>
                    ))}
                </View>
                <TouchableOpacity onPress={tologin}><Text style={styles.getstart}>GET STARTED</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default FirstScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.themcolor
    },
    endcon: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(24),
        marginVertical: verticalScale(12)
    },
    getstart: {
        color: colors.heading,
        fontSize: scale(15)
    },
    dotscon: {
        flexDirection: "row",
        alignItems: "center",
    },
    dots: {
        backgroundColor: colors.cardbackground,
        width: moderateScale(12),
        height: verticalScale(4),
        borderRadius: moderateScale(4),
        marginHorizontal: moderateScale(1),
    },

})