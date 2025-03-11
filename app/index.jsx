import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { User, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from 'react';
import { auth } from "./FirebaseConfig"

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user', user);
      if (user) {
        setUser(user)
      }
    })
  }, [user])

  if(!user)
  {
    return (

      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle = {{ height: "100%"}}>
          <View className = "w-full justify-center items-center min-h-[92vh] px-4">
            <Image source = {images.logo}
            className = "w-[130px] h-[40px]" 
            resizeMode = "contains"/>

            <Image 
              source = {images.cards}
              className = "max-w-[380px] w-full h-[250px]"
              resizeMode = "contain"
              />

            <View className = "relative mt-5">
              <Text className = "text-3xl text-white font-bold text-center">
                The ultimate travel guide creator
                <Text className = "text-secondary-200"> Oterra</Text>
              </Text>
              <Text className = "text-sm font-pregular text-gray-100 mt-7 text-center">
                Where google maps meets excel sheet planning.
              </Text>

              <CustomButton 
                title = "Continue with Email"
                handlePress = {() => router.push('/sign-in')}
                containerStyles = "w-130px mt-7"/>
            </View>
          </View>
        </ScrollView>
        <StatusBar backgroundColor='#161622' style = 'light'/>
      </SafeAreaView>
    )
  }
  else if (user){
    return <Redirect href ="/home" />
  }
}
