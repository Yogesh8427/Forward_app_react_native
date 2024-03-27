import { Dimensions, ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import imagePath from '../../contants/imagePath'
import { moderateScale, scale, verticalScale } from '../../styles/scaling'
import colors from '../../styles/colors'
import Button from '../../Components/Button'
const Postdetails = ({ navigation,route }) => {
  const navigate=()=>{
    navigation.goBack();
  }
  return (
    <ImageBackground resizeMode='cover' source={route.params.userpost} style={styles.background}>
      <View style={styles.userdetails}>
        <Image source={route.params.userimage} style={styles.image}></Image>
        <View style={styles.username}>
          <Text style={styles.heading}>{route.params.username}</Text>
          <Text style={styles.discription}>{route.params.address}</Text>
        </View>
        <TouchableOpacity onPress={navigate}>
          <Image source={imagePath.cross} style={styles.threedot} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomcon}>
        <Text style={styles.discription2}>{route.params.discription}</Text>
        <Text style={styles.uplodetime}>{route.params.uplodetime}</Text>
        <Button name={"VIEW MAP"}/>
      </View>
    </ImageBackground>
  )
}

export default Postdetails

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal:moderateScale(24)
  },
  userdetails: {
    flexDirection: 'row',
    alignItems: "center",
    alignSelf:"center",
    marginTop:verticalScale(16),
  },
  image: {
    width: moderateScale(40),
    height: verticalScale(40),
    borderRadius: moderateScale(50),
    marginTop: verticalScale(19),
    marginLeft: moderateScale(8)
  },
  username: {
    marginLeft: moderateScale(16),
    marginTop: verticalScale(22),
  },
  heading: {
    color: colors.heading,
    fontSize: scale(16),
    fontWeight: "600"
  },
  discription: {
    color: colors.heading,
    fontSize: scale(13),
  },
  threedot: {
    marginTop: verticalScale(16),
    marginLeft: moderateScale(98)
  },
  discription2:{
    color: colors.heading,
    fontSize: scale(15),
    marginVertical:verticalScale(16)
  },
  uplodetime:{
    color: colors.discription,
    fontSize: scale(13),
    marginBottom:verticalScale(19)
  },
  bottomcon:{
    marginTop:"150%"
  }
})