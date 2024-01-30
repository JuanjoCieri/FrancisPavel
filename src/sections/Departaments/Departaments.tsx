import { AdaptibilidadIcon, EnfasisIcon, EnfoqueIcon } from "@/utils/Icons";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type Card = {
  title: string;
  desc: string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  icon: any;
};

export default function Departaments() {
  const { t } = useTranslation();

  const [ref, inView] = useInView({ triggerOnce: true });

  function Card({ title, desc, icon }: Card) {
    return (
      <div className="flex flex-col gap-2 w-[100%] tablet:w-[450px] justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="">
            <div
              className={`w-16 h-16 rounded-full ${
                inView ? "animate-rotate-y animate-once animate-delay-[1000ms]" : ""
              } bg-[#04222F] flex justify-center items-center`}
            >
              {icon}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="">
              <p className="text-xl font-bold text-center text-[#04222F]">
                {title}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[70%]">
          <p className="text-[#04222F] text-center text-sm">{desc}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section
        id="cases"
        className="py-[2rem] px-[1rem] tablet:px-[2rem] laptop:px-[2rem] desktop:px-[2rem] bg-[url('/src/assets/Home/bgg.jpg')] bg-cover bg-center flex justify-center"
      >
        <div
          ref={ref}
          className="justify-items-center tablet:px-0 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-3 gap-10"
        >
          <Card
            title={t("DEPA1TITULO")}
            desc={t("DEPA1DESC")}
            icon={<EnfoqueIcon />}
          />
          <Card
            title={t("DEPA2TITULO")}
            desc={t("DEPA2DESC")}
            icon={<AdaptibilidadIcon />}
          />
          <Card
            title={t("DEPA3TITULO")}
            desc={t("DEPA3DESC")}
            icon={<EnfasisIcon />}
          />
        </div>
      </section>
    </>
  );
}
