import { View, Text, FlatList, Image, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from "../../constants"
import MapsEmbed from '../../components/Maps';
import CalendarBlock from '../../components/Calendar';
import FormField from '../../components/FormField';
import { Button, TextInput } from 'react-native-paper';
import CustomButton from '../../components/CustomButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

const Home = () => {

  const value = ""

  const [form, setForm] = useState({
    task: ""
  })

  const styles = StyleSheet.create({
    input: {
      height: 30,
      // margin: 12,
      borderWidth: 1,
      padding: 5,
    },
    container: {
      flex: 2,
      justifyContent: 'center',
    },
    inner: {
      height: "100%",
      padding: 24,
      flex: 1,
      justifyContent: 'center',
      marginTop: 10
    },
    header: {
      fontSize: 36,
      marginBottom: 48,
    },
    btnContainer: {
      backgroundColor: 'white',
      height: '100px',
      marginTop: 12,
    },
  });
  
  return (
    <SafeAreaView className = "bg-primary h-full justify-center">
      
      {/* <FlatList
        data = {[{ id: 1}]}
        keyExtractor = {(item) => item.$id}
        renderItem = {({item}) => (
          <Text className = "text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className = "my-6 px-4 space-y-6">
            <View className = "justify-between items-start flex-row mb-6">
              <View>
                <Text className = "font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className = "text-2xl font-psemibold text-white">
                  coolguy
                </Text>
              </View>
              <View className = "mt-1.5">
                <Image
                source = {images.logoSmall}
                className = "w-9 h-10"
                resizeMode = "contain" />
              </View>
            </View>
          </View>
        )}>
      </FlatList> */}
      <CalendarBlock />
      <View className = "w-full justify-center h-[30%] " behaviour = "height">
        {/* <View style = {styles.inner}> */}
        <Text className = "text-base text-gray-200 font-pmedium mb-5">Add event</Text>
        <TextInput
                
                onChangeText = {(e) => setForm( { ...form, task: e})}
                value =  {form.task}
                style = {styles.input}
                />

        <CustomButton
              title = "Add task"
              // handlePress ={login}
              containerStyles = {"mt-5 h-[40px] mb-5"}
              // isLoading = {isSubmitting}
              />
        {/* <MapsEmbed /> */}
        {/* </View> */}
        
      </View>
      <StatusBar backgroundColor='#161622' style = 'light'/>
      
    </SafeAreaView>
  )
}

export default Home



