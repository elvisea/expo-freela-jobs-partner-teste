import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import { Routes } from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </>
  );
}