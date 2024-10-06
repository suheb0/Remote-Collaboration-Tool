import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme(prev => !prev);
    localStorage.setItem("zoom-theme", isDarkTheme ? "light" : "dark");
  };

  const logout = () => {
    // Your sign out logic here
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo, isDarkTheme, changeTheme }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
