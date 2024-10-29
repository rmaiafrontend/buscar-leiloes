import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function FiltroCidade({ setCidadeSelecionada, estadoSelecionado }) {
  const [cidades, setCidades] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (estadoSelecionado != "Selecione um estado") {
      fetchCidades();
    }
  }, [estadoSelecionado]);

  async function fetchCidades() {
    await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios?orderBy=nome`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCidades(data); // Armazena os dados no estado
        console.log(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <h4 className="mb-5 font-medium max-sm:mb-0">Filtre por cidade</h4>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {value ? cidades.find((cidade) => cidade.value === value)?.label : "Escolha uma cidade"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Pesquise a cidade..." />
          <CommandList>
            <CommandEmpty>Selecione um estado.</CommandEmpty>
            <CommandGroup>
              {cidades && cidades.length > 0
                ? cidades.map((cidade) => (
                    <CommandItem
                      key={cidade.nome}
                      value={cidade.id}
                      onSelect={(currentValue) => {
                        setCidadeSelecionada(currentValue === value ? "" : currentValue);
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
  );
}
