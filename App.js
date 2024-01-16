import React, {  useEffect, useState ,lazy,Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {  useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import PendingTaskScreen from './screens/PendingTaskScreen';
import CompletedTaskScreen from './screens/CompletedTaskScreen';
import FormScreen from './screens/FormScreen';
import LoginScreen from "./screens/LoginScreen"
import ClientSignatureScreen from './screens/ClientSignatureScreen';
import UpdateTaskScreen from './screens/UpdateTaskScreen';
import DrawerContent from "./components/shared/DrawerContent"
import { store } from './redux/store';
import { auth } from "./firebase";
import { onAuthStateChanged } from 'firebase/auth';
import { userInfoQuery } from './utils/query';
import LoadingScreen from './screens/LoadingScreen';



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
  const [userData, setUserData] = useState(false);
  const [loading, setIsLoading] = useState(false);


  useEffect(() => {
    if (fontsLoaded) {
      loadAssetsAsync().then(() => setAppIsReady(true));
    }
  }, [fontsLoaded]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            const data = await userInfoQuery(user.uid);
            if (data.length > 0 && data[0].role === "employee") {
              setUserData(true);
            }
          } else {
            setUserData(false)
          }
          setIsLoading(false)
        });
        return () => unsubscribe();
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const loadAssetsAsync = async () => {
    await SplashScreen.hideAsync();
  };

  if (!appIsReady) {
    return null;
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {userData ?
            <Stack.Screen name="Main" options={{ headerShown: false }}>
              {() => (
                <Drawer.Navigator
                  initialRouteName="Home"
                  screenOptions={{ swipeEnabled: false }}
                  drawerContent={(props) => <DrawerContent {...props} />}
                >
                  <Drawer.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
                  <Drawer.Screen name="Pending" options={{ headerShown: false }}>
                    {() => (
                      <Stack.Navigator>
                        <Stack.Screen name='PendingTasks' options={{ headerShown: false }} component={PendingTaskScreen} />
                        <Stack.Screen name='UpdateTaskScreen' options={{ headerShown: false }} component={UpdateTaskScreen} />
                        <Stack.Screen name='FormScreen' options={{ headerShown: false }} component={FormScreen} />
                        <Stack.Screen name='ClientSignatureScreen' options={{ headerShown: false }} component={ClientSignatureScreen} />
                      </Stack.Navigator>
                    )}
                  </Drawer.Screen>
                  <Drawer.Screen name="Completed" options={{ headerShown: false }} component={CompletedTaskScreen} />
                </Drawer.Navigator>
              )}
            </Stack.Screen>
            :
            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
          }
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
