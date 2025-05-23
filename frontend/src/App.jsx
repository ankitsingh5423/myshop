import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <Routes>
      <Route path="admin" element={<AdminLayout />}>
        <Route path="" element={<Dashboard />} />
      </Route>
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
};

export default App;
