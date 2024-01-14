import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const PendingTaskCard = () => {

    const navigation = useNavigation();

    return (
        <View
            className="rounded-lg border mb-3 border-[#d9d9e1] shadow-sm bg-white ml-2  mr-2 mt-5 mx-4  "

        >
            <View className="flex flex-col justify-center items-center ">
                <View className="flex flex-col h-11 justify-center relative bg-emerald-700 w-full    items-center">

                </View>
                <View className=" mr-2   p-1.5 border-white bg-white  rounded-full -mt-10">
                    <Image
                        source={require('../../assets/images/user.jpg')}
                        style={{ width: 65, height: 65 }}
                        className="rounded-full"
                    />
                </View>
                <Text style={{ fontFamily: 'poppins-semibold' }} className="text-lg ">Akash G</Text>
            </View>
            <View className="p-2 flex gap-1 mx-4 mt-2">
                <View className="flex gap-2  flex-row flex-wrap items-center">
                    <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Assigned Date:</Text>
                    <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>11/20/2023</Text>
                </View>
                <View className="flex gap-2  flex-row flex-wrap items-center">
                    <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Assigned Date:</Text>
                    <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>11/22/27</Text>
                </View>
                <View className="flex gap-2  flex-row flex-wrap items-center">
                    <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Location:</Text>
                    <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>11/20, Bharathiyar Rd, ATT Colony, Gopalapuram, New Siddhapudur, Coimbatore, Tamil Nadu 641044</Text>
                </View>
                <View className="flex gap-2  flex-row flex-wrap items-center">
                    <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Problem Description:</Text>
                    <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>11/20, Bharathiyar Rd, ATT Colony, Gopalapuram, New Siddhapudur, Coimbatore, Tamil Nadu 641044</Text>
                </View>
            </View>
            <View className="p-2">
                <TouchableOpacity className="w-full bg-emerald-700 p-3 rounded-md text-center" onPress={() => navigation.push("FormScreen")}>
                    <Text style={{ fontFamily: 'poppins-semibold' }} className="text-white text-center">Complete Task</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PendingTaskCard