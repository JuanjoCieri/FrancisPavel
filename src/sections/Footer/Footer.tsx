import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/utils/Icons";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <div
        id="footer"
        className="pt-24 pb-20 px-10 tablet:pt-24 laptop:pt-10 desktop:pt-10 bg-[#373636]"
      >
        <div className="flex flex-col tablet:flex-col laptop:flex-row desktop:flex-row gap-10 tablet:gap-5 laptop:gap-0 desktop:gap-0">
          <div className="w-full tablet:w-full laptop:w-1/2 desktop:w-1/2 flex flex-col justify-center items-start gap-5">
            <div className="flex justify-center items-center gap-1">
              <p className="text-3xl text-white font-bold">Francis Pavel</p>
            </div>
            <div>
              <p className="text-start text-white w-[70%]">{t("FOOTERTITULO")}</p>
            </div>
            <div>
              <button onClick={() => {
              const mensaje = encodeURIComponent(
                `¡Hola! necesito un abogado
                          `
              );
              const enlace = `https://wa.me/593999737288?text=${mensaje}`;
              window.open(enlace, "_blank");
            }} className="flex flex-row justify-center border border-white items-center gap-4 rounded-full py-1 px-6 bg-[#373636] hover:bg-[#4B5E5E] transition delay-50 duration-50 ease-in-out">
                <a
                  className="text-white"
                >
                  {t("FOOTERCTA")}
                </a>
              </button>
            </div>
          </div>
          <div className="w-full tablet:w-full laptop:w-1/2 desktop:w-1/2 flex flex-col tablet:flex-col laptop:flex-row desktop:flex-row justify-start items-start gap-16">
            <div className="flex justify-start items-start flex-col gap-5">
              <div>
                <p className="text-white text-lg font-semibold">
                  {t("FOOTERITEM1TITULO")}
                </p>
              </div>
              <div>
                <p className="text-white text-start text-xs">
                  Email: <br />
                  fparaujoja@outlook.com
                </p>
              </div>
              <div>
                <p className="text-white text-start text-xs">
                  Número: <br />
                  +593999737288
                </p>
              </div>
              <div>
                <p className="text-white text-start text-xs">
                Quito, Pichincha, Ecuador
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start flex-col gap-5">
              <div>
                <Link to={"/about"}>
                  <p className="text-white text-lg font-semibold">
                    <a href="#about">{t("FOOTERITEM2TITULO")}</a>
                  </p>
                </Link>
              </div>
              <div>
                <Link to={"/about"}>
                  <p className="text-white text-start text-xs">
                    <a href="#about">{t("FOOTERITEM2NOSOTROS")}</a>
                  </p>
                </Link>
              </div>
              <div>
                <Link to={"/services"}>
                  <p className="text-white text-start text-xs">
                    <a href="#services">{t("FOOTERITEM2SERVICIOS")}</a>
                  </p>
                </Link>
              </div>
              <div>
                <Link to={"/team"}>
                  <p className="text-white text-start text-xs">
                    <a href="#about">{t("FOOTERITEM2EQUIPO")}</a>
                  </p>
                </Link>
              </div>
              <div>
                <Link to={"/clients"}>
                  <p className="text-white text-start text-xs">
                    <a href="#about">{t("FOOTERITEM2CLIENTES")}</a>
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex justify-start items-start flex-col gap-5"></div>
          </div>
        </div>
      </div>
      <div className="bg-[#373636]">
        <div className="flex justify-center items-center bg-[#373636] py-3">
          <p className="opacity-70 text-white text-center">
            {/* {t("FOOTERFOOTER")} */}
            ©FrancisPavel  .  Todos los derechos reservados
          </p>
        </div>
        <div className="py-9 flex justify-center items-center gap-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/osap-abogados-litigantes/"
          >
            <LinkedinIcon />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/osapabogadoslitigantes/"
          >
            <InstagramIcon /> 
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/osapabogadoslitigantes"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>
    </>
  );
}
