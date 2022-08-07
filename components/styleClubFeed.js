import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Category from './category';
import FeedCard from './feedCard';

export default function StyleClubFeed() {
  return (
    <View style={styles.bgStyle}>
        <Text>Latest at style club</Text>
        <View style={styles.categories}>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
    },
    categories: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row' 
    },
    bgStyle: { 
        flex: 1, 
        backgroundColor: '#555',
    },
});