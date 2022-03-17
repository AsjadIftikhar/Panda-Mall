import './App.css';
import Navbar from "./components/navbar";
import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Sidebar from "./components/sidebar";
import Products from "./components/products";
import Footer from "./components/footer";
import Breadcrumb from "./components/breadcrumb";
import Dashboard from "./components/dashboard";

class App extends Component {
    state = {
        products: [
            {
                Image_Url: "https://uniworthdress.com/uploads/product/webp/FS1297SF..webp",
                Product_Title: "Plain Brown Smart Fit Shirt",
                SKU: "FS1297SF",
                Selling_Price: "2995",
                Color: "Brown"
            },
            {
                Image_Url: "https://uniworthdress.com/uploads/product/webp/FS1297SF..webp",
                Product_Title: "Plain Brown Smart Fit Shirt",
                SKU: "FS1297SF",
                Selling_Price: "2995",
                Color: "Brown"
            },
            {
                Image_Url: "https://uniworthdress.com/uploads/product/webp/FS1297SF..webp",
                Product_Title: "Plain Brown Smart Fit Shirt",
                SKU: "FS1297SF",
                Selling_Price: "2995",
                Color: "Brown"
            },
            {
                Image_Url: "https://uniworthdress.com/uploads/product/webp/FS1297SF..webp",
                Product_Title: "Plain Brown Smart Fit Shirt",
                SKU: "FS1297SF",
                Selling_Price: "2995",
                Color: "Brown"
            },
            {
                Image_Url: "https://uniworthdress.com/uploads/product/webp/FS1297SF..webp",
                Product_Title: "Plain Brown Smart Fit Shirt",
                SKU: "FS1297SF",
                Selling_Price: "2995",
                Color: "Brown"
            },
            {
                Image_Url: "https://uniworthdress.com/uploads/product/webp/FS1297SF..webp",
                Product_Title: "Plain Brown Smart Fit Shirt",
                SKU: "FS1297SF",
                Selling_Price: "2995",
                Color: "Brown"
            },
            {
                Image_Url: "https://uniworthdress.com/uploads/product/webp/FS1297SF..webp",
                Product_Title: "Plain Brown Smart Fit Shirt",
                SKU: "FS1297SF",
                Selling_Price: "2995",
                Color: "Brown"
            },
            {
                Image_Url: "https://uniworthdress.com/uploads/product/webp/FS1297SF..webp",
                Product_Title: "Plain Brown Smart Fit Shirt",
                SKU: "FS1297SF",
                Selling_Price: "2995",
                Color: "Brown"
            },
            {
                Image_Url: "https://uniworthdress.com/uploads/product/webp/FS1297SF..webp",
                Product_Title: "Plain Brown Smart Fit Shirt",
                SKU: "FS1297SF",
                Selling_Price: "2995",
                Color: "Brown"
            },
            {
                Image_Url: "https://uniworthdress.com/uploads/product/webp/FS1297SF..webp",
                Product_Title: "Plain Brown Smart Fit Shirt",
                SKU: "FS1297SF",
                Selling_Price: "4000",
                Color: "Black"
            },

        ]
    };

    render() {
        return (
            <div className="relative min-h-screen md:flex">
                <Sidebar/>
                <div className="flex-1 px-6">
                    <Navbar/>
                    <Breadcrumb/>
                    <Switch>
                        <Route path="/products" render={(props) => <Products products={this.state.products} {...props}/>}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route exact path="/" render={(props) => <Products products={this.state.products} {...props}/>}/>
                    </Switch>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
