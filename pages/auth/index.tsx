import { useAuth } from "@/provider/AuthProvider";
import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";

export default function Auth() {
  const { user, setUser } = useAuth();

  useEffect(() => {
    setUser({
      name: "John Doe",
    });
  }, []);

  return (
    <SafeAreaView>
      <Text>Hello, {user?.name}</Text>
    </SafeAreaView>
  );
}
