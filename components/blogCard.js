import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function BlogCard() {
  return (
    <View style={styles.category}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `https://picsum.photos/id/${parseInt(Math.random() * 200)}/1024/1024.jpg`,
        }}
      />
      <View style={[styles.floatingCard, styles.shadowProp]}>
        <Text style={styles.header}>TOP 10 HAIRCUTS OF JULY</Text>
        <Text style={styles.details}>Do you know that the comb over is the most versatile haircut? If you are about to...</Text>
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
  floatingCard: { 
    width: 247.36,
    height: 65.77,
    flex: 1,  
    alignItems: 'center',
    backgroundColor: '#FFE8A6',
    borderRadius: 7.85276,
    borderWidth: 0.98,
    borderColor: 'rgba(71, 34, 0, 0.1)',
    padding: 10,
    position: 'absolute',
    marginTop: 100,
  },
  shadowProp: {  
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 20,  
  },  
  header: {
    fontFamily: 'Avenir_Black',
    fontSize: 11.78,
    color: '#723D00',
  },
  details: {
    fontFamily: 'DMSans_Regular',
    fontSize: 9.82,
    color: '#787878'
  }
});