import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Topbar (props) {
	return(
		<View style={styles.topbarContainer}>
			<Text style={styles.headText}>{props.title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
  topbarContainer: {
    flex: 1,
    backgroundColor: '#CFCFCF',
    fontSize: 20,
    paddingBottom: 5,
    paddingTop: 15,
    paddingLeft: 20,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  headText: {
  	fontSize: 45,
    fontFamily: 'Arial',
  }
});