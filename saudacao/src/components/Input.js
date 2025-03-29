import React from "react";
import { Text, TextInput, StyleSheet } from "react-native";

export default function Input({ name, setName }) {
  return (
    <>
      <Text style={styles.title}>Digite seu Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 200,
  },
  title: {
    fontSize: 20,
  },
});
