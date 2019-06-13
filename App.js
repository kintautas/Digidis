import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './Home.js'
import TableScreen from './Table.js'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Table: {screen: TableScreen}
});

const App = createAppContainer(MainNavigator);

export default App;
