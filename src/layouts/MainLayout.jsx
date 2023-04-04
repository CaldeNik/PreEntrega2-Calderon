import React, { useContext } from "react";
import { ThemeContext } from "../context";

export const MainLayout = ({ children }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  const mainLayoutStyles = {
    backgroundColor: isDarkTheme ? "#1f1b24" : "#fff",
    color: isDarkTheme ? "white" : "black",
    minHeight: "100vh",
    height: "fit-content",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
  };

  return <div style={mainLayoutStyles}>{children}</div>;
};