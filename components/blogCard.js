import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function BlogCard() {
  return (
    <View style={styles.category}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/None.png')}
      />
      <View style={styles.details}>
        <Text>TOP 10 HAIRCUTS OF JULY</Text>
        <Text>Do you know that the comb over is the most versatile haircut? If you are about to freshen up your look and you still don’t know what cut to choose, this article is for you. </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 320,
        height: 125.64,
        borderRadius: 6.28,
    },
    category: { 
        width: 320,
        height: 185.64,
        flex: 1,  
        alignItems: 'center',
        backgroundColor: '#FFECC8',
        borderRadius: 6.28, 
    },
    details: { 
      width: 247.36,
      height: 65.77,
      flex: 1,  
      alignItems: 'center',
      backgroundColor: '#FFE8A6',
      borderRadius: 6.28,
      borderColor: '#472200',
      padding: 10,
  },
});