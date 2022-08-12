import * as React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import FeedCard from './feedCard';

export default function StyleClubFeed(props) {
  return (
    <View style={styles.feedContainer}>
        <Text style={styles.headerStyle}>{props.feedCategorie}</Text>
        <ScrollView horizontal={true}>
            {feedData.map((item) => {
                return <FeedCard/>
            })}
        </ScrollView>
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
    feedContainer: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingVertical: 40,
    },
    headerStyle: {
        position: 'absolute',
        width: 200,
        height: 20,
        left: 0,
        top: 0,
        fontSize: 11.4303,
        fontWeight: 'normal',
        color: '#E9DA96',
        height: 19,
    }
});

const feedData = [
    {title: 'Men in black together', key: '11'},
    {title: 'Men in black together', key: '22'},
    {title: 'Men in black together', key: '33'},
    {title: 'Men in black together', key: '44'},
    {title: 'Men in black together', key: '55'},
    {title: 'Men in black together', key: '66'},
    {title: 'Men in black together', key: '77'},
    {title: 'Men in black together', key: '88'},
];