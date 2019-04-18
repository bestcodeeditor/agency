import React from "react";
import Head from "next/head";
import HeaderApp from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title = "TGS" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <HeaderApp />

    {children}

    <Footer />
  </div>
);

export default Layout;
