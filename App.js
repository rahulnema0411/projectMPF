import { StyleSheet } from 'react-native';
import HomeScreen from './features/home/homeScreen';
import Influence from './features/influence/influenceScreen';
import Deals from './features/deals/dealsScreen';
import Chat from './features/chat/chatScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = "Home" component={HomeScreen}/>
        <Tab.Screen name = "Influence" component={Influence}/>
        <Tab.Screen name = "Deals" component={Deals}/>
        <Tab.Screen name = "Chat" component={Chat}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
