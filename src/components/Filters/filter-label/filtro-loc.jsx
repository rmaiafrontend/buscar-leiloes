import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Lista de estados e cidades
const estados = {
  SP: ["São Paulo", "Campinas", "Santos"],
  RJ: ["Rio de Janeiro", "Niterói", "Petrópolis"],
  MG: ["Belo Horizonte", "Uberlândia", "Ouro Preto"],
  // Adicione os outros estados e cidades aqui
};

export function FiltroLoc() {
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");

  const handleEstadoChange = (value) => {
    setEstadoSelecionado(value);
    setCidadeSelecionada(""); // Resetar cidade ao trocar de estado
  };

  const handleCidadeChange = (value) => {
    setCidadeSelecionada(value);
  };

  return (
    <>
      <h4 className="mb-5 font-medium">Filtre por localização</h4>
      <div className="flex justify-between items-center">
        <div className="">
          {/* <h4 className="font-medium">Estado</h4> */}
          <Select onValueChange={handleEstadoChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione um estado" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(estados).map((estado) => (
                <SelectItem key={estado} value={estado}>
                  {estado}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="ml-8">
          {/* <h4 className="font-medium text-[12px]">Cidade</h4> */}
          <Select onValueChange={handleCidadeChange} disabled={!estadoSelecionado}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione uma cidade" />
            </SelectTrigger>
            <SelectContent>
              {estadoSelecionado &&
                estados[estadoSelecionado].map((cidade) => (
                  <SelectItem key={cidade} value={cidade}>
                    {cidade}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}
