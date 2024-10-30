import { CardFiltro } from "../Cards/card-filto-especial";

export function ListFiltros() {
  return (
    <>
      <div className=" my-5 w-full">
        <h4 className="px-4 font-medium text-base mb-[15px]">Sugestões de filtros</h4>
        <div className=" px-4 flex gap-3 overflow-x-scroll  [&::-webkit-scrollbar]:hidden">
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
