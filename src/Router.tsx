import { Route, Routes } from "react-router-dom";
import { Cart } from "./Pages/Cart";
import { Home } from "./Pages/Home";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route/>
        </Routes>
    )
}