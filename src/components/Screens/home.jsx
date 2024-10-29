import { Header } from "../Layout/header";
import { ListNews } from "../Lists/ListNews";
import { ListLotes } from "../Lists/list-lotes";
import { ListFiltros } from "../Lists/list-filtros-especiais";
import { FilterBar } from "../Filters/filter-bar/filter-bar";

export function Home() {
  return (
    <>
      <Header />
      <ListNews />
      <FilterBar></FilterBar>

      <ListLotes></ListLotes>
      <ListFiltros></ListFiltros>
    </>
  );
}
