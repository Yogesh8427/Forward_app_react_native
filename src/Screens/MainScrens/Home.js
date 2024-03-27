import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
import { moderateScale, scale, verticalScale } from '../../styles/scaling'
import imagePath from '../../contants/imagePath'
import UserDataCard from '../../Components/UserDataCard'

const Home = ({ navigation }) => {
  const user=[
    {
    userimage:imagePath.dummyprofile,
    userpost:imagePath.dummydata,
    username: "John Doe",
    address:"Sector 28D,Chandigarh",
    discription:"lorem impsum sdsh sds hsdgs sdgsbd sdghsd sdhshd sdsd sdsd sdsd sdsd sdsd sdsd sds",
    uplodetime:"1 hr ago",
    comments:121,
    likes:232323,
},
  {
    userimage:imagePath.dummyprofile,
    userpost:imagePath.dummydata2,
    username: "John Doe",
    address:"Sector 28D,Chandigarh",
    discription:"lorem impsum sdsh sds hsdgs sdgsbd sdghsd sdhshd sdsd sdsd sdsd sdsd sdsd sdsd sds",
    uplodetime:"1 hr ago",
    comments:121,
    likes:232323,
},
]
  return (
    <View style={styles.container}>
      <View style={styles.topcon}>
        <Text style={styles.Text}>4WARD</Text>
        <TouchableOpacity>
          <Image source={imagePath.location} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={user}
        keyExtractor={(item,index) => index}
        renderItem={({ item }) => <UserDataCard user={item} navigation={navigation}/>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
    backgroundColor: colors.themcolor
  },
  Text: {
    fontSize: scale(20),
    fontWeight: "bold",
    color: colors.buttoncolor
  },
  topcon: {
    marginTop: verticalScale(28),
    flexDirection: "row",
    justifyContent: "space-between"
  },
})