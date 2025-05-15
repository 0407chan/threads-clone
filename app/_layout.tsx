import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import AuthProvider from "@/provider/AuthProvider";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React from "react";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <GluestackUIProvider mode="light">
      <AuthProvider>
        <Stack initialRouteName="(auth)">
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen
            name="post"
            options={{ headerShown: false, presentation: "modal" }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </AuthProvider>
    </GluestackUIProvider>
  );
}
