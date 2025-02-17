import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Cover } from "./screens/Cover";
import { ThemeProvider } from "./theme/ThemeProvider";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <ThemeProvider>
      <Cover />
    </ThemeProvider>
  </StrictMode>,
);
