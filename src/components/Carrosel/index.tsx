"use client"
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";

export default function CarroselModeGame() {

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const textos = [
    { title: "Modo Quiz", resume: "Teste seus conhecimentos sobre a natureza e o mundo de Yuta com nosso modo quiz interativo." },
    { title: "Modo Memória", resume: "Desafie sua memória com nosso modo de jogo de memória, onde você combina cartas temáticas de Yuta." }
  ]

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)

    // define o inicial
    onSelect()

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (

    <section className="relative w-full h-full py-20 bg-[url('/images/wooden-background.jpg')] bg-bottom bg-cover bg-no-repeat flex flex-col items-center justify-center gap-20 lg:flex-row">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-7/10 md:w-1/2 lg:w-100 z-10">
        <CarouselContent className="w-full flex items-center justify-start gap-4">
          <CarouselItem className="w-full h-full flex justify-center items-center">
            <Image src={"/images/quiz.png"} alt="quiz-image" width={500} height={500} className="w-full" />
          </CarouselItem>
          <CarouselItem>
            <Image src={"/images/memoria.png"} alt="quiz-image" width={500} height={500} className="w-full" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="bg-zinc-200/40 border-zinc-50/50 text-zinc-100 cursor-pointer" />
        <CarouselNext className="bg-zinc-200/40 border-zinc-50/50 text-zinc-100 cursor-pointer" />
      </Carousel>

      <div className="w-full h-30 lg:w-100 px-8 lg:p-5 z-10">
        <h2 className="w-1/2 text-3xl font-jersey20 font-bold mb-2 bg-linear-to-r from-orange-200 via-amber-200 to-amber-300 bg-clip-text text-transparent">
          {textos[current].title}
        </h2>
        <p className="text-lg/5 lg:text-xl/7 font-jersey15 lg:font-jersey20 text-orange-100">{textos[current].resume}</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-1 bg-zinc-950/60 backdrop-blur-[3px]"></div>
    </section>
  )

}