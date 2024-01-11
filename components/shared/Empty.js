import { View, Text,Image } from 'react-native'
import React from 'react'

const Empty = () => {
  return (
    <View className="p-8 ">
      <Image
        source={require('../../assets/images/empty.png')}
        style={{ width: 300, height: 250 }}
      />
      <Text
        className="text-center mt-10 text-xl "
        style={{ fontFamily: 'poppins-semibold' }}
      >No cards found!</Text>
    </View>
  )
}

export default Empty