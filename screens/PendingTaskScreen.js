import { View, TextInput, TouchableWithoutFeedback, ScrollView, FlatList, Pressable, Keyboard, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import PendingTaskCard from '../components/cards/PendingTaskCard'
import Empty from '../components/shared/Empty'
import Navbar from '../components/shared/Navbar'
import { empInfoQuery } from '../utils/query'
import { useSelector } from 'react-redux'
import { authDetails } from '../redux/reducers/auth'




const PendingTaskScreen = () => {

     const userInfo=useSelector(authDetails)

     const {docId}=userInfo

    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [term, setTerm] = useState("");
   

    const filteredTasks = tasks?.filter(task => {
        const trimmedClientName = task.clientName.trim().toLowerCase();
        const trimmedAssignedDate = task.reportedDate;
        const trimmedDueDate = task.dueDate;
        const trimmedLocation = task.location.trim().toLowerCase();
        const trimmedProblemDescription = task.description.trim().toLowerCase();
        const fullName = (trimmedClientName + trimmedAssignedDate + trimmedDueDate + trimmedLocation + trimmedProblemDescription).replace(/\s/g, '');
        const trimmedTerm = term.trim().toLowerCase().replace(/\s/g, '');
        return fullName.includes(trimmedTerm);
    })


    useEffect(() => {

        const fetchData = () => {
            try {
                setLoading(true);
                const unsubscribeFunctions = [];
                const userInfoUnsubscribe = empInfoQuery(docId, ({ tasks }) => {
                    setTasks(tasks)
                    setLoading(false)
                })
                unsubscribeFunctions.push(userInfoUnsubscribe);
                return (() => {
                    unsubscribeFunctions.forEach((unsubscribe) => unsubscribe())
                })
            } catch (error) {
                console.log("Error fetching pending tasks:", error);
            }
        }
        fetchData();
    }, [])





    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView className="bg-white flex-1 space-y-3" edges={['top']}>
                <StatusBar style='dark' />
                <Navbar type="main" />
                <View className="flex-1  bg-[#f7f9fc] " >
                    <View className="py-2 px-3 ">
                        <Animated.View
                            className="rounded-lg border  border-[#f8f8f9] shadow-sm bg-[#FFFFFF] ml-2 mr-2 mt-1 "
                            entering={FadeInUp.delay(400).duration(1000).springify()}
                        >
                            <View className="flex flex-col border-l-emerald-800 border-l-4  relative p-2.5 space-y-1">
                                <MagnifyingGlassIcon style={{ position: "absolute", top: 16, left: 10 }} size={25} color="black" />
                                <TextInput
                                     placeholder="Type to search.."
                                    placeholderTextColor={'gray'}
                                    name="searchTerm"
                                    onChangeText={(text) => setTerm(text)}
                                    style={{ fontFamily: 'poppins-semibold' }}
                                    className="text-gray-700  w-full pl-8 ml-2 text-base"
                                />
                            </View>
                        </Animated.View>
                    </View>

                    {loading ? <View className="flex-1 justify-center items-center">
                        <ActivityIndicator color="black" />
                    </View> :
                        filteredTasks && filteredTasks.length == 0 ? <Empty /> :
                            <FlatList
                                data={filteredTasks}
                                renderItem={({ item }) => <PendingTaskCard task={item} />} 
                                keyExtractor={(item) => item.id.toString()}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                            />
                    }
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default PendingTaskScreen