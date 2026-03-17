"use client";
import AreaModel from "../../../components/AreaModel";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const items = useRef(null);
  const cube1 = useRef(null);
  const shape = useRef(null);
  const smootherRef = useRef<ScrollSmoother | null>(null); // ⭐ aqui

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      smootherRef.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        normalizeScroll: true,
      });

      ScrollTrigger.create({
        trigger: shape.current,
        pin: true,
        start: "center center",
        end: "+=400",
      });

      gsap.fromTo(
        cube1.current,
        { x: -100, opacity: 0, rotate: -180 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          scrollTrigger: {
            trigger: items.current,
            start: "top 50%",
            end: "bottom 70%",
            scrub: true,
            markers: true,
          },
        }
      );

    });

    return () => ctx.revert();
  }, []);

  return (
    <main id="smooth-wrapper" className="w-full overflow-visible">
      <div id="smooth-content">

        <button
          onClick={() =>
            smootherRef.current?.scrollTo(shape.current, true, "center center")
          }
        >
          Go To Last Item
        </button>

        <div className="w-full p-2 space-y-2">
          <AreaModel label="Item 1" data-speed="0.5" />
          <AreaModel label="Item 2" data-speed="0.8" />
        </div>

        <div ref={items} className="w-full h-100 mt-4 flex justify-center">
          <div ref={cube1} className="w-50 h-50 bg-red-500" />
        </div>

        <div className="w-full h-100 mt-4 flex justify-center">
          <div
            ref={shape}
            className="w-50 h-50 bg-linear-to-b from-rose-700 via-emerald-700 to-indigo-700 rounded-full"
          />
        </div>

        <div className="h-screen" />
      </div>
    </main>
  );
}