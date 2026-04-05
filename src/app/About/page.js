"use client";
import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-brown  p-6 ">
       
      <div className=" max-w-2xl  mx-auto ">
      <div className=" max-w-2xl  mx-auto flex flex-col items-center w-250  mb-8">
        <img src="/logo.png" className="w-20"/>
        <h1 className="text-[#C8956C] text-5xl mb-2">~ coffee shop ~</h1>
        <p className="text-[#a07850] text-sm">Your favorite spot for a perfect cup</p>
      </div>
      <div className="bg-[#5f3415] border border-[#ab8164] rounded-2xl p-6 mb-6">
        <h2 className="text-[#C8956C] text-xl font-bold mb-4">About Us</h2>
        <p className="text-white text-lg  ">
          Welcome to Coffee Shop — a cozy place where every cup tells a story.
          We serve freshly brewed coffee, delicious pastries, and hearty meals
          crafted with love. Whether you are starting your morning or taking a
          break, we are here to make your day better, one sip at a time.
        </p>
      </div>

      
      <div className="bg-[#5f3415] border border-[#ab8164] rounded-2xl p-6 mb-6">
        <h2 className="text-[#C8956C] text-xl font-bold mb-4">Working Hours</h2>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <p className="text-white">Monday – Thursday</p>
            <p className="text-[#C8956C] font-bold">7:00 AM – 11:00 PM</p>
          </div>
          <div className="flex justify-between">
            <p className="text-white">Friday</p>
            <p className="text-[#C8956C] font-bold">1:00 PM – 12:00 AM</p>
          </div>
          <div className="flex justify-between">
            <p className="text-white">Saturday – Sunday</p>
            <p className="text-[#C8956C] font-bold">8:00 AM – 12:00 AM</p>
          </div>
        </div>
      </div>

      
      <div className="bg-[#5f3415] border border-[#ab8164] rounded-2xl p-6 mb-6">
        <h2 className="text-[#C8956C] text-xl font-bold mb-4">Holidays & Closures</h2>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <p className="text-white">Eid Al-Fitr</p>
            <p className="text-[#C8956C] font-bold">3 Days Closed</p>
          </div>
          <div className="flex justify-between">
            <p className="text-white">Eid Al-Adha</p>
            <p className="text-[#C8956C] font-bold">3 Days Closed</p>
          </div>
          <div className="flex justify-between">
            <p className="text-white">National Day</p>
            <p className="text-[#C8956C] font-bold">1 Day Closed</p>
          </div>
        </div>
      </div>

     
      <div className="bg-[#5f3415] border border-[#ab8164] rounded-2xl p-6 mb-10">
        <h2 className="text-[#C8956C] text-xl font-bold mb-4">Contact Us</h2>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <p className="text-white font-bold">Phone</p>
            <p className="text-[#C8956C] font-bold">+962 79 000 0000</p>
          </div>
          <div className="flex justify-between">
            <p className="text-white font-bold">Email</p>
            <p className="text-[#C8956C] font-bold">hello@coffeeshop.com</p>
          </div>
          <div className="flex justify-between">
            <p className="text-white font-bold">Location</p>
            <p className="text-[#C8956C] font-bold">Amman, Jordan</p>
          </div>
        </div>
        </div>
      </div>

    </div>
  );
}