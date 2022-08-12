import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function FeedCard() {
  return (
    <View style={styles.category}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/None.png')}
      />
      <View style={styles.detailsStyle}>
        <Text style={styles.titleText}>Men in black together</Text>
        <Text style={styles.detailsText}>Men in black together</Text>
        <Text style={styles.detailsText}>Men in black together</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 146,
        height: 140,
    },
    category: { 
        flex: 1, 
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#FFF' ,
        width: 160,
        height: 207,
        borderRadius: 6.59574,
        marginRight: 10,
    },
    titleText: {
        color: '#000',
        fontSize: 9.89,
        textAlign: 'justify',
        paddingLeft: 10,
    },
    detailsText: {
        fontSize: 9.89,
        color: '#808080',
        textAlign: 'left',
        paddingLeft: 10,
    },
    detailsStyle: {
      justifyContent: 'flex-start'
    },
});