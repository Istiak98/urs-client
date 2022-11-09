import { Provider } from "react-redux";
import { store } from "./store/store";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Versity from "./Page/Versity";
import Login from "./component/Shared/Login/Login";
import Signup from "./component/Shared/Signup/Signup";

import { useAuthContext } from "./hooks/useAuthContext";

import Layout from "./Layout/Layout";
import HomePage from "./Page/HomePage";




function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          {/* <NavBar />
          <Home/> */}
          <Layout>
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route
              path="/urs"
              element={user ? <Versity /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/urs" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/urs" />}
            />
          </Routes>
          {/* <Footer /> */}
          </Layout>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
