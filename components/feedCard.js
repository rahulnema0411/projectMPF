import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function FeedCard() {
  return (
    <View style={styles.category}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/circle.png')}
      />
      <Text>hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
    },
    category: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column' 
    },
});