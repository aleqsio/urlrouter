import * as React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";

// You can import from local files
import {
  NativeRouter,
  StackNavigator,
  Route,
  getInitialHistoryForPath,
  Link,
} from "react-native-url-router";
import { Outlet, Routes } from "react-router";
// or any pure javascript modules available in npm

import { Dimensions } from "react-native";

export default function App() {
  const Navigator =
    Dimensions.get("window").width >= 600 ? Routes : StackNavigator;

  return (
    <NativeRouter
      initialHistory={getInitialHistoryForPath("chats")}
      attachWebURLOn="/"
    >
      <Navigator>
        <Route path="/" element={<Text>Root</Text>} />
        <Route
          title="Chats"
          path="chats"
          element={
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                paddingTop: Platform.OS === "web" ? 0 : 140,
              }}
            >
              <View style={{ flexGrow: 1 }}>
                <Text>List of Chats</Text>
                <Link to="/chats">
                  <Text>Close</Text>
                </Link>
                <Link to="/chats/1">
                  <Text>Chat 1 link</Text>
                </Link>
                <Link to="/chats/2">
                  <Text>Chat 2 link</Text>
                </Link>
              </View>
              <Outlet />
            </View>
          }
        >
          <Route
            title="Chat 1"
            path="1"
            element={
              <View
                style={{
                  flexGrow: 1,
                  backgroundColor: "#eeeeff",
                  paddingTop: Platform.OS === "web" ? 0 : 140,
                }}
              >
                <Text>Chat1</Text>
              </View>
            }
          ></Route>
          <Route
            title="Chat 2"
            path="2"
            element={
              <View
                style={{
                  flexGrow: 1,
                  backgroundColor: "#eeffee",
                  paddingTop: Platform.OS === "web" ? 0 : 140,
                }}
              >
                <Text>Chat2</Text>
              </View>
            }
          ></Route>
        </Route>
      </Navigator>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
