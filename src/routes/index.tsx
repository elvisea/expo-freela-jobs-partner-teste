import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./tab.routes";

function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}

export { Routes }
