import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, TextInput } from 'react-native';
import Tarefa from './components/Tarefa';
import { Keyboard } from 'react-native';

export default function App() {

  const [tarefa, setTarefa] = useState();
  const [tarefas, setListaDeTarefas] = useState([]);

  const adicionarTarefa = () => {
    Keyboard.dismiss();
    setListaDeTarefas([...tarefas, tarefa]);
    setTarefa(null);
  }

  const finalizarTarefa = (index) => {
    let copiaDaLista = [...tarefas]; {/* Essa linha copia a lista de tarefas */}
    copiaDaLista.splice(index, 1); {/* Essa linha remove a tarefa que está na posição do index, sem adicionar nada no lugar */}
    setListaDeTarefas(copiaDaLista); {/* Essa linha muda o estado da lista de tarefas (tarefas) para a copiaDaLista, ou seja, atualiza a lista */}
  }

  return (
    <View style={styles.container}>
      <View style={styles.tarefasWrapper}>
        <Text style={styles.tituloSection}>TarefasApp</Text>

        {/* Tarefas vão aparecer aqui */}
        <View style={styles.tarefas}>

          {/*Iterar a listaDeTarefas e gerar uma <Tarefa> */}
          {
            tarefas.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => finalizarTarefa()}>
                  <Tarefa text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      {/* Incluir uma tarefa */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.areaInsecaoTarefas}>
        <TextInput style={styles.inputTarefa} placeholder='Descrição da tarefa' value={tarefa} onChangeText={texto => setTarefa(texto)}></TextInput>

        <TouchableOpacity onPress={() => adicionarTarefa()}>
          <View style={styles.btnAdicionar}>
            <Text style={styles.btnAddTexto}>+</Text> {/* poderia adicionar um ícone */}
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  tarefasWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  tituloSection: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  tarefas: {
    marginTop: 10,
  },
  areaInsecaoTarefas: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  inputTarefa: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '75%',
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  btnAdicionar: {
    width: 60,
    height: 60,
    backgroundColor: 'fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  btnAddTexto: {

  },
});
