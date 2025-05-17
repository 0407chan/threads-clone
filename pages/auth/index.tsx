import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { useAuth } from "@/provider/AuthProvider";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";

export default function Auth() {
  const { user, setUser } = useAuth();
  const [phone, setPhone] = useState("");

  const handleSignIn = () => {
    setUser({
      name: "John Doe",
    });
  };

  return (
    <SafeAreaView>
      <Input variant="outline" size="md">
        <InputField
          placeholder="enter text here.."
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </Input>
      <Button onPress={handleSignIn}>
        <ButtonText>Sign in</ButtonText>
      </Button>
    </SafeAreaView>
  );
}
