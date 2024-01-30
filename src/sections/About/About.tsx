import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section
      id="about"
      className="py-[2rem] px-[1rem] tablet:px-[2rem] laptop:px-[2rem] desktop:px-[2rem] bg-white flex justify-center"
    >
      <div
        ref={ref}
        className="w-[1400px] w-max-[1400px] flex flex-col justify-center items-center gap-16"
      >
        <div>
          <p className="font-bold text-4xl">{t("ABOUTPAGETITULO")}</p>
        </div>
        <div
          className={`flex flex-col tablet:flex-row justify-center ${
            inView ? "animate-fade-right animate-once animate-delay-600" : ""
          } items-start gap-6`}
        >
          <div
            className={`w-[100%] ${
              inView ? "animate-fade-right animate-once animate-delay-100" : ""
            } tablet:w-[400px] h-[300px] tablet:h-[450px] bg-[url('/src/assets/About/FrancisImage.png')] bg-cover bg-top rounded-xl`}
          ></div>
          <div className="w-[100%] tablet:w-[40%] flex flex-col justify-center items-center tablet:justify-start tablet:items-start gap-5">
            <div className="border border-[#04222F] rounded-xl">
              <p className="text-[#04222F] py-1 px-4">
                {t("ABOUTPAGETOPTITULO")}
              </p>
            </div>
            <div
              className={
                inView
                  ? "animate-fade-right animate-once animate-delay-100"
                  : ""
              }
            >
              <p className="text-[#04222F] text-2xl text-center tablet:text-start flex gap-1">
                {t("ABOUTPAGETITULOMAIN1")}{" "}
                <span className="font-bold">{t("ABOUTPAGETITULOMAIN2")}</span>?
              </p>
            </div>
            <div
              className={`flex flex-col gap-3 ${
                inView
                  ? "animate-fade-right animate-once animate-delay-100"
                  : ""
              } `}
            >
              <p className="text-start">{t("ABOUTPAGEDESC1")}</p>
              <p className="text-start">{t("ABOUTPAGEDESC2")}</p>
            </div>
            <div className="flex justify-start ">
              <Link to={"/"}>
                <button
                  className={`text-white ${
                    inView
                      ? "animate-fade-right animate-once animate-delay-100"
                      : ""
                  } font-bold rounded-xl py-2 px-6 bg-[#04222F] hover:bg-[#4B5E5E] transition delay-50 duration-50 ease-in-out`}
                >
                  {t("ABOUTPAGECTA")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
