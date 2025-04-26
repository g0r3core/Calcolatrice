import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './components/Button';

import Display from './components/Display';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const[currentValue, setCurrentValue] = useState(null);
  const[operator,setOperator] = useState(null);
  const[memory,setMemory] = useState(0);

  const handleNumber = (num) => {
    setDisplayValue(displayValue === '0' ? num : displayValue + num);
  };

  const handleClear = () => {
    setDisplayValue('0');
    setCurrentValue(null);
    setOperator(null);
  };

  const handleOperator = (op) => {
    setCurrentValue(parseFloat(displayValue));
    setOperator(op);
    setDisplayValue('0');
  };

  const handleEqual = () => {
    if(currentValue === null || operator === null) return;

    const result = eval(`${currentValue} ${operator} ${parseFloat(displayValue)}`);

    setDisplayValue(result.toString());
    setCurrentValue(null);
    setOperator(null);
  };

  const handleMemoryAdd = () => setMemory(m => m + parseFloat(displayValue));
  const handleMemorySubtract = () => setMemory(m => m - parseFloat(displayValue));
  const handleMemoryRecall = () => setDisplayValue(memory.toString());

  const handleDecimal = () => {
    if(!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.')
    }
  };

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

        <View style={styles.row}>
          <Button title='M+' color='#ffd700' onPress={handleMemoryAdd}/>
          <Button title='M-' color='#ffd700' onPress={handleMemorySubtract}/>
          <Button title='MR' color='#ffd700' onPress={handleMemoryRecall}/>
          <Button title='C' color='#ff4444' onPress={handleClear}/>
        </View>

        <View style={styles.row}>
          <Button title='0' onPress={() => handleNumber('0')} flex={2}/>
          <Button title='.' onPress={handleDecimal}/>
          <Button title='=' color='#4CAF50' onPress={handleEqual}/>
        </View>

        <View style={styles.operationsColumn}>
          {['+','-','*','/'].map((op) => (
            <Button key={op} title={op} color='#2196F3' onPress={() => handleOperator(op)}/>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 8,
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
  operationsColumn: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 8,
  },
});
