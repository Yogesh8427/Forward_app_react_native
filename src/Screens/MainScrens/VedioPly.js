import { StyleSheet, Text, View,Button, Dimensions } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
import { StatusBar } from 'expo-status-bar'
import { Video, ResizeMode } from 'expo-av';
import vidios from '../../utils/vedios';
import { verticalScale } from '../../styles/scaling';
const VedioPly = () => {
    const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [num,setnum]=React.useState(0);
  return (
    <>
    <StatusBar/>
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: vidios[num],
        }}
        useNativeControls={false}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
      <Button
          title={"<"}
          disabled={num===0?true:false}
          onPress={() => setnum(num-1)}
        />
      <Button
          title={"<<"}
          onPress={()=>video.current.getStatusAsync().then((status) => {
            const newPosition = Math.max(status.positionMillis - 10000, 0);
            video.current.setPositionAsync(newPosition);
          })}
        />
        <Button
          title={status.isPlaying ? 'II' : 'play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
        <Button
          title={">>"}
          onPress={()=>video.current.getStatusAsync().then((status) => {
            const newPosition = Math.max(status.positionMillis + 10000, 0);
            video.current.setPositionAsync(newPosition);
          })}
        />
        <Button
          title={">"}
          disabled={num===vidios.length-1?true:false}
          onPress={() => setnum(num+1)}
        />
      </View>
    </View>
    </>
  )
}

export default VedioPly

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.themcolor
      },
      video: {
        alignSelf: 'center',
        width: 320,
        marginVertical:verticalScale(10),
        height: 200,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent:"space-evenly",
        alignItems: 'center',
      },
})