import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import Allroutes from "./routes/Allroutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify([
        {
          id: 1,
          name: "Wireless Headphones",
          price: 79.99,
          image: "https://via.placeholder.com/300x300?text=Headphones",
          description: "High-quality sound with noise cancellation",
          rating: 4.5,
        },
        {
          id: 2,
          name: "Smart Watch",
          price: 199.99,
          image: "https://via.placeholder.com/300x300?text=SmartWatch",
          description: "Track your fitness and stay connected",
          rating: 4.8,
        },
        {
          id: 3,
          name: "USB-C Cable",
          price: 12.99,
          image: "https://via.placeholder.com/300x300?text=USB-Cable",
          description: "Fast charging and data transfer",
          rating: 4.2,
        },
        {
          id: 4,
          name: "Phone Case",
          price: 24.99,
          image: "https://via.placeholder.com/300x300?text=PhoneCase",
          description: "Durable protection with style",
          rating: 4.6,
        },
      ]),
    );
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Allroutes />
    </BrowserRouter>
  );
}

export default App;
