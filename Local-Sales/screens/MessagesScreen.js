import React from 'react';
import { FlatList } from 'react-native';

import ListItem from '../app/assets/components/ListItem'
const messages =[
    {
        id:1,
        title:'T1',
        description: 'D1',
        image:require('../app/assets/img/stefan-stefancik.jpg')
    },
    {
        id:2,
        title:'T2',
        description: 'D2',
        image:require('../app/assets/img/vinicius-wiesehofer.jpg')
    }
]



function MessagesScreen(props) {
    return (
        <FlatList 
            data={messages}
            keyExtractor={messages => messages.id.toString()}
            renderItem={({item}) => <ListItem/>} />
    );
}

export default MessagesScreen;