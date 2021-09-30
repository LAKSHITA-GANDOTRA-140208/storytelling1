import React, { Component } from 'react'
import { Text, View } from 'react-native'
import DrawerNavigator from './Navigator/DrawerNavigator'
import {NavigationContainer} from '@react-navigation/native'
export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerNavigator/>
        </NavigationContainer>
    )
  }
}

export default App
