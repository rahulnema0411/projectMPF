import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Category from './category';

export default function StyleCategory() {
  return (
    <View style={styles.bgStyle}>
        <Text>Select A Category</Text>
        <View style={styles.categories}>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
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