import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import imagePath from '../contants/imagePath'
import colors from '../styles/colors'
import { moderateScale, scale, verticalScale } from '../styles/scaling'
import navigationString from '../contants/navigationString'

const UserDataCard = ({user,navigation}) => {
    const navigate=(Screen)=>{
        navigation.navigate(Screen,user);
    }
    return (
        <View style={styles.container}>
            <View style={styles.userdetails}>
                <Image source={user.userimage} style={styles.image}></Image>
                <View style={styles.username}>
                    <Text style={styles.heading}>{user.username}</Text>
                    <Text style={styles.discription}>{user.address}</Text>
                </View>
                <TouchableOpacity>
                    <Image source={imagePath.threedots} style={styles.threedot} />
                </TouchableOpacity>
            </View>
            <View style={styles.userpostes}>
                <TouchableOpacity onPress={()=>navigate(navigationString.POSTDETAILE)}>
                    <Image source={user.userpost} style={styles.userpost} />
                </TouchableOpacity>
                <Text style={styles.userdis}>{user.discription}</Text>
                <Text style={styles.uplodtime}>{user.uplodetime}</Text>
                <View style={styles.lastcon}>
                    <Text style={styles.heading}>Comments {user.comments}</Text>
                    <Text style={styles.heading}>Likes {user.likes}</Text>
                    <TouchableOpacity>
                        <Image source={imagePath.Sharearrow} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.userlike}></View>
        </View>
    )
}

export default UserDataCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.cardbackground,
        height: verticalScale(520),
        marginVertical: verticalScale(14),
        borderRadius: moderateScale(9)
    },
    image: {
        width: moderateScale(40),
        height: verticalScale(40),
        borderRadius: moderateScale(50),
        marginTop: verticalScale(19),
        marginLeft: moderateScale(16),
    },
    userdetails: {
        flexDirection: 'row',
        alignItems: "center",
        alignSelf:"center"
    },
    username: {
        marginLeft: moderateScale(16),
        marginTop: verticalScale(22),
    },
    heading: {
        color: colors.heading,
        fontSize: scale(16),
        fontWeight:"600"
    },
    discription: {
        color: colors.discription2,
        fontSize: scale(13),
    },
    threedot: {
        marginTop: verticalScale(16),
        marginLeft: moderateScale(72),
        marginRight:moderateScale(16)
    },
    userpost: {
        width: moderateScale(290),
        height: verticalScale(300),
        marginVertical: verticalScale(16),
        alignSelf:"center",
        borderRadius:3,
    },
    userdis: {
        marginHorizontal: moderateScale(16),
        color: colors.heading,
        fontSize: scale(15)
    },
    lastcon: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: verticalScale(14),
        marginHorizontal: moderateScale(16)
    },
    uplodtime: {
        marginLeft:moderateScale(16),
        color:colors.discription,
        marginTop: verticalScale(16),
        fontSize: scale(13)
    }
})