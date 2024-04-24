import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { Keyboard } from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
export default function SignupScreen() {
  const navigation = useNavigation();
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // Bàn phím được mở
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // Bàn phím được đóng
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const styles = StyleSheet.create({
    inputKeyboardOn: {
      // backgroundColor: "blue",
      marginTop: 10,
    },
    inputKeyboardDown: {
      marginTop: -270,
    },
  });
  const containerStyle = keyboardVisible
    ? styles.inputKeyboardOn
    : styles.inputKeyboardDown;
  return (
    <KeyboardAvoidingView>
      <View className="bg-white h-full w-full">
        <StatusBar style="light" />
        <Image
          className="h-full w-full absolute"
          source={require("../assets/images/background.png")}
          style={{ marginTop: -100 }}
        />
        {/* heart */}
        <View className="flex-row justify-around w-full">
          <Animated.Image
            entering={FadeIn.delay(200).duration(1000).springify()}
            className="h-[90] w-[200]"
            style={{ marginTop: 40 }}
            source={require("../assets/images/heart.png")}
          />
        </View>

        <View
          className="h-full w-full flex justify-around pb-10 "
          // style={containerStyle}
        >
          {/* <View className="flex items-center">
          <Text
            className="text-white
           font-bold tracking-wider text-5xl"
          >
            Login
          </Text>
        </View> */}
          {/* {!keyboardVisible && ( // Chỉ hiển thị nếu bàn phím không mở
            <View className="flex items-center">
              <Animated.Text
                entering={FadeInUp.duration(1000).springify()}
                className="text-black
               font-bold tracking-wider text-5xl"
              >
                Login
              </Animated.Text>
            </View>
          )} */}

          <View
            className="flex items-center mx-4 space-y-4"
            // style={keyboardVisible}
          >
            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              className="bg-black/5 p-5 rounded-2xl w-full"
            >
              <TextInput
                placeholder="Email"
                placeholderTextColor={"gray"}
                keyboardType="email-address"
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              className="bg-black/5 p-5 rounded-2xl w-full"
            >
              <TextInput placeholder="Username" placeholderTextColor={"gray"} />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
              className="bg-black/5 p-5 rounded-2xl w-full mb-3"
            >
              <TextInput
                placeholder="Password"
                placeholderTextColor={"gray"}
                secureTextEntry
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(800).duration(1000).springify()}
              className="w-full"
            >
              <TouchableOpacity className="w-full bg-red-400 p-3 rounded-2xl mb-3">
                <Text className="text-xl font-bold text-white text-center">
                  Sign Up
                </Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(1000).duration(1000).springify()}
              className="flex-row justify-center"
            >
              <Text>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.push("Login")}>
                <Text className="text-red-400">Sign In</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
