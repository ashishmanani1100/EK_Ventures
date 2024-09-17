import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/redux/store';
import RNBootSplash from "react-native-bootsplash";
import Navigation from './src/navigation';

const App = () => {

  useEffect(() => {
    const init = async () => {
      // Performing initial task while app is loading
    };
    init().finally(() => {
      setTimeout(async () => {
        // Hide the splash screen on initial process
        await RNBootSplash.hide({ fade: true });
      }, 3000);
    });
  }, []);

  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </StoreProvider>
  )
}

export default App