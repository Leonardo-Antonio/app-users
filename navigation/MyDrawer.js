import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Home } from "../screen/Home";
import { People } from "../screen/People";
import { Person } from "../screen/Person";
import { globalStyle } from "../styles/global";
import { NewPerson } from "../screen/NewPerson";

const Drawer = createDrawerNavigator();
export const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => customDrawerContent(props)}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        options={{
          title: "Lista de usuarios",
        }}
        name="People"
        component={People}
      />
      <Drawer.Screen
        options={{
          title: "Detalle del usuario",
        }}
        name="PersonDetail"
        component={Person}
      />

      <Drawer.Screen
        options={{
          title: "Nuevo usuario",
        }}
        name="NewPerson"
        component={NewPerson}
      />
    </Drawer.Navigator>
  );
};

const customDrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "90%" }}>
        <DrawerContentScrollView {...props}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={{
                uri: "https://miro.medium.com/max/340/1*u4KnqEio0EmeHotVtiwMTA.png",
              }}
              style={styles.img}
            />
          </View>

          <TouchableOpacity
            style={globalStyle.btnNav}
            onPress={() => props.navigation.navigate("Home")}
          >
            <Text style={globalStyle.textBtn}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={globalStyle.btnNav}
            onPress={() => props.navigation.navigate("People")}
          >
            <Text style={globalStyle.textBtn}>People</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={globalStyle.btnNav}
            onPress={() => props.navigation.navigate("NewPerson")}
          >
            <Text style={globalStyle.textBtn}>Nuevo usuario</Text>
          </TouchableOpacity>
        </DrawerContentScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
  },
});
