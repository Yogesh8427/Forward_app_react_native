import { Dimensions, StyleSheet, Text, View, Button,Image } from 'react-native'
import { React, useEffect, useState } from 'react'
import colors from '../../styles/colors'
import * as ImagePicker from 'expo-image-picker';
import navigationString from '../../contants/navigationString';
import Button2 from '../../Components/Button';
import { verticalScale } from '../../styles/scaling';

const Gallery = ({ navigation }) => {
  const [image,setimage]=useState([]);
  useEffect(()=>{
    if(image.length!=0){
      navigation.navigate(navigationString.ADDPOSTES,{image,setimage:setimage});
    }
  },[image])
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!result.canceled) {
      setimage([...image,result.assets[0].uri])
    }
  };
  const camera= async ()=>{
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!result.canceled) {
      setimage([...image,result.assets[0].uri]);
    }
  }
  return (
    <View style={styles.container}>
      <Button2 name="Pick an image from Gallery" fun={pickImage} style={styles.button}/>
      <Button2 name="open Camera" fun={camera}/>
    </View>
  )
}

export default Gallery

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.themcolor
  },
  Text: {
    textAlign: "center",
    marginTop: "70%",
    fontSize: 100,
    color: colors.buttoncolor
  },
  button:{
    marginVertical:verticalScale(200),
  },

})