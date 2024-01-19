import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableWithoutFeedback, TextInput, Keyboard, ScrollView, ActivityIndicator, TouchableOpacity, Pressable } from 'react-native'
import Navbar from '../components/shared/Navbar'
import { PencilIcon } from 'react-native-heroicons/outline'
import Header from '../components/shared/Header';

const FormScreen = ({ route, navigation }) => {

    const {id} =route.params;

  

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [loading, setLoading] = useState(false);

  


    const onDateChange = (event, selected) => {
        const currentDate = selected || selectedDate;

        setSelectedDate(currentDate);
    };

    const handleSubmit = async () => {

    }




    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
        >
            <SafeAreaView className="bg-white flex-1 space-y-3" edges={['top']}>
                <StatusBar style='dark' />
                <Navbar type="nested" />
                <View className=" bg-white flex flex-row items-center justify-between  py-3 px-3">
                    <Header title="Complete Task" subheading="Add the corresponding task details" />
                    <View>
                        <TouchableOpacity className="p-2 border rounded-lg border-[#f8f8f9] bg-emerald-700 " onPress={() => navigation.push("ClientSignatureScreen")}>
                            <PencilIcon color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView className="flex-1 bg-[#F5F7F8]">
                    <Pressable>
                        <View className="mt-5  space-y-5 mx-4 ">
                            <View>
                                <Text
                                    style={{ fontFamily: 'poppins-semibold' }}
                                    className="px-2 text-lg text-gray-700 py-2"
                                >
                                    ACTION TAKEN :
                                </Text>
                                <TextInput
                                    style={{ fontFamily: 'poppins-regular' }}
                                    placeholder='Enter the action taken ...'
                                    placeholderTextColor={'gray'}
                                    className=" bg-white h-[150px] rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                    multiline
                                    numberOfLines={1}
                                />
                            </View>

                            <View>

                                <Text
                                    style={{ fontFamily: 'poppins-semibold' }}
                                    className="px-2 text-lg text-gray-700 py-2"
                                >
                                    BILLED  AMOUNT :
                                </Text>
                                <TextInput
                                    style={{ fontFamily: 'poppins-regular' }}
                                    placeholder='Enter the billed amount ...'
                                    placeholderTextColor={'gray'}
                                    className=" bg-white  rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                    multiline
                                    numberOfLines={1}
                                />
                            </View>

                            <View>

                                <Text
                                    style={{ fontFamily: 'poppins-semibold' }}
                                    className="px-2 text-lg text-gray-700 py-2"
                                >
                                    CLIENT REVIEW :
                                </Text>
                                <TextInput
                                    style={{ fontFamily: 'poppins-regular' }}
                                    placeholder='Enter the client review ...'
                                    placeholderTextColor={'gray'}
                                    className=" bg-white h-[150px] rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                    multiline
                                    numberOfLines={1}
                                />
                            </View>


                            <View className="flex justify-center space-y-3 py-2 items-center">
                                <Text
                                    style={{ fontFamily: 'poppins-semibold' }}
                                    className="px-2 self-start text-lg text-gray-700 py-2"
                                >
                                    ATTENDED DATE :
                                </Text>

                                
                            </View>


                            <View className="pb-4">
                                <TouchableOpacity className="w-full bg-emerald-700 p-3 rounded-md text-center" onPress={handleSubmit}>
                                    {loading ?
                                        <ActivityIndicator color="white" /> :
                                        <Text style={{ fontFamily: 'poppins-semibold' }} className="text-white text-center">Complete Task</Text>
                                    }
                                </TouchableOpacity>
                            </View>

                        </View>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default FormScreen