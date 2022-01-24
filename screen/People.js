import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { peopleService } from "../services/people.service";
import { CardPerson } from "../components/CardPerson";
import { globalStyle } from "../styles/global";
export const People = () => {
  const [peopleItems, setPeopleItems] = useState([]);

  const loadData = async () => {
    const response = await peopleService.getAll();
    setPeopleItems(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View>
      <FlatList
        style={styles.containerList}
        contentContainerStyle={{
          alignItems: "center",
        }}
        data={peopleItems}
        keyExtractor={(person) => person.id}
        renderItem={(person) => <CardPerson data={person.item} />}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerList: {
    padding: 10,
    backgroundColor: "#fff",
  },
});
