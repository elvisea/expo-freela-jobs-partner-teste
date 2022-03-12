import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Profile } from '../screens/Profile';

const Stack = createNativeStackNavigator();

function ProfileStackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export { ProfileStackRoutes }