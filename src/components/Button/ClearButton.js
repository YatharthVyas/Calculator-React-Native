import React, {useContext} from 'react';
import {TouchableHighlight, StyleSheet, Text} from 'react-native';
import {EquationContext} from '../../context/EquationContext';

// Display Calculator Buttons for each number
export default function ClearButton(props) {
	const {equation, setEquation} = useContext(EquationContext);
	const onNumberClickHander = () =>{
		setEquation('');
	}

	return (
		<TouchableHighlight
			onPress={onNumberClickHander}
			color="#333"
			accessibilityLabel={'Input button for clearing the expression'}
			style={styles.button}
		>
			<Text style={styles.buttonText}>{props.clearText}</Text>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    minHeight: 80,
    paddingTop: 10,
    backgroundColor: '#f88',
    textAlign: 'center',
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 40
  }
});