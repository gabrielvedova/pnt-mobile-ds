import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Input from "./Input";
import Hello from "./Hello";

export default function Main() {
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(false);
  return (
    <View style={styles.container}>
      {isName ? (
        <>
          <Hello name={name} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setIsName(!isName);
              setName("");
            }}
          >
            <Text>Voltar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Input name={name} setName={setName} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setIsName(!isName);
              console.log(typeof name, name);
              console.log("Nome: ", name);
            }}
          >
            <Text>Enviar</Text>
          </TouchableOpacity>
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});
