"use client";

import Box from "@/components/Box";
import React from "react";
import { BounceLoader } from "react-spinners";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      {/* <BounceLoader color="#22c55e" size={40} /> */}
      <ScaleLoader color="#22c55e" />
    </Box>
  );
};

export default Loading;
