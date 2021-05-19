import "../styles/global.scss";
import "../../tailwind.config";
import Footer from "../components/footer";
import React from "react";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div>
      <Navbar />
        <main className="flex flex-row">          
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
