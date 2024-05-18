import { Dimensions, StatusBar, StyleSheet, Text, View ,Image} from 'react-native'
import { Video, ResizeMode } from 'expo-av';
import React, { useEffect, useState } from 'react'
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { moderateScale, verticalScale } from '../styles/scaling';
import colors from '../styles/colors';
import Slider from '@react-native-community/slider';
import { useFocusEffect } from '@react-navigation/native';
import imagePath from '../contants/imagePath';
const Vedio_con = ({ vidio, isplay }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const[playIcon,setPlayicon]=useState(imagePath.play);
  if(status.isPlaying){
    setTimeout(()=>{
      setPlayicon(null);
    },1000)
  }
  useFocusEffect(
    React.useCallback(() => {
      checkVedio();
      return () => {
        video.current.pauseAsync();
      }
    }, [isplay])
  );
  const checkVedio = () => {
    if (isplay) {
      video.current.playAsync();
    } else {
      video.current.pauseAsync();
    }
  }
  const millisToMinutesAndSeconds = (millis) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return (seconds == 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" :
      "") + seconds);
  }

  // useEffect(()=>{
  //   if(video.current) {
  //     checkVedio();
  //   }
  // },[isplay])
 
  const tap =
    Gesture.Tap().onEnd((event, success) => {
      if (success) {
        status.isPlaying ? video.current.pauseAsync(): video.current.playAsync()
        if(!status.isPlaying)
        setPlayicon(imagePath.play);
      }
    })
  const forwardBackward = Gesture.Tap().numberOfTaps(2).onEnd((event, success) => {
    if (success) {
      const touchX = event.absoluteX;
      const mid = Dimensions.get('window').width / 2;
      if (touchX > mid) {
        video.current.getStatusAsync().then((status) => {
          const newPosition = Math.max(status.positionMillis + 10000, 0);
          video.current.setPositionAsync(newPosition);
        })
      } else if (touchX < mid) {
        video.current.getStatusAsync().then((status) => {
          const newPosition = Math.max(status.positionMillis - 10000, 0);
          video.current.setPositionAsync(newPosition);
        })
      }
    }
  })
  const composed = Gesture.Simultaneous(tap, forwardBackward);
  return (
    <GestureDetector gesture={composed}>
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: vidio,
          }}
          useNativeControls={false}
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        { !status.isPlaying &&
          <Image source={imagePath.pause} style={styles.image}/>
        }
        { status.isPlaying &&
          <Image source={playIcon} style={styles.image}/>
        }
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={status.durationMillis}
          value={status.positionMillis}
          thumbTintColor='red'
          onValueChange={value => {
            video.current.setPositionAsync(value)
          }}
          minimumTrackTintColor="red"
          maximumTrackTintColor="#000000"
        />
        <Text style={styles.second}>
          {millisToMinutesAndSeconds(status.positionMillis)}/{millisToMinutesAndSeconds(status.durationMillis)}
        </Text>
      </View>
    </GestureDetector>
  )
}

export default React.memo(Vedio_con)

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height - verticalScale(53),
    backgroundColor: colors.themcolor,
    // marginVertical:verticalScale(10)
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: '100%'
  },
  slider: {
    width: Dimensions.get('screen').width,
    height: 40,
    position: 'absolute',
    top: Dimensions.get('screen').height - verticalScale(200),
  },
  second: {
    height: 40,
    position: 'absolute',
    top: Dimensions.get('screen').height - verticalScale(170),
    right: moderateScale(15),
    color: 'white'
  },
  image:{
    position:"absolute",
    width:moderateScale(30),
    height:verticalScale(30),
    top:"48%",
    left:"46%"
  }
})