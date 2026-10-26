import heroImg from "./assets/hero.png";
import viteLogo from "./assets/vite.svg";
import Navbar from "./components/Navbar";
import reactLogo from "./assets/react.svg";
import Allroutes from "./routes/Allroutes";
import { useEffect, useState } from "react";
import GPTButton from "./components/GPTButton";
import { BrowserRouter, useNavigate } from "react-router-dom";
import CookieBanner from "./components/cookieBanner/CookieBanner";

function App() {
  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify([
        {
          id: 1,
          name: "Wireless Headphones",
          price: 79.99,
          image:
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3Ryb25pYyUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
          description: "High-quality sound with noise cancellation",
          rating: 4.5,
        },
        {
          id: 2,
          name: "Smart Watch",
          price: 199.99,
          image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Track your fitness and stay connected",
          rating: 4.8,
        },
        {
          id: 3,
          name: "Wireless Mouse",
          price: 12.99,
          image:
            "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWMlMjBwcm9kdWN0fGVufDB8fDB8fHww",
          description: "Ergonomic design with precise tracking. 1000DPI",
          rating: 4.2,
        },
        {
          id: 4,
          name: "Xiomi 11X",
          price: 324.99,
          image:
            "https://rukminim2.flixcart.com/image/1536/1536/xif0q/mobile/g/q/q/-original-imaggcz6fyt9yayh.jpeg?q=90",
          description: "Dual SIM, 6GB RAM, 128GB Storage, 48MP Camera",
          rating: 4.6,
        },
      ]),
    );
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Allroutes />
      <GPTButton />
      <CookieBanner />
    </BrowserRouter>
  );
}

export default App;
