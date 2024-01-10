import { View, Text, Image, ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native'
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
                            className="rounded-lg border  border-[#f8f8f9] shadow-sm bg-white ml-2 mr-2 mt-5 px-2 py-1 "
                            entering={FadeInUp.delay(200).duration(1000).springify()}
                        >
                            <View className="flex flex-col justify-center items-center   p-6">
                                <View className="flex flex-col justify-center relative  items-center">
                                    <View className="border-white p-1 border-4 bg-white rounded-full -mt-10">
                                        <Image
                                            source={require('../assets/images/user.jpg')}
                                            style={{ width: 80, height: 80 }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </Animated.View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default HomeScreen