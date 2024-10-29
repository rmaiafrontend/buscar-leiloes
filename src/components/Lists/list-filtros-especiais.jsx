import { CardFiltro } from "../Cards/card-filto-especial";

export function ListFiltros() {
  return (
    <>
      <div className="p-4 my-5 w-full overflow-x-visible">
        <h4 className="font-medium text-base mb-[15px]">Sugestões de filtros</h4>
        <div className="flex gap-3 overflow-x-scroll  [&::-webkit-scrollbar]:hidden">
          <CardFiltro></CardFiltro>
          <CardFiltro></CardFiltro>
          <CardFiltro></CardFiltro>
          <CardFiltro></CardFiltro>
          <CardFiltro></CardFiltro>
        </div>
      </div>
    </>
  );
}
