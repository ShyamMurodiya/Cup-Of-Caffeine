// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/Home/Home";
import MenuPage from "./pages/Menu/MenuPage";
import AboutPage from "./pages/About/AboutPage";
import GalleryPage from "./pages/Gallery/GalleryPage";
import ReviewsPage from "./pages/Reviews/ReviewsPage";
import ContactPage from "./pages/Contact/ContactPage";
import PrebookPage from "./pages/Prebook/PrebookPage";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Footer from "./components/Footer";

// Load saved theme before rendering anything
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/prebook" element={<PrebookPage />} />
        </Routes>
      </main>
      <WhatsAppFloat/>
      <Footer/>
    </div>
  );
}