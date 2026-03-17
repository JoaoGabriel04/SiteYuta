'use client'
import { useViewportHeight } from "@/hooks/useViewportHeight";
import gsap from "gsap";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type MenuOption = {
  text: string;
  url: string;
}

const menuOptions: MenuOption[] = [
  { text: "Início", url: "/" },
  { text: "Sobre", url: "/sobre" },
  { text: "Suporte", url: "/suporte" }
]

export default function Header() {

  const vh = useViewportHeight();

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (menuRef.current) {
      gsap.set(menuRef.current, { x: "100%" })
    }
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { opacity: 0 })
    }
  }, [])


  const openMenu = () => {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      })
    }
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      })
    }
  }

  const closeMenu = () => {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power2.inOut",
      })
    }
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      })
    }
  }

  useEffect(() => {
    if (isOpen) {
      openMenu()
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
      closeMenu()
    }
  }, [isOpen])

  function handleMenuClick() {
    if (isOpen) {
      closeMenu()
    } else {
      openMenu()
    }
    setIsOpen(!isOpen)
  }

  return (
    <header className="w-full h-16 text-white fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-full px-2">
        <Image src={"/images/yuta-logo.png"} alt="loog-yuta" width={100} height={100} className="w-20 lg:w-25" />

        <button onClick={handleMenuClick} className="flex flex-1 justify-end md:hidden cursor-pointer"><Menu size={28}/></button>
        {/* ==== Menu Lateral (Tela Pequena) ==== */}
        <nav ref={menuRef} style={{ height: vh }} className={`fixed right-0 top-0 z-999 w-6/10 lg:w-1/4 bg-zinc-800/90 border-l-3 border-amber-900 flex md:hidden flex-col py-4 shadow-md transition-all translate-x-full`}>
          <Image src={"/images/yuta-logotipo.png"} alt="logo-yuta" width={100} height={100} className="w-20 ml-4"/>
          <ul className="w-full px-4 py-1 mt-4 space-y-3 lg:space-y-4">
            {menuOptions.map((option, index) => {

              return (
                <li key={index} className={`flex items-center gap-4 px-2 py-2 rounded-sm cursor-pointer transition-all`}>
                  <Link href={option.url} className="text-lg lg:text-lg font-jersey20">{option.text}</Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* ==== Menu de Topo (Tela Grande) ==== */}
        <nav className="hidden lg:flex flex-1">
          <ul className="w-full flex gap-8 justify-end">
            {menuOptions.map((option, index) => {
              return (
                <li key={index} className={`flex items-center gap-8 px-2 py-2 rounded-sm cursor-pointer transition-all`}>
                  <Link href={option.url} className="text-lg font-jersey20 text-orange-950 hover:scale-110 hover:text-amber-100 text-shadow-sm transition-all">{option.text}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      <div ref={overlayRef} style={{ height: vh }} className={`w-full h-full fixed top-0 right-0 z-990 bg-zinc-800/60 backdrop-blur-[3px] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'} opacity-0`} onClick={handleMenuClick}></div>
    </header>


  );
}