import React, { useState, useRef } from 'react'
import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import Navbar from '../components/shared/Navbar'
import SignatureScreen from 'react-native-signature-canvas';
import { useNavigation } from '@react-navigation/native';

const ClientSignatureScreen = () => {

    const navigation = useNavigation();
    const ref = useRef();

    const [signature, setSignature] = useState(null);


    const handleSignature = (signature) => {
        console.log(signature);
        setSignature(signature);
        navigation.goBack();
    };
    return (

        <SafeAreaView className="bg-white flex-1 space-y-3" edges={['top']}>
            <StatusBar style='dark' />
            <Navbar type="nested" />
            <View className=" bg-white flex-1   space-y-7  py-3 px-3">
                <View className="">
                    <Text
                        style={{ fontFamily: 'poppins-bold' }}
                        className="text-2xl px-2 pt-4 text-gray-700"
                    >Client's Signature
                    </Text>
                    <Text
                        className="text-md px-2 pt-2"
                        style={{ fontFamily: 'poppins-regular' }}>
                        Put the signature here 👇🏻
                    </Text>
                </View>
                <View className="  h-[600px]">
                    <SignatureScreen
                        ref={ref}
                        onOK={handleSignature}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ClientSignatureScreen