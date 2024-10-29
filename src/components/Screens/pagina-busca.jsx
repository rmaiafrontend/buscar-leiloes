import { useParams, useNavigate } from "react-router-dom";
import { FilterBar } from "../Filters/filter-bar/filter-bar";
import { Header } from "../Layout/header";
import { ListFiltros } from "../Lists/list-filtros-especiais";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ListLotesBusca } from "../Lists/list-lotes-busca";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";

export function PaginaBusca() {
  const { estado, cidade, categoria } = useParams();
  const navigate = useNavigate(); // Define navigate

  return (
    <>
      <Header />
      <div className="container mt-10">
        <Button variant="outline" className="" onClick={() => navigate(-1)}>
          <ChevronLeft strokeWidth={1} size={17} />
          <span className="ml-2">Voltar</span>
        </Button>
      </div>

      <ListFiltros />

      <div className="container">
        <h1 className="text-[20px] font-medium my-6">Personalize sua busca</h1>
      </div>

      {/* Barra de Filtros passando os valores da URL */}
      <FilterBar />

      <div className="container">
        <Separator className="my-8" />
      </div>

      {/* ListLotes recebe os filtros da URL */}
      <ListLotesBusca estado={estado} cidade={cidade} categoria={categoria} />

      <div className="container flex items-center justify-center my-10">
        <Button variant="outline" className="py-8 px-24 text-[18px]">
          Carregar mais lotes
        </Button>
      </div>
    </>
  );
}
