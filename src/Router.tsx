import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokeBook } from "./pages/PokeBook";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokeBook />} />
      </Routes>
    </BrowserRouter>
  );
}
