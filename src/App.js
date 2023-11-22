import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Card from "./components/card.js";
import Details from "./components/details.js";
import { UserContext, GlobalContext } from "./contextApi/customContext.js";
import NotFound from "./components/notfound.js";
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";

import Nav from "./components/nav.js";
export function App() {
  
  return (
    <UserContext>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/requests" element={<Card />} />
            <Route path="/users" element={<Card />} />
            <Route path="/details" element={<Details />} />
            <Route path= "*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </UserContext>
  );
}

export default App;
