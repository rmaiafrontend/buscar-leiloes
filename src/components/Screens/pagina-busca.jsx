import { FilterBar } from "../Filters/filter-bar/filter-bar";
import { Header } from "../Layout/header";
import { ListFiltros } from "../Lists/list-filtros-especiais";
import { ListLotes } from "../Lists/list-lotes";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function PaginaBusca() {
  return (
    <>
      <Header></Header>
      <ListFiltros></ListFiltros>
      <div className="container">
        <h1 className="text-[20px] font-medium my-6">Personalize sua busca</h1>
      </div>

      <FilterBar></FilterBar>
      <div className="container">
        <Separator className="my-8"></Separator>
      </div>

      <ListLotes></ListLotes>
      <div className="container flex items-center justify-center my-10">
        <Button variant="outline" className="py-8 px-24 text-[18px] ">
          Carregar mais lotes
        </Button>
      </div>
    </>
  );
}
