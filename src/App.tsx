import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { JobsListPage } from "./pages/JobsListPage/JobsListPage";
import { JobDetailsPage } from "./pages/JobDetailsPage/JobDetailsPage";


function App() {
  return  (<BrowserRouter>
    <Routes>
      <Route index element={<JobsListPage />} />
      <Route path="/job/:id" element={<JobDetailsPage />} />
    </Routes>
  </BrowserRouter>);
}

export default App;
