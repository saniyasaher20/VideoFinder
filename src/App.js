import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      }

    ]
  }
])

function App() {
  return (
    <div className="px-4">

      {/* Providing store to the App */}
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}


export default App;
