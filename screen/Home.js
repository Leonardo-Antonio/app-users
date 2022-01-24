import { Button, Image, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { globalStyle } from "../styles/global";
export const Home = () => {
  return (
    <View style={{ padding: 15 }}>
      <View style={{ alignItems: "center", paddingTop: 20, paddingBottom: 20 }}>
        <Image
          source={{
            uri: "https://storage.googleapis.com/gopherizeme.appspot.com/gophers/0f1736136b4fcbea61798f9d4d04a6b01f4a05ad.png",
          }}
          style={styles.img}
        />
      </View>
      <Text style={[globalStyle.h1, globalStyle.textCenter]}>
        Agenda de usuarios
      </Text>
      <Text style={{ paddingTop: 10 }}>
        Deserunt eu veniam do do do sunt eu qui deserunt. Ut sunt ullamco
        commodo officia amet cillum cupidatat veniam. Nulla eiusmod laboris
        consequat aliquip mollit officia commodo nisi. Anim voluptate minim amet
        laborum minim commodo duis ex esse eiusmod nostrud adipisicing ut minim.
        Duis ut laboris voluptate enim ullamco dolor irure. Pariatur
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ width: "49%" }}>
          <Button title="React" color="#CACACA" />
        </View>
        <View style={{ width: "49%" }}>
          <Button title="Golang" color="#000" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "80%",
    height: 200,
  },
});
