import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";


export default function ServicesCTA() {
  const { t } = useTranslation();

  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section
      id="services"
      className="py-[4rem] px-[1rem] tablet:px-[2rem] laptop:px-[2rem] desktop:px-[2rem] bg-[url('/src/assets/ServicesCTA/ServicesCTA.png')] bg-cover bg-center flex justify-center"
    >
      <div ref={ref} className="w-[1400px] w-max-[1400px] flex flex-col justify-center items-center gap-10 ">
        <div className={`flex flex-col justify-center items-center gap-5 ${
                inView ? "animate-fade-right animate-once animate-delay-[700ms]" : ""}`}>
          <div>
            <p className="text-white text-5xl font-bold text-center">
             {t("SERVICESCTATITULO")}
            </p>
          </div>
          <div>
            <p className="text-white text-2xl text-center">
            {t("SERVICESCTADESC")}
            </p>
          </div>
          <div>
          <Link to={"/services"}>

            <button className="bg-[#AFD9D9] hover:bg-[#4B5E5E] hover:text-white transition delay-50 duration-50 ease-in-out text-[#3C3C3C] rounded-full py-3 px-8">
            {t("SERVICESCTACTA")}
            </button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
