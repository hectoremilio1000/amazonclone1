import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ShoppingCartStack from './ShoppingCartStack'
import { Entypo } from '@expo/vector-icons';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();


const BottomTabNav = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
        showLabel:false,
        inactiveTintColor:'#595959',
        activeTintColor:'#e47911',
        }}>
            <Tab.Screen 
            component={HomeStack} 
            name="home"
            options={{
                tabBarIcon:({color}) => (
                <Entypo name="home" color={color} size={19}/>
                ),
            }}
            />
            <Tab.Screen 
            component={HomeScreen}
             name="profile"
             options={{
                tabBarIcon:({color}) => (
                <Entypo name="user" color={color} size={19}/>
                ),
            }}/>
            <Tab.Screen 
            component={ShoppingCartStack}
            name="shoppingCart"
            options={{
                tabBarIcon:({color}) => (
                <Entypo name="shopping-cart" color={color} size={19}/>
                ),
            }}/>
            <Tab.Screen 
            component={HomeScreen} 
            name="more"
            options={{
                tabBarIcon:({color}) => (
                <Entypo name="menu" color={color} size={19}/>
                ),
            }}/>
        </Tab.Navigator>
    )
}

export default BottomTabNav