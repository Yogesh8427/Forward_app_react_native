import { StyleSheet, Text, View, FlatList, Dimensions, StatusBar } from 'react-native'
import React, { useState } from 'react'
import colors from '../../styles/colors'
import vidios from '../../utils/vedios'
import Vedio_con from '../../Components/Vedio_con'
import { verticalScale } from '../../styles/scaling'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const ReelScreen = () => {
    const[Index,setIndex]=useState(0);
    const getIndex = (e) => {
        let offsety = e.nativeEvent.contentOffset.y;
        let height = Dimensions.get('window').height;
        let index=Math.floor(offsety/height)
        setIndex(index);
    }
    return (
        <GestureHandlerRootView>
        <FlatList
            data={vidios}
            renderItem={(item) => <Vedio_con vidio={item.item} isplay={item.index==Index}/>}
            // renderItem={(item) => console.log(index)}
            keyExtractor={(_, index) => index}
            onScroll={(e) => getIndex(e)}
            pagingEnabled
        >
        </FlatList>
        </GestureHandlerRootView>
    )
}

export default ReelScreen
