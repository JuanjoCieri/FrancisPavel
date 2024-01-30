import { useTranslation } from "react-i18next";

export default function WhyUs() {
  const { t } = useTranslation();



  return (
    <section
      id="services"
      className="py-[2rem] px-[1rem] tablet:px-[2rem] laptop:px-[2rem] desktop:px-[2rem] bg-white flex justify-center"
    >
      <div className="w-[1400px] w-max-[1400px] flex flex-col justify-center items-center gap-16">
        <div>
          <p className="font-bold text-4xl">{t("WHYUSTITULO")}</p>
        </div>
        <div className="flex flex-col tablet:flex-row justify-center items-start gap-6">
          <div className="bg-[url('/src/assets/WhyUs/WhyUs.jpeg')] bg-cover bg-center w-[100%] tablet:w-[400px] h-[400px]"></div>
          <div className="w-[100%] tablet:w-[40%] flex flex-col justify-center items-center tablet:justify-start tablet:items-start gap-5">
            <div>
              <p className="text-black text-2xl text-center tablet:text-start font-semibold">
                {t("WHYUSTITULO2")}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-start">{t("WHYUSDESC2")}</p>
              <p className="text-start">{t("WHYUSDESC3")}</p>
              <p className="text-start">{t("WHYUSDESC4")}</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
