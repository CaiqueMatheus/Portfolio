import styles from "./pages.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer/footer";
import React from "react";
import SideNavbar from "../components/side-navbar/side-navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <main>
        <SideNavbar />
        <Component {...pageProps} />;
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
