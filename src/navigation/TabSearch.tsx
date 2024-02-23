import { StatusBar } from "react-native";
import { SearchScreen } from "../screens/SearchScreen";
import { PokemonScreen } from "../screens/PokemonScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParams } from "./Navigation";

const TabSearch = createStackNavigator<RootStackParams>();

export const TabSearchScreens = () => {
  return (
    <>
    <StatusBar barStyle={"dark-content"} backgroundColor="transparent" translucent />
    <TabSearch.Navigator
    screenOptions={{
      headerShown:false,
      cardStyle:{
        backgroundColor:'white'
      }
      
    }}
    >
      <TabSearch.Screen name="HomeScreen" component={SearchScreen} />
      <TabSearch.Screen name="PokemonScreen" component={PokemonScreen} />
    </TabSearch.Navigator>
    </>
  );
}
