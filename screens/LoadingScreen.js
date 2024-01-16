import React from 'react'
import {   SafeAreaView, } from 'react-native'
import Animated, { FadeInUp } from 'react-native-reanimated';

const LoadingScreen = () => {
  return (
    <SafeAreaView className="flex-1 justify-center  items-center">
      <Animated.Image
         entering={FadeInUp.delay(200).duration(1000).springify()}
        source={require('../assets/images/logo.jpeg')}
        style={{ width: 240, height: 160 }}
      />
    </SafeAreaView>
  )
}

export default LoadingScreen