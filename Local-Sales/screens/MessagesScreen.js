import React from 'react';

import { TouchableOpacity, FlatList, StyleSheet, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ListItem from '../app/assets/components/ListItem';
import colors from '../app/assets/config/colors';
import Screen from '../app/assets/components/Screen';
import ListSeparator from '../app/assets/components/ListSeparator';
 
const messages =[
    {
        id:1,
        title:'Stefan Stefancik',
        description: 'Wed Developer',
        image:require('../app/assets/img/stefan-stefancik.jpg')
    },
    {
        id:2,
        title:'Rebecca Walker',
        description: 'Back End Developer',
        image:require('../app/assets/img/rebecca-walker.jpg')
    }
]



function MessagesScreen(props) {
    const navigation = useNavigation();

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };

    return (
        <Screen>
            <TouchableOpacity style={styles.next} onPress={() => navigateTo('Listing')}>
                <AntDesign name="rightcircleo" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.back} onPress={() => navigateTo('Home')}>
                <AntDesign name="leftcircleo" size={24} color="black" />
            </TouchableOpacity>
            
            <FlatList 
                    style={styles.messages}
                    data={messages}
                    keyExtractor={messages => messages.id.toString()}
                    renderItem={({item}) => ( <ListItem 

                        title={item.title}
                        subTitle={item.description}
                        image={item.image}  
                        onPress={() => Alert.prompt("Send Quick Massage")}
                        />
                    
                    )}  

                    ItemSeparatorComponent={ListSeparator}
             />
             
        </Screen>
    );
}


const styles = StyleSheet.create({
    messages:{
        marginTop:70,
        color: colors.primary,
        },
    next: {
      position: 'absolute',
      top: 33,
      right: 20,
      
    },
    back: {
      position: 'absolute',
      top: 33,
      left: 20,
    },
  });

export default MessagesScreen;