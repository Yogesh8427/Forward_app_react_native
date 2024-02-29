import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import imagePath from '../contants/imagePath'
import { moderateScale, verticalScale } from '../styles/scaling'

const Backbutton = (props) => {
    return (
        <TouchableOpacity style={styles.backbutton} {...props}>
            <Image source={imagePath.backlogo} />
        </TouchableOpacity>
    )
}

export default Backbutton

const styles = StyleSheet.create({
    backbutton:{
        marginTop:verticalScale(56), 
    }
})