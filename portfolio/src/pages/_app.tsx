import "../styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer/footer";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <main>
        <Component {...pageProps} />;
        <Footer />
      </main>
    </div>
  );
}

export default MyApp;
