import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles/styles';

export default function App() {
  const [tarea, setTarea] = useState('');
  const [listaTareas, setListaTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim() === '') return;
    setListaTareas([...listaTareas, tarea]);
    setTarea('');
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = listaTareas.filter((_, i) => i !== index);
    setListaTareas(nuevasTareas);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tareas</Text>

      <TextInput
        placeholder="Escribe tu tarea"
        value={tarea}
        onChangeText={setTarea}
        style={styles.input}
      />

      <TouchableOpacity onPress={agregarTarea} style={styles.botonAgregar}>
        <Text style={styles.botonTexto}>Agregar Tarea</Text>
      </TouchableOpacity>

      <ScrollView>
        {listaTareas.map((item, index) => (
          <View key={index} style={styles.tareaContainer}>
            <Text style={styles.tareaTexto}>{item}</Text>
            <TouchableOpacity onPress={() => eliminarTarea(index)} style={styles.botonEliminar}>
              <Text style={styles.botonTexto}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}


