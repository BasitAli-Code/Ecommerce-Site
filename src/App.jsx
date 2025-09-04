import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NewsLetter from "./components/NewsLetter.jsx";
import Footer from "./components/Footer.jsx";

const LandingPage = lazy(() => import("./pages/LandingPage.jsx"));
const ShopPage = lazy(() => import("./pages/ShopPage.jsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const CartPage = lazy(() => import("./pages/CartPage.jsx"));
const ProductDetails = lazy(() => import("./pages/ProductDetails.jsx"));
const OrderConfirmationPage = lazy(() =>
  import("./pages/OrderConfirmationPage.jsx")
);

const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contactUs" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/order-confirmation"
            element={<OrderConfirmationPage />}
          />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
      </Suspense>

      <NewsLetter />
      <Footer />
    </>
  );
};

export default App;
