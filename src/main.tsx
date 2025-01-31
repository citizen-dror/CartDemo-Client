import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store"; // Import the store you created
import App from "./App";
import "./index.css"; // Optional: You can import global CSS here

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
     <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
);
