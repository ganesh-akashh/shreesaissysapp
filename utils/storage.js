import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const storage = ReactNativeAsyncStorage;

export const storeUserData = async (userData,key) => {
  try {
    await storage.setItem(key, JSON.stringify(userData));
    console.log('User data stored locally.');
  } catch (error) {
    console.error('Error storing user data:', error);
  }
};


export const getUserData = async (key) => {
  try {
    const userData = await storage.getItem(key);
    if(userData != null){
        return JSON.parse(userData);
    }else{
        return null;
    }
  } catch (error) {
    console.error('Error getting user data:', error);
  }
};