import React from "react";

import Route from "./src/routes";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Route />
    </>
  );
}
