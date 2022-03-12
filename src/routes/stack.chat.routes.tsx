import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Chat } from '../screens/Chat';

const Stack = createNativeStackNavigator();

function ChatStackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Chat">
      <Stack.Screen
        name="Conversas"
        component={Chat}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export { ChatStackRoutes }