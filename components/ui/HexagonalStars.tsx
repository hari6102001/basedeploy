"use client";
import React from "react";

const HexagonalStars = () => {
  const stars = Array.from({ length: 20 }).map((_, index) => (
    <div
      key={index}
      className="absolute bg-[#00BFFF] opacity-50 rounded-full"
      style={{
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        animation: `revolve ${Math.random() * 10 + 5}s linear infinite`,
        filter: "drop-shadow(0 0 5px rgba(255, 105, 180, 0.7))",
      }}
    />
  ));

  return <>{stars}</>;
};

export default HexagonalStars; 