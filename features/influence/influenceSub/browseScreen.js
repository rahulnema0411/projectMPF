import * as React from 'react';
import { View, StyleSheet, Image, SafeAreaView, Dimensions, Text } from 'react-native';
import Masonry from 'react-native-infinite-masonry';

const vpWidth = Dimensions.get('window').width;


export default function BrowseScreen() {
  return (
    <SafeAreaView style={styles.influenceStyle}>
      <Masonry
        itemsProvider={dataItemProvider}
        renderItem={Item}
        pageSize={10}
      />
    </SafeAreaView>
  );
}

function Item(dataItem, key){

  return ( 
    <View  key={key} style={{...styles.card, height: dataItem.height}}>                                       
      <Image style={styles.img} source={{uri: dataItem.image_url}}/>
      <Text style={styles.textStyle}>Texty text</Text>
    </View>
    );
}

function dataItemProvider(pageSize=10){

  return [...Array(pageSize).keys()].map((i) => {
    return {
      image_url: `https://picsum.photos/id/${parseInt(Math.random() * 200)}/300/400.jpg`,
      height: parseInt(Math.max(0.3, Math.random()) * vpWidth),
      key:i
      };    
    });

}

const styles = StyleSheet.create({
  influenceStyle: { 
      flex: 1, 
      justifyContent: 'center', 
      backgroundColor: '#718598',
  },
  headerStyle: {
    fontSize: 24,
    color: '#E9DA96'
  },
  boxStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#273A4F',
    width: 327,
    height: 55,
    borderColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 20
  },
  textStyle: {
    fontSize: 9.6,
    padding: 6.4,
    fontFamily: 'DMSans_Bold'
  },
  blogTextStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#5D2D00',
  },
  blogSubTextStyle: {
    fontSize: 12,
    color: '#5D5D5D',
  },
  financeTextStyle: {
    fontSize: 16,
    color: '#7DFF5D',
    paddingHorizontal: 20,
  },
  blogBoxStyle: {
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#E9DA96',
    width: 327,
    height: 137,
    borderColor: '#703C00',
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 20
  },
  container: {
    alignContent: 'center',
    alignItems: 'center'
  },
  card: {
    margin: 8,
    width: vpWidth *.5 - 15,  
    shadowColor: "#0000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,  
    backgroundColor: 'white',     
  },
  img: {
    flex: 1,
    margin: 6.4
  },
});