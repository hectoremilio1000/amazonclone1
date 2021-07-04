import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCartScreen from '../screens/ShoppingCartScreen/ShoppingCartScreen';
import AdressScreen from '../screens/AddressScreen/AdressScreen';


const Stack = createStackNavigator();


const HomeStack = () => {
    return (
        
            <Stack.Navigator>
                <Stack.Screen name="cart" component={ShoppingCartScreen} 
                options={{
                    title:'Shopping Cart'
                }}
                />
                <Stack.Screen name="Address" component={AdressScreen} 
                options={{
                    title:'Address'
                }}/>
            </Stack.Navigator>
        
    )
}

export default HomeStack