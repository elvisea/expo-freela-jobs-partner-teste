import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStackRoutes } from './stack.home.routes';
import { ProfileStackRoutes } from './stack.profile.routes';
import { WalletStackRoutes } from './stack.wallet.routes';
import { FreelasStackRoutes } from './stack.freelas.routes';
import { ChatStackRoutes } from './stack.chat.routes';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <>
      <StatusBar style="dark" />
      <Tab.Navigator>
        <Tab.Screen
          name='Home Stack'
          component={HomeStackRoutes}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name='Perfil'
          component={ProfileStackRoutes}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name='Carteira'
          component={WalletStackRoutes}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name='Freelas'
          component={FreelasStackRoutes}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name='Chat'
          component={ChatStackRoutes}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  )
}

export { TabRoutes }