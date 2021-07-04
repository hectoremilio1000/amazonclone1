import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import AdressScreen from './src/screens/AddressScreen/AdressScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import ProductScreen from './src/screens/ProducScreen/ProductScreen'
import ShoppingCartScreen from './src/screens/ShoppingCartScreen/ShoppingCartScreen'
import Test from './src/screens/Test/Test'
import Router from './src/router/Router';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);
import { withAuthenticator, AmplifySignOut } from 'aws-amplify-react-native';

 function Index() {
  return (
    <Router/>
  );
}

export default withAuthenticator(Index)