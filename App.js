import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Display from './components/Display';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');

  return (
    <View style={styles.container}>
      <Display value = {displayValue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'flex-start',
  },
});
