import React from "react";
import Head from "../components/Head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default ({children}) => (
    <div className="root">
        <Head />
        <header>
            <Nav />
        </header>
        <main className="main">{children}</main>
        <Footer />
    </div>
);
