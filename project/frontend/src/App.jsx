import './App.css';
import Navbar from "./components/navbar";
import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Sidebar from "./components/sidebar";
import Products from "./components/products";
import Footer from "./components/footer";
import Breadcrumb from "./components/breadcrumb";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Register from "./components/register";
import Profile_Component from "./components/profile";


class App extends Component {
    state = {
        products: [
            {
                "Product_Url": "https://uniworthshop.com/product/plain-brown-smart-fit-shirt-fs1297sf",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS1297SF..webp",
                "Product_Title": "Plain Brown Smart Fit Shirt",
                "SKU": "FS1297SF",
                "Selling_Price": "2995",
                "Color": "Brown,16.5",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "80% Cotton 20% Polyester",
                "Fit": "Smart Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/plain-sea-green-regular-fit-shirt-fs1250-1",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/aa828e81e000775d5f5bc71041a138f9.webp",
                "Product_Title": "Plain Sea Green Regular Fit Shirt",
                "SKU": "FS1250-1",
                "Selling_Price": "2995",
                "Color": "Sea Green,14.5",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "80% Cotton 20% Polyester",
                "Fit": "Regular Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/plain-d-peach-regular-fit-shirt-fs1251-1",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/ace12ac84f7559c6b46a01ff6e0ec8ef.webp",
                "Product_Title": "Plain D Peach Regular Fit Shirt",
                "SKU": "FS1251-1",
                "Selling_Price": "2995",
                "Color": "D Peach,14.5",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "80% Cotton 20% Polyester",
                "Fit": "Regular Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/yellow-stripe-smart-fit-shirt-sw1852",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/3f4d6dc1061996dcf0b0d137d9f16781.webp",
                "Product_Title": "Yellow Stripe Smart Fit Shirt",
                "SKU": "SW1852",
                "Selling_Price": "2495",
                "Color": "Yellow,13.5",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fit": "Smart Fit",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/stripe-pink-regular-fit-shirt-fs2488rf",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS2488RF..webp",
                "Product_Title": "Stripe Pink Regular Fit Shirt",
                "SKU": "FS2488RF",
                "Selling_Price": "2995",
                "Color": "Pink,17.0",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "80% Cotton 20% Polyester",
                "Fit": "Regular Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/stripe-red-regular-fit-shirt-fs2516rf",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS2516RF..webp",
                "Product_Title": "Stripe Red Regular Fit Shirt",
                "SKU": "FS2516RF",
                "Selling_Price": "2995",
                "Color": "Red,16.0",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "80% Cotton 20% Polyester",
                "Fit": "Regular Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/stripe-whitepurple-regular-fit-shirt-fs2067",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/bf3681806894aa0632a3314327f5b6c3.webp",
                "Product_Title": "Stripe White purple Regular Fit Shirt",
                "SKU": "FS2067",
                "Selling_Price": "4475",
                "Color": "White Purple,14.5",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "100% Cotton",
                "Fit": "Regular Fit",
                "Collars_Type": "Extrawide Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/plain-grey-regular-fit-shirt-fs1006-1",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/7971ca9a12cf5afb0357e5c7d87370de.webp",
                "Product_Title": "Plain Grey Regular Fit Shirt",
                "SKU": "FS1006-1",
                "Selling_Price": "3945",
                "Color": "Grey,14.5;Grey,16.0;Grey,17.0",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Designer Shirt",
                "Fit": "Regular Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/plain-l-yellow-classic-fit-shirt-fs1137",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/368e2de05b1c48d77a37937b0632441a.webp",
                "Product_Title": "Plain L Yellow Classic Fit Shirt",
                "SKU": "FS1137",
                "Selling_Price": "4475",
                "Color": "L Yellow,15.0;L Yellow,16.0;L Yellow,17.0",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "100% Cotton",
                "Fit": "Classic Fit",
                "Collars_Type": "Extrawide Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/plain-blue-regular-fit-shirt-fs1244-1",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/ea81cd357b3a451858a3065ab0ae5d4c.webp",
                "Product_Title": "Plain Blue Regular Fit Shirt",
                "SKU": "FS1244-1",
                "Selling_Price": "2995",
                "Color": "Blue,15.5;Blue,16.0",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "80% Cotton 20% Polyester",
                "Fit": "Regular Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/plain-pink-regular-fit-shirt-fs1285-1",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/455472fe72bd716c7025494bd40f562f.webp",
                "Product_Title": "Plain Pink Regular Fit Shirt",
                "SKU": "FS1285-1",
                "Selling_Price": "2995",
                "Color": "Pink,14.5;Pink,15.5;Pink,16.0;Pink,16.5;Pink,17.0",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "80% Cotton 20% Polyester",
                "Fit": "Regular Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/plain-royal-blue-regular-fit-shirt-fs1331rf",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS1331RF.webp",
                "Product_Title": "Plain Royal Blue Regular Fit Shirt",
                "SKU": "FS1331RF",
                "Selling_Price": "2995",
                "Color": "Royal Blue,17.0",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "80% Cotton 20% Polyester",
                "Fit": "Regular Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/check-whitesky-regular-fit-shirt-fs2022",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/6ab8b60fa667834afa5e26e1bc21abbc.webp",
                "Product_Title": "Check White sky Regular Fit Shirt",
                "SKU": "FS2022",
                "Selling_Price": "4475",
                "Color": "White Sky,14.5;White Sky,15.5",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "100% Cotton",
                "Fit": "Regular Fit",
                "Collars_Type": "Extrawide Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/plain-mauve-regular-fit-shirt-fs1310rf",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS1310RF.webp",
                "Product_Title": "Plain Mauve Regular Fit Shirt",
                "SKU": "FS1310RF",
                "Selling_Price": "2995",
                "Color": "Mauve,16.0;Mauve,17.5",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "80% Cotton 20% Polyester",
                "Fit": "Regular Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/plain-purple-regular-fit-shirt-fs1427",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/fdbfad2d31fd8acd9c67cdd9181e697f.webp",
                "Product_Title": "Plain Purple Regular Fit Shirt",
                "SKU": "FS1427",
                "Selling_Price": "3495",
                "Color": "Purple,14.5;Purple,15.0;Purple,16.0;Purple,17.5",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "100% Cotton",
                "Fit": "Regular Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/plain-pink-regular-fit-shirt-fs1309rf",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS1309RF.webp",
                "Product_Title": "Plain Pink Regular Fit Shirt",
                "SKU": "FS1309RF",
                "Selling_Price": "2995",
                "Color": "Pink,15.5;Pink,16.0;Pink,17.0;Pink,17.5",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "80% Cotton 20% Polyester",
                "Fit": "Regular Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/plain-cream-regular-fit-shirt-fs1027rf",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS1027RF.webp",
                "Product_Title": "Plain Cream Regular Fit Shirt",
                "SKU": "FS1027RF",
                "Selling_Price": "2495",
                "Color": "Cream,15.5;Cream,16.0;Cream,17.0",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "65% Cotton 35% Polyester",
                "Fit": "Regular Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/plain-l-grey-smart-fit-shirt-fs1330sf",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/62a696e09a6b9da44e89027614ca4896.webp",
                "Product_Title": "Plain L Grey Smart Fit Shirt",
                "SKU": "FS1330SF",
                "Selling_Price": "2995",
                "Color": "L Grey,14.5;L Grey,15.0;L Grey,15.5",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "80% Cotton 20% Polyester",
                "Fit": "Smart Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/stripe-d-mauve-classic-fit-shirt-fs2161",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/728ece61502122f513bd8e4f86a48bc1.webp",
                "Product_Title": "Stripe D Mauve Classic Fit Shirt",
                "SKU": "FS2161",
                "Selling_Price": "3495",
                "Color": "D Mauve,15.5",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "100% Cotton",
                "Fit": "Classic Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/stripe-whitered-regular-fit-shirt-fs19024",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/5228c9f91b6e9fa7f6dfea8a782e1f31.webp",
                "Product_Title": "Stripe White red Regular Fit Shirt",
                "SKU": "FS19024",
                "Selling_Price": "3495",
                "Color": "White Red,14.5;White Red,17.5",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "100% Cotton",
                "Fit": "Regular Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/stripe-pink-smart-fit-shirt-fs2488sf",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS2488SF..webp",
                "Product_Title": "Stripe Pink Smart Fit Shirt",
                "SKU": "FS2488SF",
                "Selling_Price": "2995",
                "Color": "Pink,14.5;Pink,16.0;Pink,16.5",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "80% Cotton 20% Polyester",
                "Fit": "Smart Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/stripe-blue-smart-fit-shirt-fs2514sf",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS2514SF..webp",
                "Product_Title": "Stripe Blue Smart Fit Shirt",
                "SKU": "FS2514SF",
                "Selling_Price": "2995",
                "Color": "Blue,14.5",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "80% Cotton 20% Polyester",
                "Fit": "Smart Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/plain-orange-classic-fit-shirt-fs1213-2",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/ed9d32857b69c7711c0e6c7abc4965a3.webp",
                "Product_Title": "Plain Orange Classic Fit Shirt",
                "SKU": "FS1213-2",
                "Selling_Price": "2495",
                "Color": "Orange,14.5;Orange,15.0;Orange,15.5;Orange,16.0;Orange,16.5",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "65% Cotton 35% Polyester",
                "Fit": "Classic Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/plain-lime-smart-fit-shirt-fs1248",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/2f6e3fbeedd89d5fb9acd4cdd4ac90e8.webp",
                "Product_Title": "Plain Lime Smart Fit Shirt",
                "SKU": "FS1248",
                "Selling_Price": "2995",
                "Color": "Lime,16.0;Lime,17.5",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "65% Cotton 35% Polyester",
                "Fit": "Smart Fit",
                "Collars_Type": "French Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            {
                "Product_Url": "https://uniworthshop.com/product/plain-l-mauve-regular-fit-shirt-fs1668rf",
                "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS1668RF.webp",
                "Product_Title": "Plain L Mauve Regular Fit Shirt",
                "SKU": "FS1668RF",
                "Selling_Price": "3495",
                "Color": "L Mauve,16.0;L Mauve,17.0;L Mauve,17.5",
                "Discount": "0",
                "Original_Rating": "0",
                "Brand_Name": "Uniworth",
                "Type": "Formal Shirt",
                "Fabric": "100% Cotton",
                "Fit": "Regular Fit",
                "Collars_Type": "Extrawide Collar",
                "Sleeves": "Full Sleeves",
                "Cuff_Style": "Round Cuff"
            },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/plain-pink-regular-fit-shirt-fs1660rf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS1660RF.webp",
            //     "Product_Title": "Plain Pink Regular Fit Shirt",
            //     "SKU": "FS1660RF",
            //     "Selling_Price": "3495",
            //     "Color": "Pink,16.0;Pink,17.0;Pink,17.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Regular Fit",
            //     "Collars_Type": "French Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/check-whitepurple-business-casual-fit-shirt-sc2117",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/4b5a36f086d1d4c6140afa9c192245a3.webp",
            //     "Product_Title": "Check White purple Business Casual Fit Shirt",
            //     "SKU": "SC2117",
            //     "Selling_Price": "3495",
            //     "Color": "White Purple,0.0",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Designer Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Business Casual Fit",
            //     "Collars_Type": "Button Down Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Cut Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/check-whitegreen-business-casual-fit-shirt-sc2289-1",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/e3ee9863f683ed45aa9eeb276ff20100.webp",
            //     "Product_Title": "Check White green Business Casual Fit Shirt",
            //     "SKU": "SC2289-1",
            //     "Selling_Price": "3495",
            //     "Color": "White Green,0.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Designer Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Business Casual Fit",
            //     "Collars_Type": "Button Down Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Cut Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/plain-yellow-smart-fit-shirt-fs1863sf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS1863SF..webp",
            //     "Product_Title": "Plain Yellow Smart Fit Shirt",
            //     "SKU": "FS1863SF",
            //     "Selling_Price": "5475",
            //     "Color": "Yellow,14.5;Yellow,15.0;Yellow,15.5;Yellow,16.0;Yellow,16.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Smart Fit",
            //     "Collars_Type": "Extrawide Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/plain-pink-regular-fit-shirt-fs1802rd",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS1802RD..webp",
            //     "Product_Title": "Plain Pink Regular Fit Shirt",
            //     "SKU": "FS1802RD",
            //     "Selling_Price": "4475",
            //     "Color": "Pink,15.5;Pink,16.0;Pink,16.5;Pink,17.0;Pink,17.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Regular Fit",
            //     "Collars_Type": "Extrawide Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Double Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/plain-pink-smart-fit-shirt-fs1802sd",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS1802SD..webp",
            //     "Product_Title": "Plain Pink Smart Fit Shirt",
            //     "SKU": "FS1802SD",
            //     "Selling_Price": "4475",
            //     "Color": "Pink,14.5;Pink,15.0;Pink,15.5;Pink,16.0;Pink,16.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Smart Fit",
            //     "Collars_Type": "Extrawide Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Double Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/stripe-red-regular-fit-shirt-fs2330rf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS2330RF..webp",
            //     "Product_Title": "Stripe Red Regular Fit Shirt",
            //     "SKU": "FS2330RF",
            //     "Selling_Price": "5475",
            //     "Color": "Red,15.5;Red,16.0;Red,16.5;Red,17.0;Red,17.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fit": "Regular Fit",
            //     "Collars_Type": "Extrawide Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/stripe-red-smart-fit-shirt-fs2330sf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS2330SF..webp",
            //     "Product_Title": "Stripe Red Smart Fit Shirt",
            //     "SKU": "FS2330SF",
            //     "Selling_Price": "5475",
            //     "Color": "Red,14.5;Red,15.0;Red,15.5;Red,16.0;Red,16.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Smart Fit",
            //     "Collars_Type": "Extrawide Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/stripe-sky-regular-fit-shirt-fs2331rf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS2331RF..webp",
            //     "Product_Title": "Stripe Sky Regular Fit Shirt",
            //     "SKU": "FS2331RF",
            //     "Selling_Price": "5475",
            //     "Color": "Sky,16.0;Sky,17.0",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Regular Fit",
            //     "Collars_Type": "Extrawide Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/stripe-sky-smart-fit-shirt-fs2331sf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS2331SF..webp",
            //     "Product_Title": "Stripe Sky Smart Fit Shirt",
            //     "SKU": "FS2331SF",
            //     "Selling_Price": "5475",
            //     "Color": "Sky,15.0;Sky,16.0;Sky,16.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Smart Fit",
            //     "Collars_Type": "Extrawide Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/plain-blue-smart-fit-shirt-fs1026sf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS1026SF..webp",
            //     "Product_Title": "Plain Blue Smart Fit Shirt",
            //     "SKU": "FS1026SF",
            //     "Selling_Price": "2495",
            //     "Color": "Blue,14.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "65% Cotton 35% Polyester",
            //     "Fit": "Smart Fit",
            //     "Collars_Type": "French Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/plain-cream-smart-fit-shirt-fs1027sf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS1027SF..webp",
            //     "Product_Title": "Plain Cream Smart Fit Shirt",
            //     "SKU": "FS1027SF",
            //     "Selling_Price": "2495",
            //     "Color": "Cream,16.0",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "65% Cotton 35% Polyester",
            //     "Fit": "Smart Fit",
            //     "Collars_Type": "French Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/plain-blue-regular-fit-shirt-fs1026rf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS1026RF.webp",
            //     "Product_Title": "Plain Blue Regular Fit Shirt",
            //     "SKU": "FS1026RF",
            //     "Selling_Price": "2495",
            //     "Color": "Blue,16.0;Blue,17.0;Blue,17.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "65% Cotton 35% Polyester",
            //     "Fit": "Regular Fit",
            //     "Collars_Type": "French Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/check-blue-green-business-casual-fit-shirt-sc2375",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/99f332fa3861a3a0b1b32f2fd3ef3e97.webp",
            //     "Product_Title": "Check Blue green Business Casual Fit Shirt",
            //     "SKU": "SC2375",
            //     "Selling_Price": "3495",
            //     "Color": "Blue Green,0.0",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Designer Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Business Casual Fit",
            //     "Collars_Type": "Button Down Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Cut Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/plain-sky-smart-fit-shirt-fs1843sd",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS1843SD..webp",
            //     "Product_Title": "Plain Sky Smart Fit Shirt",
            //     "SKU": "FS1843SD",
            //     "Selling_Price": "5475",
            //     "Color": "Sky,15.0;Sky,16.0;Sky,16.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Smart Fit",
            //     "Collars_Type": "Extrawide Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Double Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/check-white-pink-business-casual-fit-shirt-sc2100",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/SC2100..webp",
            //     "Product_Title": "Check White pink Business Casual Fit Shirt",
            //     "SKU": "SC2100",
            //     "Selling_Price": "3495",
            //     "Color": "White Pink,0.5;White Pink,0.0",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Designer Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Business Casual Fit",
            //     "Collars_Type": "Button Down Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Cut Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/sky-blue-plain-classic-fit-shirt-fs1843rd",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS1843RD..webp",
            //     "Product_Title": "Sky Blue Plain Classic Fit Shirt",
            //     "SKU": "FS1843RD",
            //     "Selling_Price": "5475",
            //     "Color": "Sky,16.0",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fit": "Classic Fit",
            //     "Collars_Type": "Extrawide Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Double Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/white-blue-checked-business-casual-fit-shirt-sc764-1",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/8cfc4068be2b7eb6cf3d22dc46c7aa16.webp",
            //     "Product_Title": "White blue Checked Business Casual Fit Shirt",
            //     "SKU": "SC764-1",
            //     "Selling_Price": "3295",
            //     "Color": "White Sky,0.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Designer Shirt",
            //     "Fabric": "80% Cotton 20% Polyester",
            //     "Fit": "Business Casual Fit",
            //     "Collars_Type": "Button Down Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Cut Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/blue-multi-shades-checked-business-casual-fit-shirt-sc2370",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/5b524ab885cb4993ee1dedd9af795cd6.webp",
            //     "Product_Title": "Blue Multi Shades Checked Business Casual Fit Shirt",
            //     "SKU": "SC2370",
            //     "Selling_Price": "3495",
            //     "Color": "Navy Blue,0.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Designer Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Business Casual Fit",
            //     "Collars_Type": "Button Down Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Cut Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/sky-blue-pink-checked-business-casual-fit-shirt-sc2172",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/75bb48bdef7c918a4ba80c5b8ff12a82.webp",
            //     "Product_Title": "Sky Blue pink Checked Business Casual Fit Shirt",
            //     "SKU": "SC2172",
            //     "Selling_Price": "3495",
            //     "Color": "White Sky,0.5;White Sky,0.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Designer Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Business Casual Fit",
            //     "Collars_Type": "Button Down Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Cut Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/stripe-white-navy-classic-fit-shirt-fs2543rf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS2543RF....webp",
            //     "Product_Title": "Stripe White navy Classic Fit Shirt",
            //     "SKU": "FS2543RF",
            //     "Selling_Price": "3495",
            //     "Color": "White Navy,15.5;White Navy,16.0;White Navy,16.5;White Navy,17.0",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Designer Shirt",
            //     "Fabric": "80% Cotton 20% Polyester",
            //     "Fit": "Classic Fit",
            //     "Collars_Type": "French Collar",
            //     "Sleeves": "Full Sleeves"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/sky-blue-printed-smart-fit-shirt-fs486",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS486.webp",
            //     "Product_Title": "Sky Blue Printed Smart Fit Shirt",
            //     "SKU": "FS486",
            //     "Selling_Price": "3495",
            //     "Color": "Sky,14.5;Sky,16.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fit": "Smart Fit",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Cut Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/sky-blue-hounds-tooth-self-pattern-regular-fit-shirt-fs264",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/fb8074c1e05b6d6b73de179ed0e8b513.webp",
            //     "Product_Title": "Sky Blue Hounds Tooth Self Pattern Regular Fit Shirt",
            //     "SKU": "FS264",
            //     "Selling_Price": "4475",
            //     "Color": "Sky,14.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Regular Fit",
            //     "Collars_Type": "Extrawide Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/check-white-blue-business-casual-fit-shirt-sc2329",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/SC2329....webp",
            //     "Product_Title": "Check White blue Business Casual Fit Shirt",
            //     "SKU": "SC2329",
            //     "Selling_Price": "3495",
            //     "Color": "White Blue,0.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Designer Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Business Casual Fit",
            //     "Collars_Type": "Button Down Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Cut Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/stripe-white-green-smart-fit-shirt-fs2530sf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS2530SF...webp",
            //     "Product_Title": "Stripe White green Smart Fit Shirt",
            //     "SKU": "FS2530SF",
            //     "Selling_Price": "3495",
            //     "Color": "White Green,15.5;White Green,16.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Designer Shirt",
            //     "Fabric": "80% Cotton 20% Polyester",
            //     "Fit": "Smart Fit",
            //     "Collars_Type": "Extrawide Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Cut Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/stripe-white-purple-smart-fit-shirt-fs2541sf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/3bee8b2cbd11e52d0e6a80ea103ef56b.webp",
            //     "Product_Title": "Stripe White purple Smart Fit Shirt",
            //     "SKU": "FS2541SF",
            //     "Selling_Price": "2995",
            //     "Color": "White Purple,14.5;White Purple,15.5;White Purple,16.0;White Purple,16.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "80% Cotton 20% Polyester",
            //     "Fit": "Smart Fit",
            //     "Collars_Type": "French Collar",
            //     "Sleeves": "Full Sleeves"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/check-blue-business-casual-fit-shirt-sc838",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/SC838....webp",
            //     "Product_Title": "Check Blue Business Casual Fit Shirt",
            //     "SKU": "SC838",
            //     "Selling_Price": "3295",
            //     "Color": "Blue,0.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Designer Shirt",
            //     "Fabric": "80% Cotton 20% Polyester",
            //     "Fit": "Business Casual Fit",
            //     "Collars_Type": "Button Down Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Cut Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/plain-l-pink-smart-fit-shirt-fs1349-1sf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS1349-1SF..webp",
            //     "Product_Title": "Plain L Pink Smart Fit Shirt",
            //     "SKU": "FS1349-1SF",
            //     "Selling_Price": "2995",
            //     "Color": "L Pink,14.5;L Pink,15.0;L Pink,16.0;L Pink,16.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "80% Cotton 20% Polyester",
            //     "Fit": "Smart Fit",
            //     "Collars_Type": "French Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/plain-l-yellow-regular-fit-shirt-fs1335rf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/f750d1d5ef75054c90a646384d4ba4e2.webp",
            //     "Product_Title": "Plain L Yellow Regular Fit Shirt",
            //     "SKU": "FS1335RF",
            //     "Selling_Price": "2995",
            //     "Color": "L Yellow,17.0;L Yellow,17.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "80% Cotton 20% Polyester",
            //     "Fit": "Regular Fit",
            //     "Collars_Type": "French Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/stripe-whitered-regular-fit-shirt-fs2347-1",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/5a3d5e4ea095f3b7f26d2a81014d4aca.webp",
            //     "Product_Title": "Stripe White red Regular Fit Shirt",
            //     "SKU": "FS2347-1",
            //     "Selling_Price": "2995",
            //     "Color": "White Red,14.5;White Red,15.0;White Red,17.0",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "80% Cotton 20% Polyester",
            //     "Fit": "Regular Fit",
            //     "Collars_Type": "French Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/lilac-self-texture-regular-fit-formal-shirt-fs2440",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/f29c372c63cb7b4ce38dabf090bb693d.webp",
            //     "Product_Title": "Lilac Self Texture Regular Fit Formal Shirt",
            //     "SKU": "FS2440",
            //     "Selling_Price": "2995",
            //     "Color": "Lilac,14.5;Lilac,16.0;Lilac,17.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fit": "Regular Fit",
            //     "Collars_Type": "French Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/plain-l-orange-smart-fit-shirt-fs1855sf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/84131da6ab69cc76fd7769d543326553.webp",
            //     "Product_Title": "Plain L Orange Smart Fit Shirt",
            //     "SKU": "FS1855SF",
            //     "Selling_Price": "5475",
            //     "Color": "L Orange,14.5;L Orange,15.0;L Orange,15.5;L Orange,16.0;L Orange,16.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Smart Fit",
            //     "Collars_Type": "Extrawide Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/check-blue-green-regular-fit-shirt-fs757",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/a0e64b4a1796f57a5cc4a5f458d92e1e.webp",
            //     "Product_Title": "Check Blue green Regular Fit Shirt",
            //     "SKU": "FS757",
            //     "Selling_Price": "3945",
            //     "Color": "White Green,14.5;White Green,15.0;White Green,15.5;White Green,16.0;White Green,16.5;White Green,17.0;White Green,17.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Designer Shirt",
            //     "Fit": "Regular Fit",
            //     "Collars_Type": "French Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Cut Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/l-mauve-self-texture-smart-fit-shirt-fs2452sf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS2452SF..webp",
            //     "Product_Title": "L Mauve Self Texture Smart Fit Shirt",
            //     "SKU": "FS2452SF",
            //     "Selling_Price": "2995",
            //     "Color": "L Mauve,15.5;L Mauve,16.0;L Mauve,16.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "80% Cotton 20% Polyester",
            //     "Fit": "Smart Fit",
            //     "Collars_Type": "French Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/multi-stripe-regular-fit-shirt-fs2469rf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/692b3d1bdec8660d4eebfa1cbadab504.webp",
            //     "Product_Title": "Multi Stripe Regular Fit Shirt",
            //     "SKU": "FS2469RF",
            //     "Selling_Price": "2995",
            //     "Color": "White Red,17.0",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "80% Cotton 20% Polyester",
            //     "Fit": "Regular Fit",
            //     "Collars_Type": "French Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/stripe-plum-black-smart-fit-shirt-fs2284sf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS2284SF.webp",
            //     "Product_Title": "Stripe Plum black Smart Fit Shirt",
            //     "SKU": "FS2284SF",
            //     "Selling_Price": "4475",
            //     "Color": "Plum,15.0;Plum,16.0",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Designer Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Smart Fit",
            //     "Collars_Type": "Extrawide Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/stripe-red-blue-business-casual-fit-shirt-fs2247-1",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/14e6858da2d41575c374f9f8e0d95e44.webp",
            //     "Product_Title": "Stripe Red blue Business Casual Fit Shirt",
            //     "SKU": "FS2247-1",
            //     "Selling_Price": "3945",
            //     "Color": "White Blue,14.5;White Blue,17.0",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Designer Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Business Casual Fit",
            //     "Collars_Type": "Extrawide Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/stripe-red-smart-fit-shirt-fs2516sf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/b3bb299a2e4476d7075213446a422dfc.webp",
            //     "Product_Title": "Stripe Red Smart Fit Shirt",
            //     "SKU": "FS2516SF",
            //     "Selling_Price": "2995",
            //     "Color": "Red,14.5;Red,15.0;Red,15.5;Red,16.0;Red,16.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Formal Shirt",
            //     "Fabric": "80% Cotton 20% Polyester",
            //     "Fit": "Smart Fit",
            //     "Collars_Type": "French Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/white-half-sleeve-smart-fit-designer-shirt-hfpsw1000-6",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/3604173d621f0aec32ba044ebb2ece94.webp",
            //     "Product_Title": "White Half Sleeve Smart Fit Designer Shirt",
            //     "SKU": "HFPSW1000-6",
            //     "Selling_Price": "2195",
            //     "Color": "White,15.0",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Designer Shirt",
            //     "Fabric": "65% Cotton 35% Polyester",
            //     "Fit": "Smart Fit",
            //     "Sleeves": "Half Sleeves"
            // },
            // {
            //     "Product_Url": "https://uniworthshop.com/product/plain-white-classic-fit-shirt-fs1870-1rf",
            //     "Image_Url": "https://uniworthdress.com/uploads/product/webp/FS1870-1RF....webp",
            //     "Product_Title": "Plain White Classic Fit Shirt",
            //     "SKU": "FS1870-1RF",
            //     "Selling_Price": "5475",
            //     "Color": "White,17.5",
            //     "Discount": "0",
            //     "Original_Rating": "0",
            //     "Brand_Name": "Uniworth",
            //     "Type": "Designer Shirt",
            //     "Fabric": "100% Cotton",
            //     "Fit": "Classic Fit",
            //     "Collars_Type": "Extrawide Collar",
            //     "Sleeves": "Full Sleeves",
            //     "Cuff_Style": "Round Cuff"
            // },
        ]
    };

