import { useTranslation } from "react-i18next";

import { useInView } from "react-intersection-observer";

export default function CTA() {
  const { t } = useTranslation();

  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section
      id="services"
      className="py-[4rem] px-[1rem] tablet:px-[2rem] laptop:px-[2rem] desktop:px-[2rem] bg-[#373636] flex justify-center"
    >
      <div
        ref={ref}
        className="w-[1400px] w-max-[1400px] flex flex-col justify-center items-center gap-10 "
      >
        <div
          className={`flex flex-col justify-center items-center gap-5 ${
            inView
              ? "animate-fade-right animate-once animate-delay-[700ms]"
              : ""
          }`}
        >
          <div>
            <p className="text-white text-4xl text-center font-bold">
              {t("CTATITULO")}
            </p>
          </div>

          <div>
            <button
              onClick={() => {
                const mensaje = encodeURIComponent(
                  `¡Hola! necesito un abogado
                          `
                );
                const enlace = `https://wa.me/593999737288?text=${mensaje}`;
                window.open(enlace, "_blank");
              }}
              className="bg-white text-[#373636] text-xl hover:bg-[#373636] transition delay-50 duration-50 ease-in-out rounded-lg py-2 px-5 font-bold"
            >
              <a>{t("CTABOTON")}</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
