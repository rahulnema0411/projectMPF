import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function VouchersData() {
    return(
    <View style={styles.dealDataStyle}>
        <View style={styles.dealSectionStyle}>
        <Text style={styles.detailsHeaderStyle}>1</Text>
        <Text style={styles.detailsStyle}>ACTIVE</Text>
        </View>
        <View>
        <Text style={styles.detailsHeaderStyle}>6</Text>
        <Text style={styles.detailsStyle}>TOTAL VOUCHERS WON</Text>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 24,
        color: '#E9DA96'
    },
    detailsStyle: {
        fontSize: 12,
        color: '#FFFFFF'
    },
    detailsHeaderStyle: {
        fontSize: 24,
        color: '#FFFFFF'
    },
    dealDataStyle: { 
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'center', 
        backgroundColor: '#718598',
        paddingVertical: 40
    },
    dealSectionStyle: { 
        flex: 1, 
        paddingHorizontal: 20,
    },
});