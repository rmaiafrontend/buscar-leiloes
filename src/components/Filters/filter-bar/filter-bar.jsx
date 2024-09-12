import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { Separator } from "../../ui/separator";
import { FiltroLoc } from "../filter-label/filtro-loc";
import { FiltroData } from "../filter-label/filtro-data";
import { FiltroValor } from "../filter-label/filtro-valor";
import { FiltroCategoria } from "../filter-label/filtro-categoria";

export function FilterBar() {
  return (
    <>
      <div className="container ">
        <div className="w-full max-w-[850px] h-[66px] border-2 rounded-xl shadow-md py-4 pl-4 pr-2 flex justify-between items-center">
          <Popover>
            <PopoverTrigger>
              <div className="flex flex-col justify-start">
                <p className="font-medium text-[14px] text-left">Onde</p>
                <span className="text-[12px]">Local do imóvel</span>
              </div>
            </PopoverTrigger>
            <PopoverContent className="mt-5 ml-5 w-auto h-auto">
              <FiltroLoc />
            </PopoverContent>
          </Popover>

          <Separator orientation="vertical" />

          <Popover>
            <PopoverTrigger>
              <div className="flex flex-col ">
                <p className="font-medium text-[14px] text-left">Data do leilão</p>
                <span className="text-[12px]">Insira a data limite</span>
              </div>
            </PopoverTrigger>
            <PopoverContent className="mt-5  w-auto h-auto">
              <FiltroData></FiltroData>
            </PopoverContent>
          </Popover>

          <Separator orientation="vertical" />

          <Popover>
            <PopoverTrigger>
              <div className="flex flex-col ">
                <p className="font-medium text-[14px] text-left">Lance Inicial</p>
                <span className="text-[12px] text-left">Acima de</span>
              </div>
            </PopoverTrigger>
            <PopoverContent className="mt-5  w-auto h-auto ">
              <FiltroValor />
            </PopoverContent>
          </Popover>

          <Separator orientation="vertical" />

          <Popover>
            <PopoverTrigger>
              <div className="flex flex-col ">
                <p className="font-medium text-[14px] text-left">Categoria</p>
                <span className="text-[12px]">Apartamento, Casa, Comercial...</span>
              </div>
            </PopoverTrigger>
            <PopoverContent className="mt-5 w-auto h-auto">
              <FiltroCategoria />
            </PopoverContent>
          </Popover>

          <button className="bg-foreground w-12 h-12 rounded-md flex items-center justify-center">
            <svg height="21" viewBox="0 0 21 21" width="25" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd" stroke="white" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="8.5" cy="8.5" r="5" />
                <path d="m17.571 17.5-5.571-5.5" />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
