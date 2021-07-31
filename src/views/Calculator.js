import React from 'react';
import {StyleSheet, View} from 'react-native';
// Topbar
import Topbar from '../components/Topbar/Topbar';
import InputDisplay from '../components/InputDisplay/InputDisplay';
// Context
import EquationContextProvider from '../context/EquationContext'

export default function CalculatorView () {
	return(
		<EquationContextProvider>
			<View style={styles.container}>
				<View style={styles.topbar}>
					<Topbar title={'Calculator'}/>
				</View>
				<View style={styles.topbar}>
					<InputDisplay />
				</View>
			</View>
		</EquationContextProvider>
	);
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  topbar: {
  	flexGrow: 1
  }
});