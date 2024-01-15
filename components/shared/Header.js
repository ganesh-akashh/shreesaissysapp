import { View, Text } from 'react-native'
import React from 'react'

const Header = ({ title, subheading }) => {
    return (
        <View className="">
            <Text
                style={{ fontFamily: 'poppins-bold' }}
                className="text-2xl px-2 pt-4 text-gray-700"
            >{title}
            </Text>
            <Text
                className="text-md px-2 pt-2"
                style={{ fontFamily: 'poppins-regular' }}>
                {subheading}
            </Text>
        </View>
    )
}

export default Header