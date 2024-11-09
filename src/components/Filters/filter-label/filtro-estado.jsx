import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const estados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

export function FiltroEstado({ setEstadoSelecionado, estadoSelecionado }) {
  return (
    <>
      <h4 className="mb-5 font-medium max-sm:mb-0">Filtre por estado</h4>
      <ToggleGroup
        className="grid gap-2 grid-cols-5 grid-rows-3"
        type="single"
        value={estadoSelecionado}
        onValueChange={(value) => {
          if (value) setEstadoSelecionado(value);
        }}
      >
        {estados.map((estado) => (
          <ToggleGroupItem value={estado} key={estado}>
            {estado}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </>
  );
}
