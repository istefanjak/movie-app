"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Roboto_Mono } from "next/font/google";
import React, { FC, ReactNode } from "react";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "@/store";
import GenresInitializer from "@/components/genres/GenresInitializer";
import FavoritesInitializer from "@/components/favorites/FavoritesInitializer";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={`${roboto_mono.variable}`}>
      <head />
      <Provider store={store}>
        <FavoritesInitializer />
        <GenresInitializer />

        <body className="flex flex-col min-h-screen">
          <div className="container flex-grow px-5 mx-auto">
            <header className="fixed w-full left-0 right-0 top-0 space-y-4 z-10">
              <Navbar />
            </header>
            <main className="pt-36 lg:pt-28 flex-grow">{children}</main>
          </div>
          <Footer />
          <Toaster position="bottom-center" reverseOrder={false} />
        </body>
      </Provider>
    </html>
  );
};

export default Layout;
