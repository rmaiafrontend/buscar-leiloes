import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FiltroEstado } from "../filter-label/filtro-estado";
import { FiltroCidade } from "../filter-label/filtro-cidade";
import { FiltroCategoria } from "../filter-label/filtro-categoria";

const FilterColumn = ({ label, value, setValue, valueEstado }) => {
  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <div className="flex flex-col justify-start text-left w-full">
          <p className="font-medium text-[14px] text-left">{label}</p>
          <span className="text-[14px]">{value}</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="mt-5 ml-5 w-auto h-auto">
        <FiltroEstado setEstadoSelecionado={setValue} />
        <FiltroCategoria onCategoriaChange={setValue} />
        <FiltroCidade setCidadeSelecionada={setValue} estadoSelecionado={valueEstado} />
      </PopoverContent>
    </Popover>
  );
};

export default FilterColumn;
