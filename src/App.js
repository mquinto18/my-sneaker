import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "./components/Loading_page";

function App() {
  return (
    <div className="bg-[#212529]">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<LoadingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
