import {Link} from "react-router-dom";
import React from "react";

export default function Home() {
    return (
        <div className="text-center">
            <h1>Online Shop Management</h1>
            <div className="row">
                <Link to="/NewShop">New Shop</Link>
            </div>
            <div className="row">
                <Link to="/NewProduct">New Product</Link>
            </div>
        </div>
    );
}
