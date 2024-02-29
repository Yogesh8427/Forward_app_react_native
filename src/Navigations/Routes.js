import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Mainstack from './Mainstack'
import Authstack from './Authstack'
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    {true?Mainstack(Stack):Authstack(Stack)}
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Routes