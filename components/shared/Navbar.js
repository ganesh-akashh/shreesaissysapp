import { View, Text, Image, TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import { Bars3CenterLeftIcon, UserIcon } from 'react-native-heroicons/outline'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native';


const Navbar = () => {

  const screenWidth = Dimensions.get('window').width;
  const marginValue = screenWidth * 0.04;

  const navigation = useNavigation();
  return (
    <View className="flex-row bg-white justify-between items-center px-5" style={{ marginTop: marginValue }}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
      >
        <Bars3CenterLeftIcon color="black" strokeWidth={2} size="28" />
      </TouchableOpacity>
      <Animated.View
        className="space-y-2 flex-row gap-1 items-center mr-3"
        entering={FadeInUp.delay(200).duration(1000).springify()}
      >
        <Image
          source={require('../../assets/images/sun.jpg')}
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
  )
}

export default Navbar