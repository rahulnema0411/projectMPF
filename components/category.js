import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Category(props) {
  return (
    <View style={styles.category}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/circle.png')}
      />
      <Text style={styles.categoryTextStyle}>{props.categorieName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 63.49,
        height: 63.49,
    },
    category: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        flexDirection: 'column',
    },
    categoryTextStyle: {
      width: 60,
      height: 19,
      top: 10.55,
      color: '#FFFFFF',
      fontSize: 10.58,
      textAlign: 'center'
    },
});