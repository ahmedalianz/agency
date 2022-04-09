import { Route, Routes } from "react-router-dom";

import Home from "pages/Home";

export default function PortfolioRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
