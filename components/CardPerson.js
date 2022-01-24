import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalStyle } from "../styles/global";

export const CardPerson = ({ data }) => {
  const navigation = useNavigation();
  const detail = (id) => {
    navigation.navigate("PersonDetail", { id });
  };

  return (
    <View style={styles.card}>
      <View style={globalStyle.center}>
        <Image
          source={{
            uri: data.img,
          }}
          style={styles.img}
        />
        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text style={styles.title}>{data.name}</Text>
          <Text>{data.phone}</Text>
          <Text>{data.country}</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={globalStyle.btn}
          onPress={() => detail(data.id)}
        >
          <Text style={globalStyle.textBtn}>Detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    borderRadius: 100,
    width: 100,
    height: 100,
    resizeMode: "cover",
  },

  card: {
    width: 160,
    margin: 5,
    backgroundColor: "#9CE0AC",
    padding: 15,
    borderRadius: 10,
  },

  title: {
    fontWeight: "bold",
  },
});
