
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, Dimensions ,ScrollView} from 'react-native';
import { HomeIcon, ShieldCheckIcon, ExclamationTriangleIcon } from 'react-native-heroicons/outline'

const DrawerContent = ({ navigation }) => {

  const handleDrawerItemPress = (screenName) => {
    navigation.navigate(screenName);
  };

  const screenWidth = Dimensions.get('window').width;
  const marginValue = screenWidth * 0.18;

  return (
    <SafeAreaView className="p-2 flex-1 bg-white items-center" style={{ marginTop: marginValue }}>
      <View className="" >
        <Image
          source={require('../../assets/images/logo.jpeg')}
          style = {{ width: 180, height: 140 }}
        />
        <View className="h-[0.7] mt-5  bg-emerald-800" />
      </View>
      <ScrollView>

      <View className="self-start p-5 flex gap-2 mx-4">
        <TouchableOpacity className="flex gap-2 items-center flex-row" onPress={() => handleDrawerItemPress('Home')}>
          <HomeIcon color="green" size={20} />
          <Text className="text-lg text-emerald-700" style={{ fontFamily: 'poppins-medium' }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex gap-2 items-center flex-row" onPress={() => handleDrawerItemPress('Pending')}>
          <ExclamationTriangleIcon color="green" size={20} />
          <Text className="text-lg text-emerald-700" style={{ fontFamily: 'poppins-medium' }}>Pending Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex gap-2 items-center flex-row" onPress={() => handleDrawerItemPress('Completed')}>
          <ShieldCheckIcon color="green" size={20} />
          <Text className="text-lg text-emerald-700" style={{ fontFamily: 'poppins-medium' }}>Completed Tasks</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DrawerContent;
