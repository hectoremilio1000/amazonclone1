import React, {useState} from 'react'
import { View, Text, SafeAreaView, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProductScreen from '../screens/ProducScreen/ProductScreen';
import { Feather } from '@expo/vector-icons';


const Stack = createStackNavigator();

const HeaderComponent = ({searchValue,setSearchValue})=>{
    return(
        <SafeAreaView style={{backgroundColor:'#22e3dd'}}>
            <View style={{backgroundColor:'white', 
            padding:5, margin:10, flexDirection:'row',
            alignItems:'center'}}>
                <Feather name="search" size={20}/>
            <TextInput
            style={{height:40, marginLeft:10,}}
            placeholder="Search ..."
            value={searchValue}
            onChangeText={setSearchValue}
            />
            </View>
        </SafeAreaView>
    )
}


const HomeStack = () => {

    const [searchValue, setSearchValue] = useState('')
   
    return (
        
            <Stack.Navigator
            screenOptions={{
                header:()=><HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue}/>
            }}>
                <Stack.Screen name="HomeScreen" 
                options={{
                    title:'Home'
                }}
                >
                    {()=><HomeScreen searchValue={searchValue}/>}
                </Stack.Screen>
                <Stack.Screen name="ProductDetails" 
                component={ProductScreen} 
                options={{
                    title:'Product Details'
                }}/>
            </Stack.Navigator>
        
    )
}

export default HomeStack