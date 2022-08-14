import * as React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-paper';
import StyleClubFeed from '../../components/styleClubFeed';
import VouchersData from '../../components/vouchersData';

export default function Deals() {
  return (
    <View style={styles.dealScreenStyle}>
      <ScrollView>
        <Text style={styles.headerStyle}>DEALS AND VOUCHERS</Text>
        <VouchersData/>
        <View style={styles.boxStyle}>
          <Text style={styles.textStyle}>TOTAL MONEY SAVED</Text>
          <Text style={styles.financeTextStyle}>2460.21</Text>
        </View>
        <StyleClubFeed feedCategorie='REDEEM YOUR VOUCHERS'/>
        <View style={styles.blogBoxStyle}>
          <Text style={styles.blogTextStyle}>Easy way to save more</Text>
          <Text style={styles.blogSubTextStyle}>invite friends, earn vouchers</Text>
        </View>
        <View style={styles.boxStyle}>
          <Text style={styles.textStyle}>VIEW PAST VOUCHERS</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  dealScreenStyle: { 
      flex: 1, 
      justifyContent: 'center', 
      backgroundColor: '#718598',
      paddingLeft: 10,
      paddingTop: 40
  },
  headerStyle: {
    fontSize: 24,
    color: '#E9DA96',
    fontFamily: 'Avenir_Black'
  },
  boxStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#273A4F',
    width: 327,
    height: 55,
    borderColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 20
  },
  textStyle: {
    fontSize: 12,
    color: '#E9DA96',
    paddingHorizontal: 20,
    fontFamily: 'Avenir',
  },
  blogTextStyle: {
    fontSize: 16,
    fontFamily: 'Avenir_Black',
    color: '#5D2D00',
  },
  blogSubTextStyle: {
    fontSize: 12,
    fontFamily: 'Avenir',
    color: '#5D5D5D',
  },
  financeTextStyle: {
    fontSize: 16,
    color: '#7DFF5D',
    paddingHorizontal: 20,
    fontFamily: 'Avenir_Black',
  },
  blogBoxStyle: {
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#E9DA96',
    width: 327,
    height: 137,
    marginBottom: 20,
    borderRadius: 7.85276,
    borderWidth: 2,
    borderColor: 'rgba(112, 60, 0, 0.4)',
  },
});