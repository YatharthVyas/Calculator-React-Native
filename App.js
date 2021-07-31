import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CalculatorView from './src/views/Calculator';

export default function App() {
  return (
    <View style={styles.container}>
      <CalculatorView/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    flexGrow: 1,
  },
});
