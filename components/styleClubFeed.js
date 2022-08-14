import * as React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import FeedCard from './feedCard';

export default function StyleClubFeed(props) {
  return (
    <View style={styles.feedContainer}>
        <Text style={styles.headerStyle}>{props.feedCategorie}</Text>
        <ScrollView horizontal={true}>
            {feedData.map((item) => {
                return <FeedCard key={item.key}/>
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
        paddingVertical: 28,
    },
    headerStyle: {
        position: 'absolute',
        width: 200,
        height: 20,
        left: 0,
        top: 0,
        fontSize: 11.4303,
        color: '#E9DA96',
        height: 19,
        fontFamily: 'Avenir_Black'
    }
});

const feedData = [
    {title: 'Men in black together', key: '1'},
    {title: 'Men in black together', key: '2'},
    {title: 'Men in black together', key: '3'},
    {title: 'Men in black together', key: '4'},
    {title: 'Men in black together', key: '5'},
    {title: 'Men in black together', key: '6'},
    {title: 'Men in black together', key: '7'},
    {title: 'Men in black together', key: '8'},
];