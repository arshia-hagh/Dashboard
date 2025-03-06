import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.ts";
import { BrowserRouter } from "react-router";
import { ThemeContexProvider } from "./Context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeContexProvider>
          <App />
        </ThemeContexProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
