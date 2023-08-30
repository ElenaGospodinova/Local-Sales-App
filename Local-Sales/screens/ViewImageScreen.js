import React from 'react';
import { Image, View, StyleSheet} from 'react-native';

import GardenChairs from '../app/assets/gardenChairs.jpg';

import colors from '../app/assets/config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container} >
        <View style={styles.closeIcon}></View>
        <View style={styles.openIcon}></View>
        <View style={styles.imageContainer}>
            <Image source={GardenChairs}
            style={styles.image}
            resizeMode='contain'
            />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.backgroundColor,
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width:'70%',
        height:'70%',
    },
    closeIcon:{
        width:80,
        height:50,
        backgroundColor: colors.primary,
        position:'absolute',
        top:50,
        left:30,
        borderRadius:12,
        borderColor:'red',
        borderWidth: 1,
    },
    openIcon:{
        width:80,
        height:50,
        backgroundColor:colors.secondary,
        position:'absolute',
        top:50,
        right:30,
        borderRadius:12,
        borderColor:'#ACBCFF',
        borderWidth: 2,
    }
    
})
export default ViewImageScreen;