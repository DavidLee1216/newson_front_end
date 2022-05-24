import "../styles/globals.css";
import "../styles/formSwitch.css";
import "../styles/common.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar";
import MenuBar from "../components/menubar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <MenuBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
