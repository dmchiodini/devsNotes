import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from '../pages/ListScreen';
import EditNotesScreen from '../pages/EditNotesScreen';

const MainStack = createStackNavigator();

export default () => (
    <MainStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: '#222'
        },
        headerTintColor: '#FFF'
    }}>
        <MainStack.Screen name='List' component={ListScreen} />
        <MainStack.Screen name='EditNote' component={EditNotesScreen} />
    </MainStack.Navigator>
)