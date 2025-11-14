import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.module.scss";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./app/theme";
import { JobsListPage } from "./pages/JobsListPage/JobsListPage";
import { JobDetailsPage } from "./pages/JobDetailsPage/JobDetailsPage";
import { Header } from "./widgets/header/Header";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Header
          darkMode={theme === "dark"}
          toggle={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        />
        <Routes>
          <Route index element={<JobsListPage />} />
          <Route path="/job/:id" element={<JobDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
