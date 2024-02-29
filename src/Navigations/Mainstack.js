import { View, Text } from 'react-native'
import React from 'react'
import Bottomtab from './Bottomtab'
import navigationString from '../contants/navigationString'
const Mainstack = (Stack) => {
  return (
    <>
   <Stack.Screen name={navigationString.BOTTOMTAB} component={Bottomtab} />
    </>
  )
}

export default Mainstack