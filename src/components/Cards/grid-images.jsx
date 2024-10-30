import { useState } from "react";
import { Button } from "../ui/button";
import { LayoutGrid } from "lucide-react";
import image from "../.././../public/image-alternative.png";

export function GridImage({ images }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Funções para navegação nas imagens
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <div className="mt-6">
        <div className="w-full h-[488px] flex justify-between items-center gap-2 max-xl:flex-col">
          <div
            className="w-[60%] h-full bg-no-repeat bg-center bg-cover rounded-l-xl relative max-xl:w-full max-xl:rounded-md"
            style={{
              backgroundImage: `url(${images[0]?.link || image})`,
            }}
          >
            <Button
              className="absolute bottom-3 right-3 bg-foreground text-[10px]"
              onClick={openModal} // Abre o modal ao clicar
            >
              <LayoutGrid size={16} strokeWidth={2} className="mr-2" />
              MOSTRAR TODAS AS FOTOS
            </Button>
          </div>
          <div className="w-[40%] h-full grid grid-cols-2 gap-2 max-xl:w-full max-xl:rounded-md">
            <div
              className="w-full h-full bg-cover bg-center max-xl:rounded-md"
              style={{
                backgroundImage: `url(${images[1]?.link || image})`,
              }}
            ></div>
            <div
              className="w-full h-full rounded-tr-xl bg-cover bg-center max-xl:rounded-md"
              style={{
                backgroundImage: `url(${images[2]?.link || image})`,
              }}
            ></div>
            <div
              className="w-full h-full bg-cover bg-center max-xl:rounded-md"
              style={{
                backgroundImage: `url(${images[3]?.link || image})`,
              }}
            ></div>
            <div
              className="w-full h-full rounded-br-xl bg-cover bg-center max-xl:rounded-md"
              style={{
                backgroundImage: `url(${images[4]?.link || image})`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Modal para visualização em tela cheia */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button onClick={closeModal} className="absolute top-3 right-4 text-white bg-red-600 p-2 rounded-full">
            X
          </button>
          <div className="relative w-full h-[80%] flex items-center justify-center">
            <img src={images[currentImageIndex]?.link || image} alt="Imagem em tela cheia" className="max-w-full max-h-full object-contain" />
            <button onClick={prevImage} className="absolute left-4 text-white bg-gray-800 p-2 rounded-full">
              {"<"}
            </button>
            <button onClick={nextImage} className="absolute right-4 text-white bg-gray-800 p-2 rounded-full">
              {">"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
