import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {EquationContext} from '../../context/EquationContext';

export default function InputDisplay () {
  const {equation, setEquation} = useContext(EquationContext);
	return(
		<View style={styles.container}>
			<Text style={styles.displayText}>{equation}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    padding: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    marginBottom: 15,
    minHeight: 200
  },
  headText: {
  	fontSize: 40,
    fontFamily: 'Copperplate',
  }
});