import './App.css';
import Navbar from "./components/navbar";
import {Fragment} from "react";
import Sidebar from "./components/sidebar";
import Products from "./components/products";

function App() {
    return (
        <Fragment>
            <Navbar/>
            <div className="flex overflow-hidden bg-white pt-16">
                <Sidebar/>
                <Products/>
            </div>


        </Fragment>
    );
}

export default App;
