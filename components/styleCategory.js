import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Category from './category';

export default function StyleCategory() {
  return (
    <View style={styles.categoriesContainer}>
        <Text style={styles.headerStyle}>SELECT A CATEGORY</Text>
        <View style={styles.categories}>
            <Category categorieName='GROOMING'/>
            <Category categorieName='STYLE'/>
            <Category categorieName='SHOP'/>
            <Category categorieName='PRIVILAGE'/>
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
    categoriesContainer: { 
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
        color: '#E9DA96',
        height: 19,
        fontFamily: 'Avenir_Black'
    }
});