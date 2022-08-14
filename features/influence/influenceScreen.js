import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BrowseScreen from './influenceSub/browseScreen';
import WatchScreen from './influenceSub/watchScreen';
import PeopleScreen from './influenceSub/peopleScreen';

const Tab = createMaterialTopTabNavigator();


export default function Influence() {
  return (
    <Tab.Navigator style={styles.influenceStyle}>
      <Tab.Screen name="Browse" component={BrowseScreen} />
      <Tab.Screen name="Watch" component={WatchScreen} />
      <Tab.Screen name="People" component={PeopleScreen} />
    </Tab.Navigator>
  );

}

const styles = StyleSheet.create({
  influenceStyle: { 
      justifyContent: 'center', 
      paddingTop: 20
  }
});