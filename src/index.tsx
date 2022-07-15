import { createRoot } from "react-dom/client";
import AppRoutes from "./routes";

import "./style.css";

const root = createRoot(document.getElementById("root") as Element);

root.render(<AppRoutes />);
