import React from 'react';
import { Image, View} from 'react-native';


function ViewImageScreen(props) {
    return (
        <View style={styles.conatiner} >
        <Image source={require('./app/assets/gardenChair.jpg')}
        style={styles.image}
        resizeMode='contain'
        >

        </Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000',
        flex: 1,
    },
    image:{
        width:'100%',
        height:'100%',
    },
    container:{

    }
})
export default ViewImageScreen;