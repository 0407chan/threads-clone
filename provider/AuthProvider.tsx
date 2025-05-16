import React, { createContext, useContext, useState } from "react";

export type User = {
  name: string;
};
export const AuthContext = createContext<{
  user: User | null;
  setUser: (user: User) => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}>({
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  isLoading: true,
});
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
