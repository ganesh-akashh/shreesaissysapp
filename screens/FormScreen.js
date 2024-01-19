import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableWithoutFeedback, TextInput, Keyboard, ScrollView, ActivityIndicator, Platform, TouchableOpacity, KeyboardAvoidingView, Pressable, ToastAndroid } from 'react-native'
import Navbar from '../components/shared/Navbar'
import { PencilIcon } from 'react-native-heroicons/outline'
import Header from '../components/shared/Header';
import DateTimePicker from '@react-native-community/datetimepicker';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../firebase';

const FormScreen = ({ route, navigation }) => {

    const { id } = route.params;



    const [formattedDate, setFormattedDate] = useState("");
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false)




    const [state, setState] = useState({
        actionTaken: "",
        billedAmount: "",
        clientReview: "",
    })

    console.log(state);

    const { actionTaken, billedAmount, clientReview } = state;

    const setCombinedState = (newState) => {
        setState((prevState) => ({ ...prevState, ...newState }));
    }





    const onDateChange = ({ type }, selectedDate) => {
        if (type === "set") {
            const currentDate = selectedDate;
            setDate(currentDate)

            if (Platform.OS === "android") {
                toggleDatePicker();
                setDate(currentDate)
            }

        } else {
            toggleDatePicker();
        }
    };

    const formatDate = (rawDate) => {
        setFormattedDate(new Date(rawDate).toLocaleDateString("en-US"))
    }


    const toggleDatePicker = () => {
        setShowPicker(!showPicker)
    }

    const confirmIOSDate = () => {
        setDate(date);
        formatDate(date)
        toggleDatePicker();
    }


    const handleSubmit = async () => {
        setLoading(true);
        try {

            const fetchedref = await getDoc(doc(FIRESTORE_DB, `tasks/${id}`));
            const fetchedtask = fetchedref.data();

            await updateDoc(doc(FIRESTORE_DB, `tasks/${id}`), {
                actionTaken,
                attendedDate: formattedDate,
                billedAmount,
                clientReview,
                completedStatus: true,
            })

            const empRef = await getDoc(fetchedtask.assignedTo);
            const emp = empRef.data();
            emp.tasks = emp.tasks.filter(task => (task.id !== id));
            emp.completedTasks = emp.completedTasks + 1;
            emp.points = emp.points + 10;
            await updateDoc(fetchedtask.assignedTo, emp);

        } catch (error) {
            console.log("Update pending task", error);
        } finally {
            setLoading(false);
        }
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
                        <TouchableOpacity className="p-2 border rounded-lg border-[#f8f8f9] bg-emerald-700 " onPress={() => navigation.navigate("ClientSignatureScreen", {
                            id,
                        })}>
                            <PencilIcon color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
                    <ScrollView className="flex-1 bg-[#F5F7F8]">
                        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
                                        onChangeText={(text) => setCombinedState({ actionTaken: text })}
                                        className=" bg-white h-[150px] rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                        textAlignVertical='top'
                                        multiline
                                        numberOfLines={8}
                                    />
                                </View>

                                <View>
                                    <Text
                                        style={{ fontFamily: 'poppins-semibold' }}
                                        className="px-2 text-lg text-gray-700 py-2"
                                    >
                                        ATTENDED DATE :
                                    </Text>
                                    {!showPicker && (
                                        <Pressable onPress={toggleDatePicker}>
                                            <TextInput
                                                style={{ fontFamily: 'poppins-regular' }}
                                                placeholder={formattedDate.length > 0 ? `${formattedDate}` : "Select the attended date"}
                                                placeholderTextColor={'gray'}
                                                className=" bg-white  rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                                onPressIn={toggleDatePicker}
                                                editable={false}
                                            />
                                        </Pressable>
                                    )}
                                </View>

                                {showPicker && (
                                    <DateTimePicker
                                        mode='date'
                                        display='spinner'
                                        value={date}
                                        textColor='black'
                                        onChange={onDateChange}
                                        style={{ height: 120, marginTop: -10 }}
                                    />
                                )}

                                {showPicker && Platform.OS === "ios" && (
                                    <View className="flex flex-row justify-around">
                                        <TouchableOpacity className="p-2 bg-gray-700 rounded-md" onPress={toggleDatePicker}>
                                            <Text style={{ fontFamily: 'poppins-regular' }} className="text-white">Cancel</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity className="p-2 bg-gray-700 rounded-md" onPress={confirmIOSDate}>
                                            <Text style={{ fontFamily: 'poppins-regular' }} className="text-white">Confirm</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}



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
                                        onChangeText={(text) => setCombinedState({ clientReview: text })}
                                        className=" bg-white h-[150px] rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                        textAlignVertical='top'
                                        multiline

                                    />
                                </View>


                                <View>
                                    <Text
                                        style={{ fontFamily: 'poppins-semibold' }}
                                        className="px-2 text-lg text-gray-700 py-2"
                                    >
                                        BILLED AMOUNT :
                                    </Text>
                                    <TextInput
                                        style={{ fontFamily: 'poppins-regular' }}
                                        placeholder='Enter the billed amount ...'
                                        placeholderTextColor={'gray'}
                                        onChangeText={(text) => setCombinedState({ billedAmount: text })}
                                        className=" bg-white rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                        textAlignVertical='top'
                                    />
                                </View>






                                <View className="py-4">
                                    <TouchableOpacity className="w-full bg-emerald-700 p-3 rounded-md text-center" onPress={handleSubmit}>
                                        {loading ?
                                            <ActivityIndicator color="white" /> :
                                            <Text style={{ fontFamily: 'poppins-semibold' }} className="text-white text-center">Complete Task</Text>
                                        }
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default FormScreen