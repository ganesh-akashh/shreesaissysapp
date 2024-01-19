import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native'
import Navbar from '../components/shared/Navbar'
import Header from '../components/shared/Header';
import { doc, updateDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../firebase';

const UpdateTaskScreen = ({ route, navigation }) => {


    const { id } = route.params;



    const [loading, setLoading] = useState(false);
    const [term, setTerm] = useState("");


    const handleSubmit = async () => {
        try {
            setLoading(true);
            if (term) {
                await updateDoc(doc(FIRESTORE_DB, `tasks/${id}`), {
                    reason: term
                })
                navigation.goBack();
            }
        } catch (error) {
            console.log("Error on updating the reason for the task");
        } finally{
            setTerm("");
            setLoading(false)
        }
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
            className="bg-white"
        >
            <SafeAreaView className="bg-white flex-1 space-y-3 " edges={['top']}>
                <StatusBar style='dark' />
                <Navbar type="nested" />
                <View className=" bg-white flex-1   space-y-7  py-3 px-3">
                    <Header title="Update Reason" subheading="Add the reason for pending 👇🏻" />
                    <View className="flex-[0.98]  ">
                        <Text
                            style={{ fontFamily: 'poppins-semibold' }}
                            className="px-2 text-lg text-gray-700 py-2"
                        >
                            REASON :
                        </Text>
                        <TextInput
                            style={{ fontFamily: 'poppins-medium' }}
                            placeholder='Enter the reason for pending ...'
                            placeholderTextColor={'gray'}
                            textAlignVertical='top'
                            multiline
                            numberOfLines={4}
                            className=" bg-white h-[50%]  rounded-md border-2 mt-1 shadow-sm border-[#dbdbe5] p-4"
                            onChangeText={(text) => setTerm(text)}

                        />
                    </View>
                    <TouchableOpacity className="w-full bg-emerald-700 p-3 rounded-md text-center" onPress={handleSubmit}>
                        {loading ?
                            <ActivityIndicator color="black" /> :
                            <Text style={{ fontFamily: 'poppins-semibold' }} className="text-white text-center">Update</Text>
                        }
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default UpdateTaskScreen