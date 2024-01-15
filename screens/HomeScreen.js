import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { authDetails } from '../redux/reducers/auth'
import { useSelector } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { Bars3CenterLeftIcon, UserIcon, Square3Stack3DIcon, TrophyIcon, ShieldCheckIcon, ExclamationTriangleIcon } from 'react-native-heroicons/outline'
import PieChart from 'react-native-pie-chart'
import Navbar from '../components/shared/Navbar'


const HomeScreen = () => {

  const user = useSelector(authDetails);

  const widthAndHeight = 280
  const series = [30, 70]
  const sliceColor = ['#BF3131', '#15c75a']

  const data = [
    { name: 'Kesavan', points: 120 },
    { name: 'Haricharan', points: 50 },
    { name: 'Nandhaana', points: 50 },
    { name: 'Akash', points: 40 },
    { name: 'Maysa', points: 35 },
  ];




  return (

    <SafeAreaView className="flex-1 bg-[#FFFFFF] flex space-y-3" edges={['top']}>
      <StatusBar style='dark' />

      <Navbar type="main" />
      <ScrollView>
        <View className="bg-[#F5F7F8] flex-1 py-3 px-3 ">
          <Text
            style={{ fontFamily: 'poppins-bold' }}
            className="text-2xl px-2 py-4 text-gray-700"
          >Welcome Back, Akash 👋🏻</Text>

          <Animated.View
            className="rounded-lg border  border-[#f8f8f9] shadow-sm bg-[#FFFFFF] ml-2 mr-2 mt-5 px-2 py-1 "
            entering={FadeInUp.delay(200).duration(1000).springify()}
          >
            <View className="flex flex-col  space-y-1.5 p-6">
              <Text className="text-lg  text-gray-700 leading-none tracking-tight" style={{ fontFamily: 'poppins-medium' }}>
                Total Tasks
              </Text>
              <View className="flex flex-row justify-between items-center">
                <Text className="text-xl ml-1  leading-none tracking-tight" style={{ fontFamily: 'poppins-semibold' }}>
                  10
                </Text>
                <Square3Stack3DIcon size={55} color="blue" />
              </View>
              <Text className="text-base   text-gray-700 leading-none tracking-tight" style={{ fontFamily: 'poppins-regular' }}>
                Tasks
              </Text>
            </View>
          </Animated.View>

          <Animated.View
            className="rounded-lg border  border-[#f8f8f9] shadow-sm bg-[#FFFFFF] ml-2 mr-2 mt-5 px-2 py-1 "
            entering={FadeInUp.delay(400).duration(1000).springify()}
          >
            <View className="flex flex-col  space-y-1.5 p-6">
              <Text className="text-lg  text-gray-700 leading-none tracking-tight" style={{ fontFamily: 'poppins-medium' }}>
                Completed Tasks
              </Text>
              <View className="flex flex-row justify-between items-center">
                <Text className="text-xl ml-1  leading-none tracking-tight" style={{ fontFamily: 'poppins-semibold' }}>
                  10
                </Text>
                <ShieldCheckIcon size={55} color="green" />
              </View>
              <Text className="text-base   text-gray-700 leading-none tracking-tight" style={{ fontFamily: 'poppins-regular' }}>
                Completed
              </Text>
            </View>
          </Animated.View>

          <Animated.View
            className="rounded-lg border  border-[#f8f8f9] shadow-sm bg-[#FFFFFF] ml-2 mr-2 mt-5 px-2 py-1 "
            entering={FadeInUp.delay(600).duration(1000).springify()}
          >
            <View className="flex flex-col  space-y-1.5 p-6">
              <Text className="text-lg  text-gray-700 leading-none tracking-tight" style={{ fontFamily: 'poppins-medium' }}>
                Pending Tasks
              </Text>
              <View className="flex flex-row justify-between items-center">
                <Text className="text-xl ml-1  leading-none tracking-tight" style={{ fontFamily: 'poppins-semibold' }}>
                  10
                </Text>
                <ExclamationTriangleIcon size={55} color="brown" />
              </View>
              <Text className="text-base   text-gray-700 leading-none tracking-tight" style={{ fontFamily: 'poppins-regular' }}>
                Pending
              </Text>
            </View>
          </Animated.View>

          <Animated.View
            className="rounded-lg border  border-[#f8f8f9] shadow-sm bg-[#FFFFFF] ml-2 mr-2 mt-5 px-2 py-1 "
            entering={FadeInUp.delay(800).duration(1000).springify()}

          >
            <View className="flex flex-col  space-y-1.5 p-6">
              <Text className="text-lg  text-gray-700 leading-none tracking-tight" style={{ fontFamily: 'poppins-medium' }}>
                Total Points
              </Text>
              <View className="flex flex-row justify-between items-center">
                <Text className="text-xl ml-1  leading-none tracking-tight" style={{ fontFamily: 'poppins-semibold' }}>
                  100
                </Text>
                <TrophyIcon size={55} color="orange" />
              </View>
              <Text className="text-base   text-gray-700 leading-none tracking-tight" style={{ fontFamily: 'poppins-regular' }}>
                Pending
              </Text>
            </View>
          </Animated.View>

          <Animated.View
            className="rounded-lg border  border-[#f8f8f9] shadow-sm bg-[#FFFFFF] ml-2 mr-2 mt-5 px-2 py-1 "
            entering={FadeInUp.delay(1000).duration(1000).springify()}
          >

            <View className="flex flex-col  p-6">
              <Text className="text-xl text-center  text-gray-700 leading-none tracking-tight" style={{ fontFamily: 'poppins-medium' }}>
                Task Status
              </Text>
              <View className="mt-8">
                <PieChart
                  widthAndHeight={widthAndHeight}
                  series={series}
                  sliceColor={sliceColor}
                  coverRadius={0.64}

                />
              </View>

              <View className="fle flex-row mt-5 justify-between items-center">
                <Text className="text-base" style={{ fontFamily: 'poppins-medium' }}>✅  Completed</Text>
                <Text className="text-base" style={{ fontFamily: 'poppins-medium' }}>❌  Pending</Text>
              </View>

            </View>

          </Animated.View>

          <Animated.View
            className="rounded-lg border  border-[#f8f8f9] shadow-sm bg-[#FFFFFF] ml-2 mr-2 mt-5 px-2 py-1 "
            entering={FadeInUp.delay(1000).duration(1000).springify()}
          >

            <View className="flex flex-col  p-6">

              <Text className="text-xl text-center  text-gray-700 leading-none tracking-tight" style={{ fontFamily: 'poppins-medium' }}>
                Top performers
              </Text>

              <View className="flex gap-3 mt-5">
                {data.map((item, index) => (
                  <View key={index} className="flex-row flex-wrap border-b p-2 border-[#e1e1ea]  justify-between">
                    <View className="flex-row gap-2 items-center">
                      <Text className="text-base" style={{ fontFamily: 'poppins-bold' }}>{index + 1}.</Text>
                      <Text className="text-base text-gray-700" style={{ fontFamily: 'poppins-medium' }}>{item.name}</Text>
                    </View>
                    <Text className="text-base" style={{ fontFamily: 'poppins-medium' }}>{item.points} points</Text>
                  </View>
                ))}
              </View>

            </View>

          </Animated.View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen