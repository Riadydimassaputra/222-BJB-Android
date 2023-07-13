import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import news from './screens/HomeScreen/news';

const Stack = createStackNavigator();

const App = () => {
  return <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="news"
    component={news}
    options={{title :"List Berita"}}>
    </Stack.Screen>
  </Stack.Navigator>
  </NavigationContainer>
}

export default App;
