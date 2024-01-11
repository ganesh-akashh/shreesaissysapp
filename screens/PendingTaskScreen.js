import { View, Text, Image, TextInput, TouchableWithoutFeedback, ScrollView, FlatList, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { Bars3CenterLeftIcon, UserIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import PendingTaskCard from '../components/cards/PendingTaskCard'
import Empty from '../components/shared/Empty'
import Navbar from '../components/shared/Navbar'



const HomeScreen = () => {

    const [tasks, setTasks] = useState([1]);

    return (
        <TouchableWithoutFeedback>
            <SafeAreaView className="bg-white flex-1 space-y-3" edges={['top']}>
                <StatusBar style='dark' />

                <Navbar />
                <View className="flex-1  bg-[#f7f9fc] " >
                    <View className="py-2 px-3 ">
                        <View
                            className="rounded-lg border  border-[#f8f8f9] shadow-sm bg-[#FFFFFF] ml-2 mr-2 mt-1 "
                            entering={FadeInUp.delay(400).duration(1000).springify()}
                        >
                            <View className="flex flex-col border-l-emerald-800 border-l-4  relative p-2.5 space-y-1">
                                <MagnifyingGlassIcon style={{ position: "absolute", top: 16, left: 10 }} size={25} color="black" />
                                <TextInput
                                    placeholder="Type to search.."
                                    placeholderTextColor={'gray'}
                                    name="searchTerm"
                                    style={{ fontFamily: 'poppins-semibold' }}
                                    className="text-gray-700  w-full pl-8 ml-2 text-base"
                                />
                            </View>
                        </View>
                    </View>
                    {tasks.length == 0 ? <Empty /> :
                        <ScrollView >
                            <Pressable>
                                <PendingTaskCard />
                                <PendingTaskCard />
                            </Pressable>
                        </ScrollView>
                    }
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default HomeScreen