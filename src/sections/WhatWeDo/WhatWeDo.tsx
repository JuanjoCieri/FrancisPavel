import { useTranslation } from "react-i18next";

import { useInView } from "react-intersection-observer";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function WhatWeDo() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section
      id="services"
      className="py-[2rem] px-[1rem] tablet:px-[2rem] laptop:px-[2rem] desktop:px-[2rem] flex justify-center bg-white"
    >
      <div
        ref={ref}
        className="w-[1400px] w-max-[1400px] flex flex-col justify-center items-center gap-10 "
      >
        <div>
          <p className="text-black font-semibold text-3xl">
            {t("WHATWEDOTITULO")}
          </p>
        </div>
        <div className="w-full flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl w-[80%] font-semibold">
                {t("WHATWEDODESC")}
              </p>
            </div>

            <Drawer>
              <DrawerTrigger>
                {t("WHATWEDOCTA")} {">"}
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>{t("WHATWETITULO")}</DrawerTitle>
                  <DrawerDescription>
                    <div className="mt-10">
                      <ul className="flex flex-col gap-3">
                        <li>- {t("WHATWEDESC1")}</li>
                        <li>- {t("WHATWEDESC2")}</li>
                        <li>- {t("WHATWEDESC3")}</li>
                        <li>- {t("WHATWEDESC4")}</li>
                        <li>- {t("WHATWEDESC5")}</li>
                        <li>- {t("WHATWEDESC6")}</li>
                        <li>- {t("WHATWEDESC7")}</li>
                        <li>- {t("WHATWEDESC8")}</li>
                        <li>- {t("WHATWEDESC9")}</li>
                        <li>- {t("WHATWEDESC10")}</li>
                        <li>- {t("WHATWEDESC11")}</li>
                        <li>- {t("WHATWEDESC12")}</li>
                        <li>- {t("WHATWEDESC13")}</li>
                      </ul>
                    </div>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose></DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          <div className="grid justify-items-center grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-16 tablet:gap-0">
            <div
              className={`w-[300px] tablet:w-[200px] flex flex-col gap-2 ${
                inView
                  ? "animate-fade-right animate-once animate-delay-[700ms]"
                  : ""
              }`}
            >
              <div className="rounded-lg w-[300px] tablet:w-[200px] h-[300px] tablet:h-[200px] bg-[url('/src/assets/Services/penal.png')] bg-cover bg-center"></div>
              <div>
                <p className="text-center tablet:text-start text-xl font-semibold">
                  {t("WHATWEDOSER1")}
                </p>
              </div>
            </div>
            <div
              className={`w-[300px] tablet:w-[200px] flex flex-col gap-2 ${
                inView
                  ? "animate-fade-right animate-once animate-delay-[800ms]"
                  : ""
              }`}
            >
              <div className="rounded-lg w-[300px] tablet:w-[200px] h-[300px] tablet:h-[200px] bg-[url('/src/assets/Services/competencia.png')] bg-cover bg-center"></div>
              <div>
                <p className="text-center tablet:text-start text-xl font-semibold">
                  {t("WHATWEDOSER2")}
                </p>
              </div>
            </div>
            <div
              className={`w-[300px] tablet:w-[200px] flex flex-col gap-2 ${
                inView
                  ? "animate-fade-right animate-once animate-delay-[900ms]"
                  : ""
              }`}
            >
              <div className="rounded-lg w-[300px] tablet:w-[200px] h-[300px] tablet:h-[200px] bg-[url('/src/assets/Services/laboral.png')] bg-cover bg-center"></div>
              <div>
                <p className="text-center tablet:text-start text-xl font-semibold">
                  {t("WHATWEDOSER3")}
                </p>
              </div>
            </div>
            <div
              className={`w-[300px] tablet:w-[200px] flex flex-col gap-2 ${
                inView
                  ? "animate-fade-right animate-once animate-delay-[1000ms]"
                  : ""
              }`}
            >
              <div className="rounded-lg w-[300px] tablet:w-[200px] h-[300px] tablet:h-[200px] bg-[url('/src/assets/Services/contratos.png')] bg-cover bg-center"></div>
              <div>
                <p className="text-center tablet:text-start text-xl font-semibold">
                  {t("WHATWEDOSER4")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
