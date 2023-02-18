import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <div className="px-4">
      
      {/* Providing store to the App */}
      <Provider store={store}>
        <Header />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
