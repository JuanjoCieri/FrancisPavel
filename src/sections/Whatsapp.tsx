import whatsapp from "../assets/whatsapp.png";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Whatsapp() {
  return (
    <>
      <TooltipProvider delayDuration={100} skipDelayDuration={20}>
        <Tooltip defaultOpen={true} >
          <TooltipTrigger className="fixed bottom-0 right-0 m-6">
            <button
              onClick={() => {
                const mensaje = encodeURIComponent(
                  `¡Hola! Necesito un abogado
                          `
                );
                const enlace = `https://wa.me/593999737288?text=${mensaje}`;
                window.open(enlace, "_blank");
              }}
            >
              <img src={whatsapp} alt="Logotipo de whatsapp" className="w-14" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-green-400 w-72 tablet:w-auto">
            <p>¡Hola! Contactame por WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* <a
        className="fixed bottom-0 right-0 m-6"
        target="_blank"
        rel="noopener noreferrer"
        href="https://web.whatsapp.com/send?phone=593987170774&text=Hola%2C%20necesito%20un%20abogado"
      >
        <img src={whatsapp} alt="Logotipo de whatsapp" className="w-14" />
      </a> */}
    </>
  );
}
