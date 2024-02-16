import React, { useState, useRef } from 'react'
import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import Navbar from '../components/shared/Navbar'
import SignatureScreen from 'react-native-signature-canvas';
import Header from '../components/shared/Header';
import { doc, updateDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../firebase';

const ClientSignatureScreen = ({ route, navigation }) => {


    const ref = useRef();


    const { id } = route.params




    const handleSignature = async (signature) => {
        try {
            if (signature) {
                const response = await updateDoc(doc(FIRESTORE_DB, `tasks/${id}`), {
                    clientSignature: signature
                });
            }
            navigation.goBack()

        } catch (error) {
            console.log("Signature error", error);
        }
    };

    return (

        <SafeAreaView className="bg-white flex-1 space-y-3 py-8" edges={['top']}>
            <StatusBar style='dark' />
            <Navbar type="nested" />
            <View className=" bg-white flex-1   space-y-7   px-3">
                <Header title="Client's Signature" subheading=" Put the signature here 👇🏻" />
                <View style={{ height: "100%" }} >
                    <SignatureScreen
                        onOK={handleSignature}
                        autoClear={true}
                        webStyle={`.m-signature-pad--footer
                        .button {
                        background-color: #047857;
                          color: #FFF;
                        }`}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ClientSignatureScreen