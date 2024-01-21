import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './navigation/Navigation';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';

SplashScreen.preventAutoHideAsync();


const App = () => {

  const [fontsLoaded] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-light': require('./assets/fonts/Poppins-Light.ttf'),
    'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins-extrabold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'lobster-regular': require('./assets/fonts/Lobster-Regular.ttf')
  });

  const [appIsReady, setAppIsReady] = useState(false);


  useEffect(() => {
    if (fontsLoaded) {
      loadAssetsAsync().then(() => setAppIsReady(true));
    }
  }, [fontsLoaded]);


  const loadAssetsAsync = async () => {
    await SplashScreen.hideAsync();
  };

  if (!appIsReady) {
    return null;
  }


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
