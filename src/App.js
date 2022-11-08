import { Provider } from "react-redux";
import { store } from "./store/store";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Versity from "./Page/Versity";
import Login from "./component/Shared/Login/Login";
import Signup from "./component/Shared/Signup/Signup";
import Footer from "./component/Shared/Footer/Footer";
import NavBar from "./component/Shared/Nav/NavBar";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {/* <Route path="/urs" element={<Versity />}></Route> */}
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
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
