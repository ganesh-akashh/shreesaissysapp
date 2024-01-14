import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableWithoutFeedback, TextInput, Keyboard, ScrollView, Platform, TouchableOpacity, Pressable } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import Navbar from '../components/shared/Navbar'

const FormScreen = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const onDateChange = (event, selected) => {
        const currentDate = selected || selectedDate;

        setSelectedDate(currentDate);
    };



    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
        >
            <SafeAreaView className="bg-white flex-1 space-y-3" edges={['top']}>
                <StatusBar style='dark' />
                <Navbar />
                <View className=" bg-white py-3 px-3">
                    <Text
                        style={{ fontFamily: 'poppins-bold' }}
                        className="text-2xl px-2 pt-4 text-gray-700"
                    >Complete Task
                    </Text>
                    <Text
                        className="text-md px-2 pt-2"
                        style={{ fontFamily: 'poppins-regular' }}>
                        Add the corresponding task details
                    </Text>
                </View>
                <ScrollView className="flex-1 bg-[#F5F7F8]">
                    <Pressable>


                        <View className="mt-5  space-y-2 mx-4 ">
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

                            <View>

                                <Text
                                    style={{ fontFamily: 'poppins-semibold' }}
                                    className="px-2 text-lg text-gray-700 py-2"
                                >
                                    Billed Amount :
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
                            <View className="flex justify-center space-y-3 items-center">
                                <Text
                                    style={{ fontFamily: 'poppins-semibold' }}
                                    className="px-2 self-start text-lg text-gray-700 py-2"
                                >
                                    ATTENDED DATE :
                                </Text>

                                <DateTimePicker

                                    value={selectedDate}
                                    mode="date"
                                    is24Hour={true}
                                    display="default"
                                    onChange={onDateChange}
                                />
                            </View>

                            <View>

                            </View>



                        </View>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default FormScreen