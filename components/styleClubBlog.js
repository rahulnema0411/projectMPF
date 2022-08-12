import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BlogCard from './blogCard';

export default function StyleClubBlog() {
  return (
    <View style={styles.blogCardStyle}>
        <Text style={styles.headerStyle}>HAIRSTYLE BLOG</Text>
        <BlogCard/>
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
    },
    blogCardStyle: { 
        paddingBottom: 40,
    },
    headerStyle: {
        position: 'absolute',
        width: 200,
        height: 20,
        left: 0,
        top: 0,
        fontSize: 11.4303,
        fontWeight: 'normal',
        color: '#E9DA96',
        height: 19,
    }
});