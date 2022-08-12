import * as React from 'react';
import { View , StyleSheet, ScrollView} from 'react-native';
import StyleCategory from '../../components/styleCategory';
import StyleClubBlog from '../../components/styleClubBlog';
import StyleClubFeed from '../../components/styleClubFeed';
import UserProfile from '../../components/userProfile';

export default function HomeScreen() {
  return (
    <View style={styles.homeScreenStyle}>
      <ScrollView>
        <UserProfile/>
        <StyleCategory/>
        <StyleClubFeed feedCategorie='LATEST AT STYLE CLUB'/>
        <StyleClubFeed feedCategorie='TOP DEALS AND PACKAGES'/>
        <StyleClubFeed feedCategorie='TOP TRENDING HAIRCUTS'/>
        <StyleClubBlog/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreenStyle: { 
      flex: 1, 
      justifyContent: 'center', 
      backgroundColor: '#718598',
      paddingHorizontal: 20,
  },
});