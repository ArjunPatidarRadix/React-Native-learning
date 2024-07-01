import React from 'react';
import {RootStackNavigator} from './src/navigation/RootStackNavigator';
import GLobalState from './src/context';

const App = () => {
  return (
    <GLobalState>
      <RootStackNavigator />
    </GLobalState>
  );
};

export default App;
