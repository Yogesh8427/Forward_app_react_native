import React from 'react'
import LogoScreen from '../Screens/AuthScreens/LogoScreen'
import FirstScreen from '../Screens/AuthScreens/FirstScreen'
import Loginoption from '../Screens/AuthScreens/Loginoption'
import Login from '../Screens/AuthScreens/Login'
import Singup from '../Screens/AuthScreens/Singup'
import OtpScreen from '../Screens/AuthScreens/OtpScreen'
import navigationString from '../contants/navigationString'
import SetpassScreen from '../Screens/AuthScreens/SetpassScreen'
import LocationScreen from '../Screens/AuthScreens/LocationScreen'

const Authstack = (Stack) => {
    return (
        <>
            <Stack.Screen name={navigationString.SPLACE} component={LogoScreen} />
            <Stack.Screen name={navigationString.FIRSTSCREEN} component={FirstScreen} />
            <Stack.Screen name={navigationString.LOGINOPTION} component={Loginoption} />
            <Stack.Screen name={navigationString.LOGIN} component={Login} />
            <Stack.Screen name={navigationString.SINGUP} component={Singup} />
            <Stack.Screen name={navigationString.OTPSCREEN} component={OtpScreen} />
            <Stack.Screen name={navigationString.SETPASS} component={SetpassScreen} />
            <Stack.Screen name={navigationString.LOCATION} component={LocationScreen}/>
        </>
    )
}

export default Authstack