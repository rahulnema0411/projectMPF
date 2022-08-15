import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BrowseScreen from './influenceSub/browseScreen';
import WatchScreen from './influenceSub/watchScreen';
import PeopleScreen from './influenceSub/peopleScreen';

const Tab = createMaterialTopTabNavigator();


export default function Influence() {
  return (
    <Tab.Navigator style={styles.influenceStyle} screenOptions={({ route }) => ({
      tabBarActiveTintColor: 'rgba(255, 255, 255, 1)',
      tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.4)',
      tabBarItemStyle: styles.tabBarItemStyle,
      tabBarLabelStyle: styles.tabBarLabelStyle,
    })}>
      <Tab.Screen name="Browse" component={BrowseScreen} />
      <Tab.Screen name="Watch" component={WatchScreen} />
      <Tab.Screen name="People" component={PeopleScreen} />
    </Tab.Navigator>
  );

}

const styles = StyleSheet.create({
  influenceStyle: { 
    justifyContent: 'center', 
    paddingTop: 30,
    backgroundColor: '#718598',
  }, 
  tabBarItemStyle: {
    backgroundColor: '#718598',
  },
  tabBarLabelStyle: {
    fontFamily: 'Avenir_Black',
  },
  tabBarIndicatorStyle: {
    color: '#E9DA96'
  }
});