import { Button, Text, TextInput, View } from "react-native";
import { globalStyle } from "../styles/global";
import { useState } from "react";

export const NewPerson = () => {
  const [name, setName] = useState("");
  return (
    <View style={[globalStyle.center, { padding: 20 }]}>
      <TextInput
        onChangeText={(text) => setName(text)}
        placeholder="Nombre"
        keyboardType="ascii-capable"
        style={globalStyle.input}
      />

      <TextInput
        onChangeText={(text) => setName(text)}
        placeholder="Apellido"
        keyboardType="ascii-capable"
        style={globalStyle.input}
      />

      <TextInput
        onChangeText={(text) => setName(text)}
        placeholder="Email"
        keyboardType="email-address"
        style={globalStyle.input}
      />

      <TextInput
        onChangeText={(text) => setName(text)}
        placeholder="Phone"
        keyboardType="phone-pad"
        style={globalStyle.input}
      />

      <Button title="Guardar" onPress={() => console.log(name)} />
    </View>
  );
};
