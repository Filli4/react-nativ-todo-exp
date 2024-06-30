import React, { useState, useContext } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TodoContext } from '../TodoContext';

export default function Add({ navigation }) {
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { setTodos } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim() === '') {
      setErrorMessage('Enter a Todo!');
    } else {
      setTodos(prevTodos => [
        ...prevTodos,
        { id: Math.random().toString(), text },
      ]);
      setText('');
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="New todo"
        value={text}
        onChangeText={setText}
        multiline={true}
        numberOfLines={4}
      />
      {errorMessage !== '' && <Text style={styles.errorText}>{errorMessage}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30,
    width: '100%',
    borderRadius: 10,
    height: 90,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    padding: 5,
  },
});
