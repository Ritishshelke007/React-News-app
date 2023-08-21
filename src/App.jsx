import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Loader from "./components/Loader";
import LoadingBar from "react-top-loading-bar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  const apiKey = import.meta.env.VITE_NEWS;
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    axios.interceptors.request.use(
      function (config) {
        setLoading(true);
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      function (response) {
        setLoading(false);
        return response;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  });

  return (
    <>
      <SkeletonTheme></SkeletonTheme>
      <LoadingBar
        color="#2998FF"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      {/* <Loader show={loading} /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              key="India"
              setProgress={setProgress}
              apiKey={apiKey}
              category="India"
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
        <Route
          path="/topnews"
          element={
            <Home
              key={"Top news"}
              setProgress={setProgress}
              apiKey={apiKey}
              category="Top news"
              loading={loading}
            />
          }
        />
        <Route
          path="/asia"
          element={
            <Home
              key={"asia"}
              setProgress={setProgress}
              apiKey={apiKey}
              category="asia"
              loading={loading}
            />
          }
        />
        <Route
          path="/europe"
          element={
            <Home
              key={"europe"}
              setProgress={setProgress}
              apiKey={apiKey}
              category="europe"
              loading={loading}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
