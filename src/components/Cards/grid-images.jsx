import { Button } from "../ui/button";
import { LayoutGrid } from "lucide-react";

export function GridImage() {
  return (
    <>
      <div className=" mt-6">
        <div className="w-full h-[488px]  flex justify-between items-center gap-2">
          <div className=" w-[60%] h-full  bg-[url('./img-lote.png')] bg-no-repeat bg-center bg-cover rounded-l-xl relative">
            <Button className="absolute bottom-3 right-3 bg-foreground text-[10px]">
              {" "}
              <LayoutGrid size={16} strokeWidth={2} className="mr-2" />
              MOSTRAR TODAS AS FOTOS
            </Button>
          </div>
          <div className="w-[40%] h-full grid grid-cols-2 gap-2">
            <div className=" w-full h-full  bg-[url('./img-lote.png')] "></div>
            <div className=" w-full h-full  bg-[url('./img-lote.png')] rounded-tr-xl"></div>
            <div className=" w-full h-full  bg-[url('./img-lote.png')]"></div>
            <div className=" w-full h-full  bg-[url('./img-lote.png')] rounded-br-xl"></div>
          </div>
        </div>
      </div>
    </>
  );
}
