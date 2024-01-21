import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import PendingTaskScreen from '../screens/PendingTaskScreen';
import CompletedTaskScreen from '../screens/CompletedTaskScreen';
import FormScreen from '../screens/FormScreen';
import LoginScreen from "../screens/LoginScreen"
import ClientSignatureScreen from '../screens/ClientSignatureScreen';
import UpdateTaskScreen from '../screens/UpdateTaskScreen';
import DrawerContent from "../components/shared/DrawerContent"
import { loadAuth } from '../redux/reducers/auth';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { userInfoQuery } from '../utils/query';
import SplashScreenn from '../screens/SplashScreenn';
import { useDispatch } from 'react-redux';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {

    const dispatch = useDispatch();

    const [userData, setUserData] = useState(false);
    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const unsubscribe = onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        const data = await userInfoQuery(user.uid);
                        if (data.length > 0 && data[0].role === "employee") {
                            setUserData(true);
                            dispatch(
                                loadAuth({
                                    role: data[0].role,
                                    uid: data[0].uid,
                                    docId: data[0].id,
                                })
                            )
                        }
                    } else {
                        setUserData(false)
                    }
                    setIsLoading(false)
                });
                return () => unsubscribe();
            } catch (error) {
                console.error("App Error", error);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <SplashScreenn />
        )
    }

    return (

        <NavigationContainer>
            <Stack.Navigator>
                {userData ?
                    <Stack.Screen name="Main" options={{ headerShown: false }}>
                        {() => (
                            <Drawer.Navigator
                                initialRouteName="Home"
                                drawerContent={(props) => <DrawerContent {...props}
                                    screenOptions={{ swipeEnabled: false }}
                                />
                                }
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
    )
}

export default Navigation