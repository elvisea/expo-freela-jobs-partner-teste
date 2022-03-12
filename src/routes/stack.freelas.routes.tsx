import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Freelas } from '../screens/Freelas';

const Stack = createNativeStackNavigator();

function FreelasStackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Freelas">
      <Stack.Screen
        name="Freelas"
        component={Freelas}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export { FreelasStackRoutes }