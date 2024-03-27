import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback, Keyboard,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'
import React, { useEffect } from 'react'
import Backbutton from '../../Components/Backbutton'
import Input from '../../Components/Input'
import imagePath from '../../contants/imagePath'
import colors from '../../styles/colors'
import Button from '../../Components/Button'
import { moderateScale, verticalScale ,scale} from '../../styles/scaling'

const Addpostes = ({ navigation,route }) => {
    const navigate=()=>{
        route.params.setimage([]);
        navigation.goBack();
    }
    return (
        <ScrollView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View >
                <View style={styles.topcon}>
                    <Backbutton onPress={navigate} />
                    <Text style={styles.text2}>Add info</Text>
                </View>
                <View style={styles.imagcon}>
                    {route.params.image.map((image,index)=> <Image source={{uri:image}} style={styles.button} key={index}/>)}
                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Image source={imagePath.pluse}/>
                    </TouchableOpacity>
                </View>
                <Input multiline={true} numberOfLines={8}
                 placeholderdata="write description here" newstyle={styles.input}/>
                <Input placeholderdata="Add location" />
                <KeyboardAvoidingView behavior='position' style={{ marginTop: "90%" }} keyboardVerticalOffset={40}>
                    <Button name="POST" />
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
        </ScrollView>
    )
}

export default Addpostes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.themcolor,
        paddingHorizontal: moderateScale(24)
    },
    topcon: {
        flexDirection: "row",
        marginBottom: verticalScale(48)
    },
    text2: {
        color: colors.heading,
        fontWeight: "600",
        marginTop: verticalScale(52.34),
        marginLeft: moderateScale(16),
        fontSize: scale(16),
    },
    button:{
        backgroundColor:colors.cardbackground,
        width:moderateScale(64),
        height:verticalScale(64),
        borderRadius:moderateScale(8),
        marginRight:moderateScale(16),
        marginVertical:verticalScale(7),
        justifyContent:"center",
        alignItems:"center"
    },
    input:{
        marginVertical:verticalScale(16),
        height:verticalScale(96),
        textAlignVertical:"top",
        padding:moderateScale(12),
    },
    imagcon:{
        flexDirection:"row",
        flexWrap:"wrap"
    }
})