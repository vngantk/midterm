import {Outlet} from "react-router-dom";
import React from "react";

export default function Layout() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="/VN_Logo.png" alt="logo" width="48" height="48"/>
                    </a>
                    <button className="navbar-toggler" type="button"
                            data-bs-toggle="collapse" data-bs-target="#navbarToggler"
                            aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fs-5" id="navbarToggler">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/NewShop">New Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/NewProduct">New Product</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
