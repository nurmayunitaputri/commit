// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "../redux/store";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer theme="colored" />
    </Provider>
  );
}
export default MyApp;
