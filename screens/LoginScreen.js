import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Animated, { FadeInUp, FadeInDown, } from 'react-native-reanimated';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase"
import { storeUserData } from '../utils/storage';
import { collection, getDocs, query, where } from "firebase/firestore";
import { loadAuth } from '../redux/reducers/auth';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { FIRESTORE_DB } from '../firebase';

const LoginScreen = () => {

    const db = FIRESTORE_DB;

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();
    const userRef = collection(db, "users");
  

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(false);



    const handleChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };




    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, formValues.email, formValues.password);
            await storeUserData(response.user, 'userData');
            console.log(response.user);
            if (response.user) {
                navigation.navigate("Home");
                const q = query(userRef, where("uid", "==", user.uid));
                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                if (data.length > 0) {
                    dispatch(
                        loadAuth({
                            token: user.refreshToken,
                            role: data[0].role,
                            uid: data[0].uid,
                            docId: data[0].id,
                        })
                    );
                } else {
                    setError(true);
                }
            }

        } catch (error) {
            console.log(error.message);
            setError(true);
        } finally {
            setLoading(false)
        }
    }



    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
        >
            <KeyboardAvoidingView
                className="flex-1 bg-white"
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >


                <View className="flex-1 mb-[12%]  flex-row justify-center items-end">
                    <Animated.Image
                        entering={FadeInUp.delay(200).duration(1000).springify()}
                        source={require('../assets/images/logo.jpeg')}
                        style={{ width: 240, height: 160 }}
                    />
                </View>

                <View
                    className={`flex-1   px-4 pt-10 space-y-3 border   border-[#dadde0] `}
                    style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
                >
                    <View className="flex items-center mx-5  space-y-4">
                        <Animated.View
                            entering={FadeInUp.duration(1000).springify()}
                            className={`border p-[5%] ${error ? "border-red-500" : "border-gray-500"} rounded-2xl w-full mb-1`}>

                            <TextInput
                                placeholder="Email Address"
                                value={formValues.email}
                                name="email"
                                placeholderTextColor={'gray'}
                                onChangeText={(text) => handleChange('email', text)}
                                style={{ fontFamily: 'poppins-semibold' }}
                                keyboardType="email-address"
                                className="text-gray-700"
                                autoCapitalize='none'
                            />
                        </Animated.View>

                        <Animated.View
                            entering={FadeInDown.delay(400).duration(1000).springify()}
                            className={`border p-4 ${error ? "border-red-500" : "border-gray-500"} relative  rounded-2xl w-full mb-1`}>


                            <TextInput
                                placeholder="Password"
                                value={formValues.password}
                                placeholderTextColor={'gray'}
                                onChangeText={(text) => handleChange('password', text)}
                                name="password"
                                secureTextEntry
                                style={{ fontFamily: 'poppins-semibold' }}
                                className="text-gray-700"
                            />
                        </Animated.View>

                        <Animated.View
                            className="w-full"
                            entering={FadeInDown.delay(600).duration(1000).springify()}
                        >
                            <TouchableOpacity
                                onPress={handleSubmit} className={`w-full  bg-emerald-700  p-[4%] rounded-xl mb-3`}
                            >
                                {loading ?
                                    <ActivityIndicator color="white" /> :
                                    <Text className="font-medium text-white  text-center" style={{ fontFamily: 'poppins-semibold' }}>Sign In</Text>
                                }
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default LoginScreen