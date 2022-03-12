import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Wallet } from '../screens/Wallet';

const Stack = createNativeStackNavigator();

function WalletStackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Wallet">
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export { WalletStackRoutes }