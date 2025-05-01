"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedGradientBackgroundProps {
  children: React.ReactNode;
}

export function AnimatedGradientBackground({
  children,
}: AnimatedGradientBackgroundProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-0 -left-40 h-[40rem] w-[40rem] rounded-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20 blur-3xl" />
          <div className="absolute top-60 right-0 h-[30rem] w-[30rem] rounded-full bg-gradient-to-l from-blue-600/20 to-cyan-600/20 blur-3xl" />
          <div className="absolute bottom-0 left-20 h-[35rem] w-[35rem] rounded-full bg-gradient-to-t from-teal-600/20 to-emerald-600/20 blur-3xl" />
        </div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}