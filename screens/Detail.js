import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TodoContext } from '../TodoContext';

export default function Detail({ route, navigation }) {
  const { todos, setTodos } = useContext(TodoContext);
  const { itemId, itemIndex } = route.params;
  const item = todos.find(todo => todo.id === itemId);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.itemText}>Todo item not found.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleDelete = () => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== item.id));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.itemText}>{`${itemIndex}. ${item.text}`}</Text>
      <TouchableOpacity style={styles.button} onPress={handleDelete}>
        <Text style={styles.buttonText}>Delete</Text>
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
    padding: 20,
  },
  itemText: {
    fontSize: 16,
    width: '95%',
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  button: {
    width: '95%',
    padding: 15,
    marginTop: 20,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});
