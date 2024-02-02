import { GluestackUIProvider } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { config } from "@gluestack-ui/config";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/components/Navigation";
import Movies from "./src/layout/Movies";
import TVShows from "./src/layout/TVShows";
import ItemDetail from "./src/layout/ItemDetail";
import SearchResult from "./src/layout/SearchResult";

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Navigation}
              options={{
                title: "Movies App",
                headerStyle: {
                  backgroundColor: "#2a355e",
                },
                headerTitleStyle: {
                  color: "white",
                },
                headerTitleAlign: "center",
              }}
            />

            <Stack.Screen name="Movies" component={Movies} />
            <Stack.Screen name="TVShows" component={TVShows} />
            <Stack.Screen name="Search Results" component={SearchResult} />

            <Stack.Screen
              name="ItemDetail"
              component={ItemDetail}
              options={{
                headerStyle: {
                  backgroundColor: "#2a355e",
                },
                headerTitleStyle: {
                  color: "white",
                },
                headerTitleAlign: "center",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
};

export default App;
