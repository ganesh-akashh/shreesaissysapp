import { View, Text, Pressable, Image } from 'react-native'


const CompletedTaskCard = ({ task }) => {

  const { clientReview, clientName, actionTaken, location, description, reportedDate, billedAmount, attendedDate } = task

  return (
    <Pressable>
      <View
        className="rounded-lg border mb-3 border-[#d9d9e1] shadow-sm bg-white ml-2  mr-2 mt-5 mx-4  "
      >
        <View className="flex flex-col justify-center items-center ">
          <View className="flex flex-col h-11 justify-center relative bg-emerald-700 w-full     items-end">

          </View>
          <View className=" mr-2   p-1.5 border-white bg-white  rounded-full -mt-10">
            <Image
              source={require('../../assets/images/user.png')}
              style={{ width: 65, height: 65 }}
              className="rounded-full"
            />
          </View>
          <Text style={{ fontFamily: 'poppins-semibold' }} className="text-lg ">{clientName}</Text>
        </View>
        <View className="p-2 flex gap-1 mx-4 mt-2">
          <View className="flex gap-2  flex-row flex-wrap items-center">
            <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Assigned Date:</Text>
            <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>{reportedDate}</Text>
          </View>
          <View className="flex gap-2  flex-row flex-wrap items-center">
            <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Attended Date:</Text>
            <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>{attendedDate}</Text>
          </View>
          <View className="flex gap-2  flex-row flex-wrap items-center">
            <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Problem Description:</Text>
            <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>{description}</Text>
          </View>
          <View className="flex gap-2  flex-row flex-wrap items-center">
            <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Location:</Text>
            <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>{location}</Text>
          </View>
          <View className="flex gap-2  flex-row flex-wrap items-center">
            <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Client Review:</Text>
            <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>{clientReview}</Text>
          </View>
          <View className="flex gap-2  flex-row flex-wrap items-center">
            <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Action taken:</Text>
            <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>{actionTaken}</Text>
          </View>
          <View className="flex gap-2  flex-row flex-wrap items-center">
            <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Billed Amount:</Text>
            <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>₹ {billedAmount}</Text>
          </View>
        </View>
      
      </View>
    </Pressable>
  )
}

export default CompletedTaskCard