import React from 'react';
import { ImageBackground, StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppText from '../app/assets/components/AppText';
import colors from '../app/assets/config/colors';
import Heading from '../app/assets/components/Heading';
import AppButton from '../app/assets/components/AppButton';

//rsf - shot cut 
function WelcomeScreens(props) {
    const navigation = useNavigation();

    const navigateToViewImage = () => {
        
        navigation.navigate('Sales Offers'); 
    };

    
    return (
        <View style={{flex: 1}}>
            
                <View style={styles.containerBackground}>
                <ImageBackground 
                source={require('../app/assets/SalesApp.jpg')}
                style={styles.background}
                resizeMode='contain'
                >
                    <Heading style={styles.textHeading}>Your Heading Here</Heading>
                    <AppButton title='LogIn' onPress={() => navigation.navigate('Sales Offers')} />

                    <TouchableOpacity 
                        style={styles.loginButton}
                        onPress={navigateToViewImage}
                        fadeDuration={1000}
                    >
                        <AppText style={styles.textButton}>Go </AppText>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.registerButton}
                    onPress={navigateToViewImage}
                    >
                        <AppText style={styles.textButton}>Todays Sales</AppText>
                    </TouchableOpacity>
                    
                    <Image source={require('../app/assets/Logo.png')} style={styles.logo}/>
                </ImageBackground>
                
            </View>
    </View>
    );
}


//rnss -  shortcut 
const styles = StyleSheet.create({
    background:{
        flex:1,
        height:'100%',
        width:'100%',
        justifyContent:'flex-end',
        flexWrap: 'wrap',
        zIndex: 1,
        position: 'relative',
    },
    containerBackground:{
        flex:1,
        backgroundColor:colors.backgroundColor,
        
    },
    loginButton:{
        width:'94%',
        height:'8%',
        top:-45,
        padding:15,
        backgroundColor:colors.primary,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:22,
        
        
        
    },
    registerButton:{
        width:'94%',
        height:'8%',
        bottom:142,
        backgroundColor:'#ACBCFF',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:22,
        position:'absolute',
        
       
    },
    logo:{
      width: '16%',
      height: '10%',
      flex: -1,
      alignItems:'center',
      justifyContent:'center',
      zIndex: 3,
      position: 'absolute',
      borderRadius:12,
      top:10,
      left:10,
   
    },
})
export default WelcomeScreens;