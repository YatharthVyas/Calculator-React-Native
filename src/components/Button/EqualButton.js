import React, {useContext} from 'react';
import {TouchableHighlight, StyleSheet, Text} from 'react-native';
import {EquationContext} from '../../context/EquationContext';

// Display Calculator Buttons for each number
export default function EqualButton(props) {
	const {equation, setEquation} = useContext(EquationContext);
	const onNumberClickHander = () =>{
		try{

			/* The below method executes an anonymous function whose body contains the equation.
			*  This method is safer as compared to eval because of `use strict`
			*/
			const result = Function(`'use strict'; return (${equation})`)();
			if (isNaN(result)){
				console.log(1);
				throw Error;
			}
			else{
				setEquation(result);
			}
		}
		catch(error){
			// display toast
		}
	}

	return (
		<TouchableHighlight
			onPress={onNumberClickHander}
			color="#333"
			accessibilityLabel={`Button for evaluating the expression`}
			style={styles.button}
		>
			<Text style={styles.buttonText}>{props.equalsText}</Text>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    minHeight: 80,
    paddingTop: 10,
    backgroundColor: '#9f9',
    textAlign: 'center',
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 40
  }
});