"use client";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import type React from "react";
import { useLayoutEffect } from "react";
import { StickyFooter } from "../Footer/StickyFooter";
import TopHeader from "../navbar/navbar";

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useLayoutEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <AnimatePresence mode="wait">
      <div className="provider-container ">
        <TopHeader />
        {children}
        <StickyFooter />
      </div>
    </AnimatePresence>
  );
}
