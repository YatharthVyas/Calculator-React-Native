import React, {useContext} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {EquationContext} from '../../context/EquationContext';

export default function InputDisplay () {
  const {equation, setEquation} = useContext(EquationContext);
	return(
    <ScrollView
      style={{ flex: 1 }}
      horizontal={true}
      scrollEnabled={true}
      automaticallyAdjustContentInsets={true}
      style={styles.container}
    >
  		<View>
  			<Text style={styles.displayText}>{equation}</Text>
  		</View>
    </ScrollView>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    paddingTop: 100,
    paddingRight: 20,
    paddingLeft: 20,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    minHeight: 200,
    flexDirection: 'row-reverse'
  },
  displayText: {
  	fontSize: 40,
    fontFamily: 'Copperplate',
    alignSelf: 'flex-end',
    overflowX: 'scroll',
  }
});