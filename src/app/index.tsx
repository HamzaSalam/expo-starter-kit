import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppText } from "@/components/AppText";
import { Button } from "@/components/Button";

export default function IndexScreen() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerClassName="flex-grow justify-center px-6 py-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center mb-8">
          <View className="w-16 h-16 rounded-2xl bg-blue-600 items-center justify-center mb-4 shadow-sm">
            <AppText bold size="large" className="text-white mb-0">
              🚀
            </AppText>
          </View>
          <AppText size="heading" bold center>
            Expo Starter Kit
          </AppText>
          <AppText color="secondary" size="medium" center>
            Latest Expo SDK • Expo Router • NativeWind v4 • TypeScript
          </AppText>
        </View>

        <View className="bg-gray-50 rounded-2xl p-5 mb-8 border border-gray-100">
          <AppText bold size="medium" className="mb-1">
            Get Started
          </AppText>
          <AppText color="secondary" size="small" className="mb-0">
            Edit{" "}
            <AppText bold size="small">
              src/app/index.tsx
            </AppText>{" "}
            to start building your mobile app.
          </AppText>
        </View>

        <View className="mb-4">
          <Button
            title={`Primary Button (${count})`}
            theme="primary"
            onPress={() => setCount((prev) => prev + 1)}
          />
          <Button
            title="Secondary Button"
            theme="secondary"
            onPress={() => alert("Secondary Pressed!")}
          />
          <Button
            title="Tertiary Button"
            theme="tertiary"
            onPress={() => alert("Tertiary Pressed!")}
          />
          <Button title="Disabled Button" theme="primary" disabled />
        </View>

        <View className="items-center mt-auto pt-6">
          <AppText color="tertiary" size="small">
            Ready for Production & Open Source
          </AppText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
