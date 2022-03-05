import './App.css';
import Navbar from "./components/navbar";
import React, {Fragment} from "react";
import Sidebar from "./components/sidebar";
import Products from "./components/products";
import Footer from "./components/footer";
import Breadcrumb from "./components/breadcrumb";

function App() {
    return (
        <Fragment>
            <div className="relative min-h-screen md:flex">
                <Sidebar/>
                <div className="flex-1 px-6">
                    <Navbar/>
                    <Breadcrumb/>
                    <Products/>
                    <Footer/>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
