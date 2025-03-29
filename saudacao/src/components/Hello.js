import React from "react";
import { Text, StyleSheet, Image } from "react-native";

export default function Hello({ name }) {
  return (
    <>
      <Text style={styles.title}>Bem Vindo {name}!</Text>
      <Image
        source={{
          uri: "https://www.sescsp.org.br/wp-content/uploads/2024/03/scorsese-1024x868.jpeg",
        }}
        style={styles.image}
      />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  image: {
    width: 150,
    height: 150,
    margin: 15,
  },
});
