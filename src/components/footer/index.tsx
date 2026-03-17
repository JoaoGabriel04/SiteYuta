import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import {faFacebook, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import {faCopyright} from "@fortawesome/free-regular-svg-icons"

type MenuOption = {
  text: string;
  url: string;
}

const menuOptions: MenuOption[] = [
  { text: "Início", url: "/" },
  { text: "Sobre", url: "/sobre" },
  { text: "Suporte", url: "/suporte" }
]

export default function Footer() {
  return (
    <footer className="relative w-full h-90 lg:h-100 bg-[url('/images/foto-fabin-grajau.jpeg')] bg-center lg:bg-position-[center_-350px] bg-cover bg-no-repeat text-white pt-8 border-t border-zinc-700">

      <div className="w-full flex justify-center items-center z-10">
        <Image src={'/images/Logo_Fabin_Grajau_Horizontal.png'} alt="logo-fabrica-de-inovação" width={500} height={500} className="w-80 lg:w-100 z-10" />
      </div>
      <div className="w-full mt-4">

        <ul className="w-full flex justify-center items-center gap-6 space-x-6 z-10">
          {menuOptions.map((option, index) => (
            <li key={index} className="font-jersey25 text-[18px] lg:text-xl hover:scale-110 transition-all z-10"><Link href={option.url}>{option.text}</Link></li>
          ))}
        </ul>

        <ul className="w-full flex justify-center items-center gap-6 space-x-6 mt-8 z-10">
          <li className="z-10"><FontAwesomeIcon icon={faInstagram} className="w-6 lg:w-7 cursor-pointer text-zinc-50 hover:text-pink-600 transition-all"/></li>
          <li className="z-10"><FontAwesomeIcon icon={faFacebook} className="w-6 lg:w-7 cursor-pointer hover:text-blue-600 transition-all"/></li>
          <li className="z-10"><FontAwesomeIcon icon={faWhatsapp} className="w-6 lg:w-7 cursor-pointer hover:text-green-600 transition-all"/></li>
        </ul>

      </div>

      <section className="absolute bottom-0 left-0 w-full h-2/10 border-t border-zinc-700/50 flex justify-center items-center z-10">
          <span className="flex justify-center items-center gap-4 text-zinc-500"><FontAwesomeIcon icon={faCopyright} className="w-5"/><p>2026 Yuta. Todos os direitos reservados.</p></span>
      </section>

      <div className="w-full h-full absolute top-0 left-0 bg-zinc-950/90 z-1"></div>

    </footer>
  );
}

{/* <div className="flex items-center justify-center p-5 bg-zinc-900 shadow-lg gap-4">
                <a href="#"><img src="/images/instagram.png" alt="Instagram" className="ml-4 w-6 h-6" /></a>
                <a href="#"><img src="/images/x.png" alt="X" className="ml-4 w-6 h-6" /></a>
                <a href="#"><img src="/images/youtube.png" alt="YouTube" className="ml-4 w-6 h-6" /></a>
                <a href="#"><img src="/images/github.png" alt="GitHub" className="ml-4 w-6 h-6" /></a>
            </div>

            <div className="mx-auto flex flex-col items-center justify-center p-10 gap-8 ">
                <div>
                    <img src="/images/FabIno.png" alt="Logo Fabrica de Inovações" />
                </div>
                <div className="text-center">
                    <p>© 2026 Yuta. Todos os direitos reservados.</p>
                    <p>Desenvolvido por Fabrica de Inovações</p>
                </div>
            </div> */}