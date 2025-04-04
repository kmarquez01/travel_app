import { View, Text, ScrollView, Image} from 'react-native'
import { useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from "../../components/CustomButton"
import { auth } from "../FirebaseConfig"

import { Link } from "expo-router"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'


const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setisSubmitting] = useState(false)

 const register = async () => {
   setisSubmitting(true);
   try {
     // Create user with email and password
     const response = await createUserWithEmailAndPassword(auth, form.email, form.password);
     console.log(response);

     // Update user profile (this is async, so await it)
     await updateProfile(auth.currentUser, {
       displayName: form.username,
     });

     alert("Check your email for verification!");
   } catch (error) {
     console.log(error);
     alert("Registration failed: " + error.message);
   } finally {
     setisSubmitting(false);
   }
 };



  return (
    <SafeAreaView className = "bg-primary h-full">
      <ScrollView>
        <View className = "w-full justify-center min-h-[85vh] px-4 my-6">
          <Image source = {images.logo} resizeMode = "contain" 
          className = "w-[115px] h-[35px]"/>

          <Text className = "text-2xl text-white text-semibold mt-10 font-psemibold">
            Sign up for Oterra
            </Text>

            <FormField
              title = "Username"
              value =  {form.username}
              handleChangeText = {(e) => setForm( { ...form, username: e})}
              otherStyles = "mt-10"
               />

            <FormField
              title = "Email"
              value =  {form.email}
              handleChangeText = {(e) => setForm( { ...form, email: e})}
              otherStyles = "mt-7"
              keyboardType = "email-address" />

            <FormField
              title = "Password"
              value =  {form.password}
              handleChangeText = {(e) => setForm( { ...form, password: e})}
              otherStyles = "mt-7"
              />
              <CustomButton 
              title = "Sign Up"
              handlePress ={register} 
              containerStyles = "mt-7"
              isLoading = {isSubmitting}/>

            <View className = "justify-center pt-5 flex-row gap-2">
              <Text className = "text-lg text-gray-100 font-pregular">
                Already have an account?
              </Text>
              <Link href = "/sign-in" className = "text-lg font-psemibold text-secondary">
                Sign In
              </Link>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp