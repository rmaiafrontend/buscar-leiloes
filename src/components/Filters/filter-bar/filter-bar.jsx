import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link, useParams, useNavigate } from "react-router-dom"; // Inclua useNavigate
import { Search } from "lucide-react";
import { Separator } from "../../ui/separator";
import { FiltroCidade } from "../filter-label/filtro-cidade";
import { FiltroCategoria } from "../filter-label/filtro-categoria";
import { FiltroEstado } from "../filter-label/filtro-estado";
import { FilterPopover } from "../filter-popover";

export function FilterBar() {
  const navigate = useNavigate(); // Define o navigate
  const { estado: estadoURL, cidade: cidadeURL, categoria: categoriaURL } = useParams();

  const [categoriaSelecionada, setCategoriaSelecionada] = useState(categoriaURL || "Todos");
  const [estadoSelecionado, setEstadoSelecionado] = useState(estadoURL || "Selecione um estado");
  const [cidadeSelecionada, setCidadeSelecionada] = useState(cidadeURL || "Selecione uma cidade");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setCategoriaSelecionada(categoriaURL || "Todos");
    setEstadoSelecionado(estadoURL || "Selecione um estado");
    setCidadeSelecionada(cidadeURL || "Selecione uma cidade");
  }, [estadoURL, cidadeURL, categoriaURL]);

  const handleResetFilters = () => {
    // Reseta os filtros para os valores padrão
    setCategoriaSelecionada("Todos");
    setEstadoSelecionado("Selecione um estado");
    setCidadeSelecionada("Selecione uma cidade");

    // Navega para a rota de busca com valores padrão
    navigate(`/busca`);
  };

  const handleSearch = () => {
    navigate(`/busca/${estadoSelecionado}/${cidadeSelecionada}/${categoriaSelecionada}/`);
    setOpen(false); // Fecha o modal após a navegação
  };

  return (
    <>
      {/* Modal de filtro para telas maiores*/}
      <div className="container flex items-center overflow-hidden max-sm:hidden">
        <div className="w-full max-w-[600px] h-[66px] border-2 rounded-xl shadow-md py-4 pl-4 pr-2 flex justify-between items-center gap-5 ">
          <FilterPopover label="Estado" value={estadoSelecionado}>
            <FiltroEstado setEstadoSelecionado={setEstadoSelecionado} estadoSelecionado={estadoSelecionado} />
          </FilterPopover>

          <Separator orientation="vertical" />

          <FilterPopover label="Cidade" value={cidadeSelecionada} onTriggerClick={() => {}}>
            <FiltroCidade setCidadeSelecionada={setCidadeSelecionada} estadoSelecionado={estadoSelecionado} cidadeSelecionada={cidadeSelecionada} />
          </FilterPopover>

          <Separator orientation="vertical" />

          <FilterPopover label="Categoria" value={categoriaSelecionada} onTriggerClick={() => {}}>
            <FiltroCategoria setCategoriaSelecionada={setCategoriaSelecionada} categoriaSelecionada={categoriaSelecionada} />
          </FilterPopover>

          <Link to={`/busca/${estadoSelecionado}/${cidadeSelecionada}/${categoriaSelecionada}/`} className="w-full max-w-12 bg-foreground h-12 rounded-md flex items-center justify-center">
            <Search color="white" strokeWidth={1} />
          </Link>
        </div>

        <Button variant="secondary" className="w-18 rounded-md flex items-center justify-center ml-4" onClick={handleResetFilters}>
          <span className="">Resetar Filtros</span>
        </Button>
      </div>

      {/* Modal de filtro para dipositivos móveis */}
      <div className="container sm:hidden ">
        <Dialog open={open} onOpenChange={setOpen} className="w-auto">
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full gap-2" onClick={() => setOpen(true)}>
              Pesquisa detalhada
              <Search size={16} strokeWidth={1} />
            </Button>
          </DialogTrigger>

          <DialogContent className="container w-[90%] rounded-xl gap-3">
            <DialogHeader>
              <DialogTitle className="text-left">Busca Detalhada</DialogTitle>
              <DialogDescription className="text-left">Todos os campos são opcionais.</DialogDescription>
            </DialogHeader>
            <FiltroEstado setEstadoSelecionado={setEstadoSelecionado} estadoSelecionado={estadoSelecionado} />

            <Separator orientation="vertical" />

            <FiltroCidade setCidadeSelecionada={setCidadeSelecionada} estadoSelecionado={estadoSelecionado} cidadeSelecionada={cidadeSelecionada} />

            <Separator orientation="vertical" />

            <FiltroCategoria setCategoriaSelecionada={setCategoriaSelecionada} categoriaSelecionada={categoriaSelecionada} />

            <DialogFooter className="w-full justify-center items-center">
              <Button type="submit" className="w-full" onClick={handleSearch}>
                Pesquisar
              </Button>
              <Button variant="outline" className="mt-2 w-full rounded-md flex items-center justify-center border-none shadow-transparent font-normal" onClick={handleResetFilters}>
                <span className="">Resetar Filtros</span>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
