import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InputMask from "react-input-mask";

export function FiltroValor() {
  return (
    <>
      <h4 className="mb-5 font-medium">Filtre por lance inicial</h4>
      <div className="flex items-center justify-between gap-3">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="valor">Menor que</Label>
          <InputMask mask="R$ 999.999,99" maskChar="" id="valor" placeholder="R$ 0,00" className="bg-white border border-gray-300 rounded-md p-2 w-full">
            {(inputProps) => <Input {...inputProps} type="text" />}
          </InputMask>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="valor">Maior que</Label>
          <InputMask mask="R$ 999.999,99" maskChar="" id="valor" placeholder="R$ 0,00" className="bg-white border border-gray-300 rounded-md p-2 w-full">
            {(inputProps) => <Input {...inputProps} type="text" />}
          </InputMask>
        </div>
      </div>
    </>
  );
}
