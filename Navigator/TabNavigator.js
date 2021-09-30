import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateStory from '../screens/CreateStory'
import Feed from '../screens/Feed'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const BottomTabNavigator=()=>{
return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Feed') {
          iconName = focused
            ? 'book'
            : 'book-outline';
        } else if (route.name === 'CreateStory') {
          iconName = focused ? 'create' : 'create-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="CreateStory" component={CreateStory} />
  </Tab.Navigator>
)

}
export default BottomTabNavigator