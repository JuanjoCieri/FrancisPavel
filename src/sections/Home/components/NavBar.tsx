import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  MailIcon,
  PinIcon,
} from "@/utils/Icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Español from "../../../assets/Banderas/banderaespaña.png";
import Ingles from "../../../assets/Banderas/banderareino.png";

export default function NavBar() {
  const { t, i18n } = useTranslation();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const cambiarLenguaje = (leng) => {
    i18n.changeLanguage(leng);
  };

  return (
    <header>
      {/* Sección de dirección y correo */}
      <div className="bg-[#373636] flex flex-col tablet:flex-row justify-start items-start p-2 gap-4">
        <div className="flex justify-end items-end gap-3">
          <PinIcon />
          <p className="text-white text-sm">
          Quito, Pichincha, Ecuador
          </p>
        </div>
        <div className="hidden tablet:flex">
          <p className="font-bold text-white">|</p>
        </div>
        <div className="flex justify-end items-end gap-3">
          <MailIcon />
          <p className="text-white text-sm">fparaujoja@gmail.com</p>
        </div>
      </div>

      {/* Sección de navegación y botones */}
      <div className="w-full z-10 h-24 flex justify-between items-center px-6 backdrop-blur-lg bg-white">
        <div>
          <Link to={"/"}>
            <div className="flex justify-center items-center gap-2">
              <p className="text-2xl font-bold">Francis Pavel Araujo</p>
            </div>
          </Link>
        </div>

        {/* Menú de navegación en tablet y escritorio */}
        <div className="hidden tablet:flex">
          <ul className="flex flex-row justify-between items-center gap-10">
            <li className="text-black">
              {t("NAVBARINICIO")}
            </li>
            <li className="text-black">
              <a href="#about">
                {t("NAVBARNOSOTROS")}
                </a>

            </li>
            <li className="text-black">
              <a href="#services">

              {t("NAVBARSERVICIOS")}
              </a>
            </li>
            <li className="text-black">
              <a href="#footer">

              {t("NAVBAREQUIPO")}
              </a>
            </li>
            
          </ul>
        </div>

        {/* Botones de cambio de idioma y contacto en tablet y escritorio */}
        <div className="hidden tablet:flex justify-center items-center gap-10">
          <div className="flex justify-center items-center gap-3">
            <button onClick={() => cambiarLenguaje("es")}>
              <img src={Español} className="w-8" alt="Español" />
            </button>
            <button onClick={() => cambiarLenguaje("en")}>
              <img src={Ingles} className="w-8" alt="Inglés" />
            </button>
          </div>

          <button
            onClick={() => {
              const mensaje = encodeURIComponent(
                `¡Hola! necesito un abogado`
              );
              const enlace = `https://wa.me/593999737288?text=${mensaje}`;
              window.open(enlace, "_blank");
            }}
            className="flex flex-row justify-center items-center gap-4 rounded-full py-1 px-6 text-white bg-[#04222F] hover:bg-[#4B5E5E] transition delay-50 duration-50 ease-in-out"
          >
            <a>{t("NAVBARCTA")}</a>
          </button>
        </div>

        {/* Menú desplegable para dispositivos móviles */}
        <div className="tablet:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-black text-lg p-2 rounded-lg bg-transparent outline-none">
                ☰
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menú</SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div>
                  <Link to={"/"}>{t("NAVBARINICIO")}</Link>
                </div>
                <div>
                  <Link to={"/about"}>{t("NAVBARNOSOTROS")}</Link>
                </div>
                <div>
                  <Link to={"/services"}>{t("NAVBARSERVICIOS")}</Link>
                </div>
                <div>
                  <Link to={"/team"}>{t("NAVBAREQUIPO")}</Link>
                </div>
                
              </div>
              <SheetFooter>
                <div className="border-t border-black flex flex-col">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold pt-4">Francis Pavel</p>
                    </div>
                    <div className="flex justify-center items-center gap-3 pt-4">
                      <button onClick={() => cambiarLenguaje("es")}>
                        <img src={Español} className="w-8" alt="Español" />
                      </button>
                      <button onClick={() => cambiarLenguaje("en")}>
                        <img src={Ingles} className="w-8" alt="Inglés" />
                      </button>
                    </div>
                  </div>
                  
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
