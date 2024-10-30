import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { GridImage } from "../Cards/grid-images";
import { Button } from "../ui/button";
import { Header } from "../Layout/header";
import { CircleCheckBig } from "lucide-react";
import { BreadCrumb } from "../Cards/breadcrumb";
import { FileCheck2, MapPin, House, Landmark, Share, ChevronLeft, Heart } from "lucide-react";
import { Separator } from "../ui/separator";
import { ValorLote } from "../Cards/card-valor-lote";

export function PaginaLote() {
  const { id } = useParams(); // Pega o id da URL
  const navigate = useNavigate(); // Define navigate
  const [lote, setLote] = useState(null); // Estado para armazenar os dados
  const [isLoading, setIsLoading] = useState(true); // Estado para gerenciar o carregamento

  useEffect(() => {
    getLote();
    async function getLote() {
      fetch(`https://apipdttechleilao.azurewebsites.net/api/Allotments/ListarLotePorId/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setLote(data); // Armazena os dados no estado
          setIsLoading(false); // Indica que o carregamento terminou
        })
        .catch((error) => {
          console.error("Erro ao buscar dados:", error);
          setIsLoading(false); // Mesmo em caso de erro, o carregamento deve parar
        });
    }
    // Faz a requisição com o id concatenado na URL
  }, [id]); // Adiciona o id como dependência

  return (
    <>
      <Header />
      <div className="container w-full max-w-[1344px] mt-4">
        <Button variant="outline" className="" onClick={() => navigate(-1)}>
          <ChevronLeft strokeWidth={1} size={17} />
          <span className="ml-2">Voltar</span>
        </Button>

        {isLoading ? (
          <p>Carregando dados...</p> // Exibe mensagem enquanto os dados são carregados
        ) : (
          <>
            {lote && (
              <div>
                <GridImage images={lote.auctionImages}></GridImage>
                <div className="flex items-center justify-between w-full p-3">
                  <BreadCrumb></BreadCrumb>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center justify-center gap-2">
                      <Share size={15} strokeWidth={2} />
                      <a href="">Compartilhar</a>
                    </div>
                    <div className="flex items-center justify-center  gap-2">
                      <Heart size={15} strokeWidth={2} />
                      <a href="">Salvar</a>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-start mt-4 max-lg:flex-col">
                  <div className="w-[50% max-lg:w-full">
                    <div>
                      <h1 className="text-[30px] font-medium">{lote.title}</h1>
                      <p className="text-[18px]">{lote.description}</p>
                      <div className="w-ful max-w-72 h-[55px] flex items-center justify-center gap-3 bg-[#B6FFED] mt-6">
                        <CircleCheckBig size={18} strokeWidth={1} />
                        <span className="text-[18px]">Imóvel {lote.occupationStatus}</span>
                      </div>
                      <div className="lg:hidden">
                        <ValorLote lote={lote} className="max-lg:hidden"></ValorLote>
                      </div>

                      <Separator className="my-8"></Separator>

                      <div>
                        <h3 className="font-medium text-[18px]">Documentos</h3>
                        <div className="flex items-center justify-start gap-3 mt-5">
                          <a href="" className="w-full max-w-48 flex justify-center items-center gap-3 border h-[42px] rounded">
                            <FileCheck2 size={15} strokeWidth={1} />
                            <span className="font-light text-[14px]">Matricula Imóvel</span>
                          </a>
                          <a href="" className="w-full max-w-48 flex justify-center items-center gap-3 border h-[42px] rounded">
                            <FileCheck2 size={15} strokeWidth={1} />
                            <span className="font-light text-[14px]">Edital de venda</span>
                          </a>
                        </div>
                        <p className="mt-4">Clique nos arquivos para fazer o download.</p>
                      </div>

                      <Separator className="my-8"></Separator>

                      <div className="flex items-start justify-start gap-8 mt-6">
                        <div className="mt-2">
                          <MapPin size={30} strokeWidth={1} />
                        </div>
                        <div>
                          <h4 className="font-medium text-[17px]">Localização</h4>
                          <p className="font-regular text-[14px] text-slate-400">{lote.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start justify-start gap-8 mt-6">
                        <div className="mt-2">
                          <House size={30} strokeWidth={1} />
                        </div>
                        <div>
                          <h4 className="font-medium text-[17px]">Tipo de imóvel</h4>
                          <p className="font-regular text-[14px] text-slate-400">{lote.category}</p>
                        </div>
                      </div>

                      <div className="flex items-start justify-start gap-8 mt-6">
                        <div className="mt-2">
                          <Landmark size={30} strokeWidth={1} />
                        </div>
                        <div>
                          <h4 className="font-medium text-[17px]">Banco do leilão</h4>
                          <p className="font-regular text-[14px] text-slate-400">Caixa /Código Origem: 8444403897530</p>
                        </div>
                      </div>

                      <div className="flex items-start justify-start gap-8 mt-6">
                        <div className="mt-2">
                          <FileCheck2 size={30} strokeWidth={1} />
                        </div>
                        <div>
                          <h4 className="font-medium text-[17px]">Matrícula</h4>
                          <p className="font-regular text-[14px] text-slate-400">{lote.registration}</p>
                        </div>
                      </div>

                      <Separator className="my-8"></Separator>

                      <div className="pb-40">
                        <h3 className="font-medium text-[18px]">Descrição Completa</h3>
                        <p>{lote.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[40%] flex items-start justify-end max-lg:hidden">
                    <ValorLote lote={lote}></ValorLote>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
