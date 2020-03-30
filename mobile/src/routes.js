import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LocationAtive from "./pages/LocationAtive";
import NotificationActive from "./pages/NotificationActive";
import Login from "./pages/Login";
import MethodPhone from "./pages/MethodPhone";
import MethodEmail from "./pages/MethodEmail";
import CodeConfirm from "./pages/CodeConfirm";
import Home from "./pages/Home";

const Routes = () => {
  const AppStack = createStackNavigator();
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="LocationActive" component={LocationAtive} />
        <AppStack.Screen
          name="NotificationActive"
          component={NotificationActive}
        />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="methodPhone" component={MethodPhone} />
        <AppStack.Screen name="methodEmail" component={MethodEmail} />
        <AppStack.Screen name="codeConfirm" component={CodeConfirm} />
        <AppStack.Screen name="home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
