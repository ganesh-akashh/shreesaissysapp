import { View, Text, Image, ScrollView, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { authDetails } from '../redux/reducers/auth'
import { useSelector } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { Bars3CenterLeftIcon, UserIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'




const HomeScreen = () => {

    const [tasks, setTasks] = useState([]);

    return (
        <TouchableWithoutFeedback>
            <SafeAreaView className="bg-white flex-1 space-y-3" edges={['top']}>
                <StatusBar style='dark' />

                <View className="flex-row  bg-white justify-between items-center px-5">
                    <Bars3CenterLeftIcon color="black" strokeWidth={2} size="28" />
                    <Animated.View
                        className="space-y-2 flex-row gap-1 items-center mr-3"
                        entering={FadeInUp.delay(200).duration(1000).springify()}
                    >
                        <Image
                            source={require('../assets/images/sun.jpg')}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text
                            style={{ fontFamily: 'lobster-regular' }}
                            className="text-2xl   text-emerald-700"
                        >
                            Shree Sai Sys
                        </Text>
                    </Animated.View>
                    <UserIcon color="black" strokeWidth={2} size="28" />
                </View>
                <View className="flex-1  bg-[#f7f9fc] " >
                    <View className="py-2 px-3 ">
                        <Animated.View
                            className="rounded-lg border  border-[#f8f8f9] shadow-sm bg-white ml-2 mr-2 mt-1 "
                            entering={FadeInUp.delay(400).duration(1000).springify()}
                        >
                            <View className="flex flex-col border-l-emerald-800 border-l-4  relative p-2.5 space-y-1">
                                <MagnifyingGlassIcon style={{ position: "absolute", top: 16, left: 10 }} size={25} color="black" />
                                <TextInput
                                    placeholder="Type to search.."
                                    placeholderTextColor={'gray'}
                                    name="searchTerm"
                                    style={{ fontFamily: 'poppins-semibold' }}
                                    className="text-gray-700 w-full pl-8 ml-2 text-base"
                                />
                            </View>
                        </Animated.View>
                    </View>

                    {/* <View className="p-8">
                        <Image
                            source={require('../assets/images/empty.png')}
                            style={{ width: 300, height: 250 }}
                        />
                        <Text
                            className="text-center mt-10 text-xl"
                            style={{ fontFamily: 'poppins-semibold' }}
                        >No cards found!</Text>
                    </View> */}

                    <ScrollView>
                        <Animated.View
                            className="rounded-lg border  border-[#d9d9e1] shadow-sm bg-white ml-2  mr-2 mt-10  "
                            entering={FadeInUp.delay(200).duration(1000).springify()}
                        >
                            <View className="flex flex-col justify-center items-center ">
                                <View className="flex flex-col h-11 justify-center relative bg-emerald-800 w-full    items-center">

                                </View>
                                <View className=" mr-2 bg-emerald-80  p-1.5 border-white bg-white  rounded-full -mt-10">
                                    <Image
                                        source={require('../assets/images/user.jpg')}
                                        style={{ width: 65, height: 65 }}
                                        className="rounded-full"
                                    />
                                </View>
                                <Text style={{ fontFamily: 'poppins-semibold' }} className="text-lg ">Akash G</Text>
                            </View>
                            <View className="p-2 flex gap-1 mx-4 mt-2">
                                <View className="flex gap-2  flex-row flex-wrap items-center">
                                    <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Assigned Date:</Text>
                                    <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>11/20/2023</Text>
                                </View>
                                <View className="flex gap-2  flex-row flex-wrap items-center">
                                    <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Assigned Date:</Text>
                                    <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>11/22/27</Text>
                                </View>
                                <View className="flex gap-2  flex-row flex-wrap items-center">
                                    <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Location:</Text>
                                    <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>11/20, Bharathiyar Rd, ATT Colony, Gopalapuram, New Siddhapudur, Coimbatore, Tamil Nadu 641044</Text>
                                </View>
                                <View className="flex gap-2  flex-row flex-wrap items-center">
                                    <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Problem Description:</Text>
                                    <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>11/20, Bharathiyar Rd, ATT Colony, Gopalapuram, New Siddhapudur, Coimbatore, Tamil Nadu 641044</Text>
                                </View>
                            </View>
                            <View className="p-2">
                                <TouchableOpacity className="w-full bg-emerald-800 p-3 rounded-md text-center">
                                    <Text style={{ fontFamily: 'poppins-semibold' }} className="text-white text-center">Complete Task</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default HomeScreen