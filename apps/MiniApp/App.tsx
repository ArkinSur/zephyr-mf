import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function App(): React.JSX.Element {

  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text
        style={[
          styles.buttonText
        ]}>
        Click
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: "#fff"
  },
});

export default App;
