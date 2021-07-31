import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// Buttons
import NumberButton from '../Button/NumberButton';
import OperatorButton from '../Button/OperatorButton';
import ClearButton from '../Button/ClearButton';
import EqualButton from '../Button/EqualButton';

export default function KeypadV () {
	return(
		<View style={styles.keypadContainer}>
      <View style={styles.keypadRow}>
  			<NumberButton number={'1'}/>
        <NumberButton number={'2'}/>
        <NumberButton number={'3'}/>
        <OperatorButton operator={'+'}/>
      </View>
      <View style={styles.keypadRow}>
        <NumberButton number={'4'}/>
        <NumberButton number={'5'}/>
        <NumberButton number={'6'}/>
        <OperatorButton operator={'-'}/>
      </View>
      <View style={styles.keypadRow}>
        <NumberButton number={'7'}/>
        <NumberButton number={'8'}/>
        <NumberButton number={'9'}/>
        <OperatorButton operator={'*'}/>
      </View>
      <View style={styles.keypadRow}>
        <NumberButton number={'0'}/>
        <NumberButton number={'.'}/>
        <ClearButton clearText={'AC'}/>
        <OperatorButton operator={'/'}/>  
      </View>
      <View style={styles.keypadRow}>
        <EqualButton equalsText={'='}/>
      </View>
		</View>
	);
}

const styles = StyleSheet.create({
  keypadContainer: {
    flex: 1,
    backgroundColor: '#CFCFCF',
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    flexDirection: 'column'
  },
  keypadRow: {
    flex: 1,
    flexDirection: 'row'
  }
});