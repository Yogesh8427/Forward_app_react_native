import { View, Text } from 'react-native'
import React from 'react'
import Bottomtab from './Bottomtab'
import navigationString from '../contants/navigationString'
import ChangePassword from '../Screens/MainScrens/ChangePassword'
import EditProfile from '../Screens/MainScrens/EditProfile'
import Postdetails from '../Screens/MainScrens/Postdetails'
import Addpostes from '../Screens/MainScrens/Addpostes'
const Mainstack = (Stack) => {
  return (
    <>
   <Stack.Screen name={navigationString.BOTTOMTAB} component={Bottomtab} />
   <Stack.Screen name={navigationString.CHANGEPASSWORD} component={ChangePassword}/>
   <Stack.Screen name={navigationString.EDITPROFILE} component={EditProfile}/>
   <Stack.Screen name={navigationString.POSTDETAILE} component={Postdetails}/>
   <Stack.Screen name={navigationString.ADDPOSTES} component={Addpostes}/>
    </>
  )
}

export default Mainstack