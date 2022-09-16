import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text >Hello there!</Text>
      <StatusBar style="auto" />
      <Text style={styles.counter}>Siz tugmani {count} marta bosdingiz</Text>
      <Button onPress={() => setCount(count + 1)}  title="Tugmani bosing" />
      <Button onPress={() => setCount(0)} title="Sbros" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: '24px',
    justifyContent: 'center',
    color: 'tomato',
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 24
  }
});
