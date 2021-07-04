import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import BottomTabNav from './BottomTabNav';

const Root = createStackNavigator();


const Router = () => {
    return (
        <NavigationContainer>
            <Root.Navigator screenOptions={{headerShown:false}}>
                <Root.Screen name="HomeTabs" component={BottomTabNav} />
            </Root.Navigator>
        </NavigationContainer>
    )
}

export default Router