import AppRoutes from "./routes";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import store from "./store";
import "./App.css";
import { memoryStrings, sls } from "./utils";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(null);
  useEffect(() => {
    authListener();
  }, []);

  const authListener = () => {
    if (sls.decode(memoryStrings.authorization)) {
      let _user = jwt_decode(sls.decode(memoryStrings.authorization));
      setIsAuthorized(_user);
    }
  };

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <Provider store={store}>
        <AppRoutes isAuthorized={isAuthorized} />
      </Provider>
    </>
  );
}

export default App;
