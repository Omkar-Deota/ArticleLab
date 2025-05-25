import HomePage from "./pages/home/HomePage";
import { Route, Routes } from "react-router-dom";
import DataTable from "./pages/home/Sample";
import DetailsPage from "./pages/Details";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/predict/:entry_id" element={<DetailsPage />} />
      <Route path="/sample" element={<DataTable />} />
    </Routes>
  );
};

export default App;
