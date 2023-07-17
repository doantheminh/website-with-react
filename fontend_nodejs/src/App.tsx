import { Routes, Route, NavLink, Link } from "react-router-dom";
import './index.css'
import { useState, useEffect } from "react";
import { IPproduct } from "./interfaces/product";
import { addProduct, getProducts } from "./api/product";
import ProductAdd from './pages/productAdd';
import Signin from "../src/pages/Signin";
import UserLayout from "./component/layout/userLayout";
import Signup from "./pages/Signup";
import Home from "./pages/home";
import AdminLayout from './component/layout/adminLayout';
import Dashboard from "./pages/dashboard";
import Category from "./pages/categoryList";

function App() {


  return (
    <div className="App">

      {/* {products.map((item: IPproduct) => (
            <div key={item._id}>{item.name}</div>
          ))} */}
      <Routes>
        <Route>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />

          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="add" element={<ProductAdd />}></Route>
            <Route path="category" element={<Category />}></Route>
          </Route>




        </Route>
      </Routes>
    </div>
  )
}

export default App