    handleDelete = (SKU) => {
        const products = this.state.products.filter(p => p.SKU !== SKU)
        this.setState({products})

    };

    handleAddProduct = (product) => {
        const products = this.state.products;
        products.push(product)
        this.setState({products})
    };

    handleEditProduct = (product) => {
        const products = this.state.products;

        // Find index of specific object using findIndex method.
        const product_index = products.findIndex((p => p.SKU === product.SKU));

        // Update object
        products[product_index] = product

        // Save
        this.setState({products})
    };

    render() {
        return (
            <div className="relative min-h-screen md:flex">

                <Routes>
                    <Route path="/products"
                           element={
                               <>
                                   <Sidebar products_count={this.state.products.length}/>
                                   <div className="flex-1 px-6">
                                       <Navbar/>
                                       <Breadcrumb title="All Products"
                                                   dir="Products"/>
                                       <Products onDelete={this.handleDelete}
                                                 onAdd={this.handleAddProduct}
                                                 onEdit={this.handleEditProduct}
                                                 products={this.state.products}/>
                                       <Footer/>
                                   </div>
                               </>
                           }/>
                    <Route path="/dashboard"
                           element={
                               <>
                                   <Sidebar products_count={this.state.products.length}/>
                                   <div className="flex-1 px-6">
                                       <Navbar/>
                                       <Breadcrumb title="Dashboard"
                                                   dir="Dashboard"/>
                                       <Dashboard/>
                                       <Footer/>
                                   </div>
                               </>
                           }/>
                    <Route path="/users"
                           element={
                               <>
                                   <Sidebar products_count={this.state.products.length}/>
                                   <div className="flex-1 px-6">
                                       <Navbar/>
                                       <Breadcrumb title="All Users"
                                                   dir="Users"/>
                                       <Dashboard/>
                                       <Footer/>
                                   </div>
                               </>
                           }/>
                    <Route path="/login"
                           element={
                               <>
                                   <div className="flex-1 px-6">
                                       <Login/>
                                   </div>
                               </>
                           }/>
                    <Route path="/register"
                           element={
                               <>
                                   <div className="flex-1 px-6">
                                       <Register/>
                                   </div>
                               </>
                           }/>
                    <Route path="/profile"
                           element={
                               <>
                                   <Sidebar products_count={this.state.products.length}/>
                                   <div className="flex-1 px-6">
                                       <Navbar/>
                                       <Breadcrumb title="My Store"
                                                   dir="Profile Setup"/>
                                       <Profile_Component />
                                       <Footer/>
                                   </div>
                               </>
                           }/>
                    <Route exact path="/"
                           element={
                               <>
                                   <Sidebar products_count={this.state.products.length}/>
                                   <div className="flex-1 px-6">
                                       <Navbar/>
                                       <Breadcrumb title="All Products"
                                                   dir="Products"/>
                                       <Products onDelete={this.handleDelete}
                                                 onAdd={this.handleAddProduct}
                                                 onEdit={this.handleEditProduct}
                                                 products={this.state.products}/>
                                       <Footer/>
                                   </div>
                               </>
                           }/>
                </Routes>
            </div>
        );
    }
}

export default App;
