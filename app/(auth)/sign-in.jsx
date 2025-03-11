import { View, Text, ScrollView, Image} from 'react-native'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from "../../components/CustomButton"
import { auth } from "../FirebaseConfig"

import { Link, router } from "expo-router"
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setisSubmitting] = useState(false)


  const login = async () => {
    setisSubmitting(true)
    try{
      const response = await signInWithEmailAndPassword(auth, form.email, form.password)
      console.log(response)
      router.replace('/home')
    } catch (error) {
      console.log(error);
      alert("Registration failed: " + error.message)
    } finally {
      setisSubmitting(false)
    }
  }


  return (
    <SafeAreaView className = "bg-primary h-full">
      <ScrollView>
        <View className = "w-full justify-center min-h-[85vh] px-4 my-6">
          <Image source = {images.logo} resizeMode = "contain" 
          className = "w-[115px] h-[35px]"/>

          <Text className = "text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to Oterra
            </Text>

            <FormField
              title = "Email"
              value =  {form.email}
              handleChangeText = {(e) => setForm( { ...form, email: e})}
              otherStyles = "mt-7"
              keyboardType = "email-address" />

            <FormField
              title = "Password"
              value =  {form.password}
              onChangeText = {(e) => setForm( { ...form, password: e})}
              otherStyles = "mt-7"
              />
              <CustomButton 
              title = "Sign In"
              handlePress ={login} 
              containerStyles = "mt-7"
              isLoading = {isSubmitting}/>

            <View className = "justify-center pt-5 flex-row gap-2">
              <Text className = "text-lg text-gray-100 font-pregular">
                Don't have an account?
              </Text>
              <Link href = "/sign-up" className = "text-lg font-psemibold text-secondary">
                Sign Up
              </Link>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn