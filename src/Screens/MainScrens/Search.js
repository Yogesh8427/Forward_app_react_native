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
const Search = () => {
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
        <View style={styles.inputcon}>
          <Input placeholderdata="Enter Location manually"/>
        </View>
        <Text style={styles.or}>Suggetions</Text>
        <FlatList
          style={styles.flat}
          data={data}
          renderItem={(item) => <Showlocation loc={item} />}
          keyExtractor={(item, index) => index}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Search
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themcolor,
    paddingHorizontal: moderateScale(24),
  },
  or: {
    marginTop: verticalScale(26),
    color: colors.heading,
    fontSize: scale(16),
    alignSelf: "flex-start" 
  },
  inputcon: {
    marginTop: verticalScale(50),
  },
  flat: {
    flexGrow: 0,
    // backgroundColor:"red",
    height: verticalScale(360)
  }
})