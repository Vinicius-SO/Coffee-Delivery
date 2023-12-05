import { Route, Routes } from "react-router-dom";
import { Cart } from "./Pages/Cart";
import { Home } from "./Pages/Home";
import { Sucess } from "./Pages/Sucess";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/sucess" element={<Sucess/>}/>
            <Route/>
        </Routes>
    )
}