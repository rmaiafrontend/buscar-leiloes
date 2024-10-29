import { CardLote } from "../Cards/card-lote";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import CardLoading from "../Cards/loading-card";

export function ListLotes() {
  const [lotes, setLotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://apipdttechleilao.azurewebsites.net/api/Allotments/ListarLotes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLotes(data); // Armazena os dados no estado
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  return (
    <>
      <div className="container grid grid-cols-5 mt-7 mb-7 gap-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {loading ? (
          <>
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
          </>
        ) : (
          lotes.map((lote) => (
            <CardLote key={lote.id} {...lote} /> // Ajuste conforme a estrutura dos dados
          ))
        )}
      </div>
    </>
  );
}
