import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native'
import Navbar from '../components/shared/Navbar'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/shared/Header';

const UpdateTaskScreen = () => {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {

    }

    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
        >
            <SafeAreaView className="bg-white flex-1 space-y-3" edges={['top']}>
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
                            style={{ fontFamily: 'poppins-regular' }}
                            placeholder='Enter the reason for pending ...'
                            placeholderTextColor={'gray'}
                            className=" bg-white h-[50%] rounded-md border-2 mt-1 shadow-sm border-[#dbdbe5] p-4"
                            multiline
                            numberOfLines={4}
                        />
                    </View>
                    <TouchableOpacity className="w-full bg-emerald-700 p-3 rounded-md text-center" onPress={handleSubmit}>
                        {loading ?
                            <ActivityIndicator color="white" /> :
                            <Text style={{ fontFamily: 'poppins-semibold' }} className="text-white text-center">Update</Text>
                        }
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default UpdateTaskScreen