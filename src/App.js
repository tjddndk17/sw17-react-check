import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import CorpMember from "./views/member/CorpMember";

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route path="/member/corpMember" element={<CorpMember />} />
    </Routes>
  );
}

export default App;
