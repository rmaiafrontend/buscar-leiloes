import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

import { formatarParaReal, ajustarParaFusoBrasilia, formatString } from "@/util/util";

export function CardLote({ ...lote }) {
  const resultado = ajustarParaFusoBrasilia(lote.closingDate);

  return (
    <>
      <Link to={`/lote/${lote.id}`} className="w-full h-full" href="">
        <div className="w-full h-full rounded-xl shadow-lg flex flex-col justify-between min-h-[400px]  max-h-[450px]">
          <div className="bg-slate-100 w-full h-[257px] p-3 rounded-xl flex flex-col justify-between bg-cover bg-center" style={{ backgroundImage: `url(${lote.auctionImages[0].link})` }}>
            <div className="flex justify-between items-center">
              <div className="py-1 px-4 bg-foreground w-fit rounded-full flex justify-center items-center">
                <span className="text-background font-medium text-[10px]">
                  {lote.city} - {lote.state}
                </span>
              </div>
              <div className="h-[32px] w-[32px]">
                <img src="/icon-archive.png" alt="" className="" />
              </div>
            </div>

            <div className="flex justify-left items-center direction">
              <div className="py-1 px-4 bg-foreground w-fit rounded-full flex justify-center items-center mr-2">
                <span className="text-background font-light text-[10px]">Financiamento</span>
              </div>
              <div className="py-1 px-4 bg-foreground w-fit rounded-full flex justify-center items-center">
                <span className="text-background font-light text-[10px]">Venda Caixa</span>
              </div>
            </div>
          </div>

          <div className="p-3 flex flex-col justify-between flex-grow">
            <div>
              <p className="font-bold text-[16px] whitespace-nowrap overflow-hidden text-ellipsis">{lote.title}</p>
              <Separator className="bg-slate-300 my-2"></Separator>
              <div className="flex justify-start items-center">
                <p className="font-bold text-primary text-[19px]">{formatarParaReal(lote.startBuilding)}</p>
                <div className="flex ml-3 items-center justify-center">
                  <ArrowDown color="#00FFC2" size={14} />
                  <span className="font-medium text-[#00FFC2]">48%</span>
                </div>
              </div>
              <p className="text-[14px] line-clamp-3">{lote.description}</p>
            </div>
            <div className="w-full h-[35px] bg-foreground rounded-md flex justify-between items-center mt-3">
              <p className="text-secondary p-3 text-[14px]">Encerramento</p>
              <div className="flex justify-between items-center">
                <p className="text-secondary p-3 text-[12px]">{resultado.data}</p>
                <span className="text-secondary p-3 text-[12px]">{resultado.hora}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
