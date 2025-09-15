import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import App from "./App";
import AboutUsPage from "./pages/AboutUsPage";
import Footer from "./Components/Footer";
import { toggleTheme } from "./features/Theme/themeSlice";
import type { ThemeState } from "./features/Theme/themeSlice";

import Resume from "./pages/Resume";
import "./index.css";

const Root: React.FC = () => {
  const { mode } = useSelector((state: { theme: ThemeState }) => state.theme);

  useEffect(() => {
    console.log("Applying theme class:", mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
