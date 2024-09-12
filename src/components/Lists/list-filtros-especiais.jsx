import { CardFiltro } from "../Cards/card-filto-especial";

export function ListFiltros() {
  return (
    <>
      <div className="container my-5">
        <h4 className="font-medium text-base mb-[15px]">Sugestões de filtros</h4>
        <div className=" flex justify-between items-center gap-3">
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
