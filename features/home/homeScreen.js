import * as React from 'react';
import { Text, View } from 'react-native';
import StyleCategory from '../../components/styleCategory';
import StyleClubFeed from '../../components/styleClubFeed';
import UserProfile from '../../components/userProfile';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <UserProfile/>
      <StyleCategory/>
      <StyleClubFeed/>
      <StyleClubFeed/>
    </View>
  );
}