import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function UserProfile() {
  return (
    <View style={styles.profile}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `https://picsum.photos/id/${parseInt(Math.random() * 200)}/256/256.jpg`,
        }}
      />
      <View style={styles.profileSub}>
        <Text style={styles.greetingText}>hello rahul!</Text>
        <Text style={styles.subscriptionText}>premium</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 36.46,
        height: 36.46,
        marginTop: 36,
        marginRight: 10,
        borderRadius: 100
    },
    profile: { 
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row',
        paddingVertical: 20,
    },
    profileSub: { 
        flex: 1, 
        alignItems: 'flex-start', 
        flexDirection: 'column' 
    },
    greetingText: {
        position: 'absolute',
        width: 60,
        height: 20,
        left: 0,
        top: 0,
        fontSize: 10.9374,
        fontFamily: 'DMSans_Medium',
        color: '#FFF',
        height: 19,
    },
    subscriptionText: {
        position: 'absolute',
        width: 54,
        height: 20,
        left: 0,
        top: 18.28,
        fontSize: 10.9374,
        fontWeight: 'normal',
        color: '#E9DA96',
        height: 19,
        fontFamily: 'DMSans_Regular',
    },
});