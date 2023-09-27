import React from 'react'

import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ListSeparator from '../app/assets/components/ListSeparator'
import Screen from '../app/assets/components/Screen'
import ListItem from '../app/assets/components/ListItem'
import colors from '../app/assets/config/colors'
import Icon from '../app/assets/components/Icon'
//import Icon from '../app/assets/components/Icon'



const menuItems = [
    {
        title:'My Listings',
        icon:{
            name:'format-list-bulleted',
            backgroundColor:colors.primary,
        },
    },
    {
        title:'My Messages',
        icon:{
            name:'email',
            backgroundColor:colors.secondary,
        },

    }
]


function AccountScreen(props) {

    const navigation = useNavigation();

    const navigateTo = (screenName) => {
    navigation.navigate(screenName);
    };


  return (
    <Screen>
    <TouchableOpacity style={styles.next} onPress={() => navigateTo('Input')}>
        <AntDesign name="rightcircleo" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.back} onPress={() => navigateTo('Home')}>
        <AntDesign name="leftcircleo" size={24} color="black" />
      </TouchableOpacity>

        <View style={styles.container}>
      {/* <Icon 
        name='email' 
        size={50}
        backgroundColor='red'
        iconColor="white"
        
        /> */}
        <ListItem 
            title='Elena Gospodinova' 
            subTitle='gospodinovaelena@yahoo.co.uk' 
            image={require('../app/assets/img/my_logo.png')}
            // ImageComponent={<Icon name='email'/>}
            />
        
     </View>
     <View style={styles.container}>
         <FlatList 
            data={menuItems}
            keyExtractor={menuItem => menuItem.title}
            ItemSeparatorComponent={ListSeparator}
            renderItem={({item}) => 
                <ListItem
                    title={item.title}
                    ImageComponent={
                        <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                     } />
            }
                />
     </View>
     <View>
         <ListItem
            title='Log Out'
            ImageComponent={
                <Icon name='logout' backgroundColor='#ffe66d'/>
            } />
     </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 50,
        backgroundColor:colors.lightGray,
        
    },
    next: {
        position: 'absolute',
        top: 13,
        right: 20,
        
    },
    back: {
        position: 'absolute',
        top: 13,
        left: 20,
    },
})
export default AccountScreen;