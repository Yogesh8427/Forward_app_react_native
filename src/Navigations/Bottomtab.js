import { View, Text, Image,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationString from '../contants/navigationString';
import imagePath from '../contants/imagePath';
import Home from '../Screens/MainScrens/Home';
import colors from '../styles/colors';
import { moderateScale, verticalScale } from '../styles/scaling';
import Search from '../Screens/MainScrens/Search';
import Gallery from '../Screens/MainScrens/Gallery';
import Nodification from '../Screens/MainScrens/Nodification';
import Profile from '../Screens/MainScrens/Profile';
import VedioPly from '../Screens/MainScrens/VedioPly';
import ReelScreen from '../Screens/MainScrens/ReelScreen';

const Tab = createBottomTabNavigator();
const Bottomtab = () => {
  let options= (img)=>{
    return{
    tabBarIcon: ({ focused }) => (
      <Image source={img} style={focused ? { tintColor: "red" } : null} />
    ),
  }}
  return (
    <Tab.Navigator initialRouteName={navigationString.HOME} screenOptions={{
      headerShown: false,
      tabBarLabel: "",
      tabBarActiveTintColor:colors.buttoncolor,
      tabBarStyle: styles.tabbar,
    }}>
      <Tab.Screen name={navigationString.HOME} component={Home} options={options(imagePath.homelogo)} />
      {/* <Tab.Screen name={navigationString.SEARCH} component={Search} options={options(imagePath.searchlogo)} /> */}
      <Tab.Screen name={navigationString.VEDIOPLAY} component={VedioPly} options={options(imagePath.searchlogo)} />
      <Tab.Screen name={navigationString.GALLERY} component={Gallery} options={options(imagePath.addgallerylogo)} />
      {/* <Tab.Screen name={navigationString.NOTIFICATION} component={Nodification} options={options(imagePath.nodificationlogo)} /> */}
      <Tab.Screen name={navigationString.REELS} component={ReelScreen} options={options(imagePath.nodificationlogo)} />
      <Tab.Screen name={navigationString.PROFILE} component={Profile} options={options(imagePath.profilelogo)} />
    </Tab.Navigator>
  )
}

export default Bottomtab

const styles=StyleSheet.create({
  tabbar:{
    backgroundColor: colors.cardbackground,
    height: verticalScale(60),
    borderTopLeftRadius: moderateScale(8),
    borderTopRightRadius: moderateScale(8),
    marginTop: verticalScale(-8),
    borderTopWidth: 0
  }
})