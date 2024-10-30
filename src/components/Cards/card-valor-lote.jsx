import { Separator } from "../ui/separator";
import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import CountdownTimer from "./countdowns";
import { formatarParaReal } from "@/util/util";
import { ajustarParaFusoBrasilia } from "@/util/util";

export function ValorLote({ lote }) {
  const resultado = ajustarParaFusoBrasilia(lote.closingDate);
  return (
    <>
      <div className="w-full max-w-[495px] rounded shadow-lg p-6 border max-lg:max-w-full max-lg:mt-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-[16px]">Lance Inicial</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <ArrowDown size={14} color="#00FFC2" />
              <span className="font-medium text-[#00FFC2]">48%</span>
            </div>

            <p className="font-semibold text-primary text-[30px] max-lg:text-[20px]">{formatarParaReal(lote.startBuilding)}</p>
          </div>
        </div>
        <Separator className="my-5"></Separator>

        <div className="flex items-center justify-between">
          <p className="font-semibold text-[16px]">Data de encerramento</p>
          <p className="font-medium text-primary text-[18px] max-lg:text-[16px]">
            {resultado.data} <span className="text-black max-lg:text-[12px]">às</span> {resultado.hora}
          </p>
        </div>

        <Button className="w-full h-12 text-[16px] my-6">IR PARA O LEILÃO</Button>
        <CountdownTimer targetDate={lote.closingDate} />
      </div>
    </>
  );
}
