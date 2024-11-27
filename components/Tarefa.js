import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Tarefa = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.esquerdaItemTarefa}>
                <TouchableOpacity style={styles.quadradoItemTarefa}></TouchableOpacity>
                <Text>{props.text}</Text>
            </View>
            <View style={styles.circulo}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    esquerdaItemTarefa: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap', //quebra de linha automática
    },
    quadradoItemTarefa: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    text: {
        maxWidth: '80%',
    },
    circulo: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Tarefa;