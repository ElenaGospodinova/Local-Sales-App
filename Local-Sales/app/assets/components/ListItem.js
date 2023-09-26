import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { View, StyleSheet, Image, Text,TouchableHighlight  } from 'react-native';

import colors from '../config/colors';

function ListItem({title, subTitle, image, ImageComponent, onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
                <View style={styles.container}>
                    <View>
                    {ImageComponent}
                    {image && <Image source={image} style={styles.image} resizeMode='cover'/>}
                    </View>
                    <View style={styles.userContainer}>
                        <Text style={styles.title}>{title}</Text>
                       {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding:15,
    
       
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 50,
        borderTopStartRadius:10,
        margin: 10,
    },
    title:{
        fontWeight: "500",

    },
    subTitle:{
        color: colors.green,
    },
    userContainer:{
        margin:10,
        justifyContent:'center',
        
    },

})

export default ListItem;