import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PendingTaskScreen from './screens/PendingTaskScreen';
import { store } from './redux/store';
import DrawerContent from "./components/shared/DrawerContent"

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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

  const loadAssetsAsync = async () => {
    await SplashScreen.hideAsync();
  };

  useEffect(() => {
    if (fontsLoaded) {
      loadAssetsAsync().then(() => setAppIsReady(true));
    }
  }, [fontsLoaded]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
          <Stack.Screen name="Main" options={{ headerShown: false }}>
            {() => (
              <Drawer.Navigator
                initialRouteName="Home"
                drawerContent={(props) => <DrawerContent {...props}
                />}
              >
                <Drawer.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
                <Drawer.Screen name="Pending" options={{ headerShown: false }} component={PendingTaskScreen} />
              </Drawer.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
