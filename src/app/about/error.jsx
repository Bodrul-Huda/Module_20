"use client";
import Image from "next/image";
import React from "react";

const Error = () => {
  return (
    <div className="w-full h-full">
      <Image src="/404-error.webp" objectFit="contain" />
    </div>
  );
};

export default Error;
