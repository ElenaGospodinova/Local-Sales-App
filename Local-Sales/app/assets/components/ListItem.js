import React from 'react';
import { View, StyleSheet, Image, Text  } from 'react-native';
import { TouchableHighlight } from 'react-native';

import colors from '../config/colors';

function ListItem({title, subTitle, image, onPress}) {
    return (
        <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
            <View style={styles.container}>
                <View>
                <Image source={image} style={styles.image} resizeMode='cover'/>
                </View>
                <View style={styles.userContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDIrection: 'row',
        padding:15,
       
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: '50%',
        borderTopStartRadius:12,
        margin: 10,
    },
    title:{
        fontWeight: "500",

    },
    subTitle:{
        color: colors.medium,
    },
    userContainer:{
        margin:10,
        
    },

})

export default ListItem;