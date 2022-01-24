import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { peopleService } from "../services/people.service";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import * as MailComposer from "expo-mail-composer";

export const Person = () => {
  const route = useRoute();

  const [person, setPerson] = useState({});

  useEffect(() => {
    (async () => {
      const response = await peopleService.getById(route.params.id);
      setPerson(response.data);
    })();
  }, []);

  const sendMail = async () => {
    const isAvailable = await MailComposer.isAvailableAsync();
    if (!isAvailable) {
      Alert.alert("Warning", "No se puede enviar el mail");
      return;
    }

    await MailComposer.composeAsync({
      body: "prueba - body",
      recipients: ["leo2001.nl08@gmail.com"],
      subject: "Envio de prueba",
    });
  };

  return (
    <View>
      <View>
        <Image source={{ uri: person.img }} style={styles.img} />
      </View>

      <View style={styles.containerInfo}>
        <Text> {person.name} </Text>
        <Text>
          <FontAwesome name="phone" size={24} color="black" />
          {person.phone}
        </Text>
        <TouchableOpacity onPress={sendMail}>
          <Text>
            <Ionicons name="mail" size={24} color="black" />
            {person.email}
          </Text>
        </TouchableOpacity>
        <Text> {person.region} </Text>
        <Text> {person.text} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },

  containerInfo: {
    padding: 20,
  },
});
