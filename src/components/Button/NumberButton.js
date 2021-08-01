import React, {useContext} from 'react';
import {TouchableHighlight, StyleSheet, Text} from 'react-native';
import {EquationContext} from '../../context/EquationContext';

// Display Calculator Buttons for each number
export default function NumberButton(props) {
	const {equation, setEquation} = useContext(EquationContext);
	const onNumberClickHander = () =>{
		if (equation==='Invalid Equation'){
			setEquation(props.number);
		}
		else{
			setEquation(equation + props.number);
		}
	}

	return (
		<TouchableHighlight
			onPress={onNumberClickHander}
			color="#333"
			accessibilityLabel={`Input Button for Nummber ${props.number}`}
			style={styles.button}
		>
			<Text style={styles.buttonText}>{props.number}</Text>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    minHeight: 80,
    paddingTop: 10,
    backgroundColor: '#aaa',
    textAlign: 'center',
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 40
  }
});