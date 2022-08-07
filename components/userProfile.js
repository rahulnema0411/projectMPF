import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function UserProfile() {
  return (
    <View style={styles.profile}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/circle.png')}
      />
      <View style={styles.profileSub}>
        <Text>hey</Text>
        <Text>premium</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
    },
    profile: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row',
        backgroundColor: '#444',
    },
    profileSub: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column' 
    },
});