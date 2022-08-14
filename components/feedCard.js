import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function FeedCard() {
  return (
    <View style={styles.category}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `https://picsum.photos/id/${parseInt(Math.random() * 200)}/256/256.jpg`,
        }}
      />
      <View style={styles.detailsStyle}>
        <Text style={styles.titleText}>Men in black together</Text>
        <Text style={styles.detailsText}>500+ attending</Text>
        <Text style={styles.detailsText}>Voila, Jubilee Hills</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 146,
        height: 146,
        marginLeft: 7,
        marginBottom: 7
    },
    category: { 
        flex: 1, 
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#FFF',
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
        fontFamily: 'DMSans_Medium',
    },
    detailsText: {
        fontSize: 9.89,
        color: '#808080',
        textAlign: 'left',
        paddingLeft: 10,
        fontFamily: 'DMSans_Medium',
    },
    detailsStyle: {
      justifyContent: 'flex-start',
      marginLeft: -2
    },
});