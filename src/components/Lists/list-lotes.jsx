import { CardLote } from "../Cards/card-lote";
import { useEffect, useState } from "react";

export function ListLotes() {
  const [lotes, setLotes] = useState([]);

  useEffect(() => {
    fetch("https://leilaopdttech.azurewebsites.net/api/Allotments/ListarLotes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLotes(data); // Armazena os dados no estado
        console.log(data); // Verifica os dados recebidos
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  return (
    <>
      <div className="container grid grid-cols-5 mt-7 mb-7 gap-5">
        {lotes.map((lote) => (
          <CardLote key={lote.id} {...lote} /> // Ajuste conforme a estrutura dos dados
        ))}
      </div>
    </>
  );
}
