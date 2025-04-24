import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Display from './components/Display';
import { Button } from 'react-native-paper';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');

  return (
    <View style={styles.container}>
      <Display value = {displayValue} />

      <View style={styles.keypad}>
        <View style={styles.row}>
          {['7','8','9'].map((num) => (
            <Button
            key={num}
            title={num}
            onPress={() => handleNumber(num)}
            />
          ))}
        </View>

        <View style={styles.row}>
          {['4','5','6'].map((num) => (
            <Button
              key={num}
              title={num}
              onPress={() => handleNumber(num)}
              />
          ))}
        </View>

        <View style={styles.row}>
          {['1','2','3'].map((num) => (
            <Button
              key={num}
              title={num}
              onPress={() => handleNumber(num)}
            />
          ))}
        </View>
      </View>
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
  keypad: {
    flex: 5,
    justifyContent: 'space-around',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});
