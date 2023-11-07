/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { Counter } from './src/screens/Counter';
import { BoxObjectModel } from './src/screens/BoxObjectModel';
import { SafeAreaView } from 'react-native';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HolaMundoScreen /> */}
      {/* <Counter /> */}
      <BoxObjectModel />
    </SafeAreaView>
  );
};

