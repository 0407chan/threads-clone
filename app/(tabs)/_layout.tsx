import { Tabs, useRouter } from "expo-router";
import { Activity, Home, Plus, Search, User } from "lucide-react-native";
import React from "react";

export default function TabLayout() {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0a7ea4",
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <Search size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="empty"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <Plus size={24} color={color} />,
        }}
        listeners={{
          tabPress: () => {
            router.push("/post");
          },
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <Activity size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
