import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { ArrowRightStartOnRectangleIcon,  Bars3CenterLeftIcon, ChevronLeftIcon } from 'react-native-heroicons/outline'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Navbar = ({ type }) => {
  const screenWidth = Dimensions.get('window').width;
  const marginValue = screenWidth * 0.045;

  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await signOut(auth)
      await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View className="flex-row   pb-2 bg-white justify-between items-center px-5" style={{ marginTop: marginValue }}>
      <Animated.View
        entering={FadeInUp.delay(200).duration(1000).springify()}
      >
        {type === "main" ?
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
          >
            <Bars3CenterLeftIcon color="black" strokeWidth={2} size="28" />
          </TouchableOpacity> :
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >

            <ChevronLeftIcon color="black" strokeWidth={2} size="24" />
          </TouchableOpacity>
        }
      </Animated.View>
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

      <Animated.View
        entering={FadeInUp.delay(200).duration(1000).springify()}
      >

        <TouchableOpacity
          onPress={handleLogout}
          className="p-2"
        >

          <ArrowRightStartOnRectangleIcon color="black" strokeWidth={2} size="27" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

export default Navbar