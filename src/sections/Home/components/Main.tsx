import { useTranslation } from "react-i18next";
import { RightArrow } from "@/utils/Icons";

export default function Main() {
  const { t } = useTranslation();

  return (
    <div className="pt-10 tablet:pb-8 laptop:pb-8 desktop:pb-8 tablet:pt-24 laptop:pt-20 desktop:pt-20">
      <div className="flex flex-col justify-start tablet:justify-center laptop:justify-center desktop:justify-center items-start tablet:items-center laptop:items-center desktop:items-center gap-6">
        <div className="flex justify-start tablet:justify-center items-center">
          <h1 className="text-white animate-fade-up hidden tablet:flex w-[60%] text-center tablet:text-center laptop:text-center desktop:text-center font-bold text-6xl">
            {t("HOMETITULO")}
          </h1>
          <h1 className="text-white animate-fade-up flex tablet:hidden w-[100%] text-start tablet:text-center laptop:text-center desktop:text-center font-semibold text-6xl">
            {t("HOMETITULO")}
          </h1>
        </div>
        <div className="tablet:w-[70%] laptop:w-[60%] desktop:w-[50%]">
          <p className="text-white animate-fade-up  animate-delay-200 text-start tablet:text-center laptop:text-center desktop:text-center text-xl">
            {t("HOMESUBTITULO")}
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              const mensaje = encodeURIComponent(
                `¡Hola! necesito un abogado`
              );
              const enlace = `https://wa.me/593999737288?text=${mensaje}`;
              window.open(enlace, "_blank");
            }}
            className="flex flex-row animate-fade-up animate-delay-300 justify-center items-center gap-4 rounded-full py-4 px-10 bg-white hover:bg-[#373636] transition delay-50 duration-50 ease-in-out	 mb-10"
          >
            <a
              href="https://wa.me/593999737288?text=%C2%A1Hola!%20necesito%20un%20abogado"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#373636] text-xl font-bold"
            >
              {t("HOMECTA")}
            </a>
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  );
}
