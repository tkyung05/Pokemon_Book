import { Route, Routes } from "react-router-dom";
import { PokeBook } from "./pages/PokeBook";

export function Router() {
  return (
    <Routes>
      <Route path="" element={<PokeBook />} />
    </Routes>
  );
}
