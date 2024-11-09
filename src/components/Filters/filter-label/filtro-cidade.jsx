import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function FiltroCidade({ setCidadeSelecionada, estadoSelecionado }) {
  const [cidades, setCidades] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (estadoSelecionado !== "Selecione um estado") {
      setValue("");
      fetchCidades();
    }
  }, [estadoSelecionado]);

  useEffect(() => {
    // Verifica o tamanho da tela para ajustar a visibilidade do select
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tamanho de tela para considerar como "móvel"
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Executa ao carregar para pegar a largura inicial

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  async function fetchCidades() {
    try {
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios?orderBy=nome`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCidades(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  return (
    <div className="flex flex-col">
      <h4 className="mb-5 font-medium max-sm:mb-0">Filtre por cidade</h4>

      {/* Select para dispositivos móveis */}
      {isMobile ? (
        <select
          value={value}
          onChange={(e) => {
            const selectedCity = e.target.value;
            setValue(selectedCity);
            setCidadeSelecionada(selectedCity);
          }}
          className="mt-3 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white shadow-sm"
        >
          <option value="" disabled>
            Selecione uma cidade
          </option>
          {cidades.map((cidade) => (
            <option key={cidade.id} value={cidade.nome}>
              {cidade.nome}
            </option>
          ))}
        </select>
      ) : (
        // Mantém o Popover e Command para telas maiores
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
              {value ? cidades.find((cidade) => cidade.nome === value)?.nome : "Selecione uma cidade"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Pesquise a cidade..." />
              <CommandList style={{ pointerEvents: "all" }} className="overflow-auto">
                <CommandEmpty>Selecione um estado.</CommandEmpty>
                <CommandGroup>
                  {cidades.length > 0
                    ? cidades.map((cidade) => (
                        <CommandItem
                          key={cidade.id}
                          value={cidade.nome}
                          onSelect={(currentValue) => {
                            setCidadeSelecionada(currentValue);
                            setValue(currentValue);
                            setOpen(false);
                          }}
                        >
                          <Check className={cn("mr-2 h-4 w-4", value === cidade.nome ? "opacity-100" : "opacity-0")} />
                          {cidade.nome}
                        </CommandItem>
                      ))
                    : ""}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}
