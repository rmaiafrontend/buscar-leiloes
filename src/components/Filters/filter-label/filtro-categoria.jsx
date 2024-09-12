import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function FiltroCategoria() {
  return (
    <>
      <h4 className="mb-5 font-medium">Filtre por categoria</h4>
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">Todos</ToggleGroupItem>
        <ToggleGroupItem value="b">Casa</ToggleGroupItem>
        <ToggleGroupItem value="c">Apartamento</ToggleGroupItem>
        <ToggleGroupItem value="d">Comercial</ToggleGroupItem>
      </ToggleGroup>
    </>
  );
}
