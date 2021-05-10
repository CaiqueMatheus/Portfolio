import "../styles/global.scss";
import "../../tailwind.config";
import Footer from "../components/footer";
import React from "react";
import SideNavbar from "../components/side-navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div>
        <main className="flex flex-row">
          <SideNavbar />
          <Component {...pageProps} />;
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
