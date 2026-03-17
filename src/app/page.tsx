'use client'
import Button1 from "@/components/ButtonType1";
import CarroselModeGame from "@/components/Carrosel";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {

  const smootherRef = useRef<ScrollSmoother | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      smootherRef.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        normalizeScroll: true
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="smooth-wrapper" className="flex flex-col font-sans dark:bg-background">
      <main id="smooth-content" className="flex flex-col items-center">

        {/* Hero - fica no fundo, a 2ª section desliza por cima */}
        <section className="w-full min-h-[95vh] flex items-center justify-center bg-[url('/images/sky-background-2.png')] bg-bottom bg-cover bg-no-repeat sticky top-0 z-0">
          <div className="flex flex-col flex-1 container mx-auto justify-center items-center text-center gap-6 py-20">

            <div className="font-jersey20 text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-orange-950">Seja Bem Vindo ao Yuta</h1>
              <p className="font-jersey15 text-lg lg:text-xl text-amber-900">Saiba tudo sobre o jogo Yuta.</p>
            </div>
            <Button1 size="md">Avalie Agora</Button1>
          </div>
        </section>

        {/* Section "Explore" - desliza por cima do hero, depois fica atrás do carousel */}
        <section className="w-full min-h-screen shadow-[0px_-4px_10px_#00000050] sticky top-0 z-10">
          <section className="py-20 bg-surface flex items-center">
            <div className="container mx-auto px-4 w-full">

              <div className="grid md:grid-cols-2 gap-12 px-4 lg:px-8">

                <div className="flex flex-col col-span-1 justify-center">
                  <h2 className="text-4xl lg:text-6xl text-orange-950 font-bold font-jersey20 mb-4">
                    Explore um mundo vivo
                  </h2>

                  <p className="text-lg lg:text-xl text-amber-900 font-jersey20 mb-6">
                    Yuta é um jogo de aventura inspirado na natureza, onde
                    você explora florestas, enfrenta desafios e descobre
                    segredos antigos.
                  </p>

                  <ul className="w-full space-y-2 font-jersey15 text-amber-950 lg:text-lg">
                    <li className="flex items-center gap-4"><span>🌿</span><p>Mundo aberto</p></li>
                    <li className="flex items-center gap-4"><span>⚔️</span><p>Combate estratégico</p></li>
                    <li className="flex items-center gap-4"><span>🧩</span><p>Puzzles ambientais</p></li>
                  </ul>
                </div>

                <div className="w-full flex justify-center lg:justify-end col-span-1">
                  <Image src="/images/phone-yutaImage.png" alt="Gameplay do jogo" width={400} height={300} className="drop-shadow-[2px_4px_10px_#00000050] w-60 h-auto lg:mr-8" />
                </div>

              </div>

            </div>

          </section>
          <CarroselModeGame />
        </section>

      </main>
    </div>
  );
}
