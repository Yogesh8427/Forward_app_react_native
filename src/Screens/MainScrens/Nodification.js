import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
import { verticalScale, moderateScale } from '../../styles/scaling'
import UserNotification from '../../Components/UserNotification'
import imagePath from '../../contants/imagePath'

const Nodification = ({ navigation }) => {
  const notificationsData = [
    {
      userimage: imagePath.dummyprofile,
      username: "John Doe",
      uplodetime: "1 hr ago",
    },
    {
      userimage: imagePath.dummyprofile,
      username: "John Doe",
      uplodetime: "1 hr ago",
    },
    {
      userimage: imagePath.dummyprofile,
      username: "John Doe",
      uplodetime: "1 hr ago",
    },
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notification</Text>
      <FlatList
        style={styles.FlatList}
        data={notificationsData}
        keyExtractor={( item, index ) => index}
        renderItem={({ item }) => <UserNotification data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Nodification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.themcolor
  },
  heading: {
    marginTop: verticalScale(39.34),
    fontWeight: "600",
    color: colors.heading,
    fontSize: moderateScale(16),
  },
  FlatList: {
    marginBottom: verticalScale(16),
  }

})