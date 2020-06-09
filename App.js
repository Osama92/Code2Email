import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Scanner from './Screens/Scanner'
import Login from './Screens/Login'
import ProductDetails from './Screens/ProductDetails'
import SendEmail from './Screens/SendEmail'

const Stack = createStackNavigator()


class App extends Component {



  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails}/>
          <Stack.Screen name='Scanner' component={Scanner}/>
          <Stack.Screen name='SendEmail' component={SendEmail}/>
          
          
        </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

export default App;
