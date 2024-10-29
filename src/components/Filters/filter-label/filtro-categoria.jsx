import { useState } from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function FiltroCategoria({ setCategoriaSelecionada, categoriaSelecionada }) {
  return (
    <>
      <h4 className="mb-5 font-medium max-sm:mb-0">Filtre por categoria</h4>
      <ToggleGroup
        className=""
        type="single"
        defaultValue={categoriaSelecionada}
        onValueChange={(value) => {
          if (value) setCategoriaSelecionada(value);
        }}
      >
        <ToggleGroupItem value="Todos">Todos</ToggleGroupItem>
        <ToggleGroupItem value="Casa">Casa</ToggleGroupItem>
        <ToggleGroupItem value="Apartamento">Apartamento</ToggleGroupItem>
        <ToggleGroupItem value="Comercial">Comercial</ToggleGroupItem>
      </ToggleGroup>
    </>
  );
}
