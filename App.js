import { StyleSheet } from 'react-native';
import HomeScreen from './features/home/homeScreen';
import Influence from './features/influence/influenceScreen';
import Deals from './features/deals/dealsScreen';
import Chat from './features/chat/chatScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useFonts } from 'expo-font';

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  const [loaded] = useFonts({
    DMSans_Regular: require('./assets/fonts/DMSans-Regular.ttf'),
    DMSans_Bold: require('./assets/fonts/DMSans-Bold.ttf'),
    DMSans_BoldItalic: require('./assets/fonts/DMSans-BoldItalic.ttf'),
    DMSans_Medium: require('./assets/fonts/DMSans-Medium.ttf'),
    DMSans_MediumItalic: require('./assets/fonts/DMSans-MediumItalic.ttf'),
    DMSans_Italic: require('./assets/fonts/DMSans-Italic.ttf'),
    Avenir: require('./assets/fonts/Avenir-Regular.ttf'),
    Avenir_Black: require('./assets/fonts/Avenir-Black.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={{ backgroundColor: '#344153' }}>
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
