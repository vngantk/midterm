import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import NewShopForm from "./NewShopForm";
import Home from "./Home";
import NewProductForm from "./NewProductForm";

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home/>} />
                        <Route path="NewShop" element={<NewShopForm />} />
                        <Route path="NewProduct" element={<NewProductForm />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
