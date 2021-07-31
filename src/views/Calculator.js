import React from 'react';
import {StyleSheet, View} from 'react-native';
// Topbar
import Topbar from '../components/Topbar/Topbar';
import InputDisplay from '../components/InputDisplay/InputDisplay';
import KeypadView from '../components/Keypad/Keypad';
// Context
import EquationContextProvider from '../context/EquationContext'

export default function CalculatorView () {
	return(
		<EquationContextProvider>
			<View style={styles.container}>
				<View style={styles.topbar}>
					<Topbar title={'Calculator'}/>
				</View>
				<View style={styles.inputDisplay}>
					<InputDisplay />
				</View>
				<View style={styles.keypad}>
					<KeypadView />
				</View>
			</View>
		</EquationContextProvider>
	);
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  topbar: {
  	flexGrow: 1
  },
  inputDisplay: {
  	flexGrow: 2
  },
  keypad: {
  	flexGrow: 4
  }
});