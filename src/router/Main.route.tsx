import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MainStackT } from './routeType';
import UserList from '../screen';
const MainRoute=()=> {
    const Stack = createNativeStackNavigator<MainStackT>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    
        <Stack.Screen
          name='user'
          component={UserList}
          
        />
    </Stack.Navigator>
  )
}
export default MainRoute;

