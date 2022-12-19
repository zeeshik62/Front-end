import AppRoutes from "./routes";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { auth, onAuthStateChanged } from "./services/firebase-config";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    authListener();
  }, []);

  const authListener = async () => {
    // if (sls.decode(memoryStrings.authorization)) {
    //   let _user = jwt_decode(sls.decode(memoryStrings.authorization));
    //   setIsAuthorized(_user);
    // }
    onAuthStateChanged(auth, (user) => {
      setIsAuthorized(user);
    });
  };

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={2000}
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
        {isAuthorized !== undefined ? <AppRoutes isAuthorized={isAuthorized} /> : null}
      </Provider>
    </>
  );
}

export default App;
