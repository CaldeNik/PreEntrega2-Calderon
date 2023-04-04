import React from "react";
import { CartProvider, ThemeProvider } from "./context";
import { MainLayout } from "./layouts";
import { MainRoutes } from "./routes/MainRoutes";
function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <CartProvider>
          <MainRoutes />
        </CartProvider>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
