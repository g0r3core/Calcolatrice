import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './components/Button';

import Display from './components/Display';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const[currentValue, setCurrentValue] = useState(null);
  const[operator,setOperator] = useState(null);
  const[memory,setMemory] = useState([]);

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

  const handleMemoryAdd = () => {
    const num = parseFloat(displayValue);
    if(!isNaN(num)){
      setMemory(prev => [...prev,num]);
    }
  };

  const handleMemorySubtract = () => {
    const num = parseFloat(displayValue);
    if(!isNaN(num)){
      setMemory(prev => prev.filter(n => n !== num));
    }
  };

  const handleMemoryRecall = () => {
    if(memory.length === 0){
      setDisplayValue('Memoria Vuota');
    }else{
      setDisplayValue(memory.join(', '));
    }
  };

  const handleDecimal = () => {
    if(!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.')
    }
  };

  return (
    <View style={styles.container}>
      <Display value={displayValue} />

      <View style={styles.row}>
        <Button title="M+" color="#ffd700" onPress={handleMemoryAdd} />
        <Button title="M-" color="#ffd700" onPress={handleMemorySubtract} />
        <Button title="MR" color="#ffd700" onPress={handleMemoryRecall} />
        <Button title="C" color="#ff4444" onPress={handleClear} />
      </View>
      
      <View style={styles.keypad}>
        <View style={styles.leftPanel}>
          {[['7','8','9'], ['4','5','6'], ['1','2','3']].map((row, i) => (
            <View key={i} style={styles.row}>
              {row.map(num => (
                <Button key={num} title={num} onPress={() => handleNumber(num)} />
              ))}
            </View>
          ))}
          
          <View style={styles.row}>
            <Button title="0" onPress={() => handleNumber('0')} flex={2} />
            <Button title="." onPress={handleDecimal} />
          </View>
        </View>

        <View style={styles.operationsColumn}>
          {['+', '-', '×', '÷'].map(op => (
            <Button key={op} title={op} color="#2196F3" onPress={() => handleOperator(op)}/>
          ))}
          <Button title="=" color="#4CAF50" onPress={handleEqual} flex={1} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
    justifyContent: 'flex-start',
  },
  keypad: {
    flex: 7,
    flexDirection: 'row',
    gap: 8,
  },
  leftPanel: {
    flex: 3,
    justifyContent: 'space-between',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    minHeight: 80,
  },
  operationsColumn: {
    flex: 1,
    justifyContent: 'space-between',
  },
});