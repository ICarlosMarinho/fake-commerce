import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../views/App";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
