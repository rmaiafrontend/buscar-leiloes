import { CardLote } from "../Cards/card-lote";
import { useEffect, useState } from "react";
import CardLoading from "../Cards/loading-card";

export function ListLotesBusca({ estado, cidade, categoria }) {
  const [lotes, setLotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Valores padrões
    const defaultEstado = "Todos os estados";
    const defaultCidade = "Selecione uma cidade";
    const defaultCategoria = "Todos";

    // Monta a URL base
    const baseURL = "https://apipdttechleilao.azurewebsites.net/api/Allotments/BuscarPorEstadoCidadeCategoria";
    const queryParams = new URLSearchParams();

    // Adiciona parâmetros apenas se não forem os padrões
    if (estado && estado !== defaultEstado) {
      queryParams.append("estado", estado);
    }
    if (cidade && cidade !== defaultCidade) {
      queryParams.append("cidade", cidade);
    }
    if (categoria && categoria !== defaultCategoria) {
      queryParams.append("categoria", categoria);
    }

    // Monta a URL final
    const url = `${baseURL}?${queryParams.toString()}`;

    setLoading(true);

    // Faz a requisição à API
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar lotes");
        }
        return response.json();
      })
      .then((data) => {
        setLotes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [estado, cidade, categoria]);

  return (
    <div className="container grid grid-cols-5 mt-7 mb-7 gap-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
      {loading ? (
        <>
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
        </>
      ) : lotes.length > 0 ? (
        lotes.map((lote) => <CardLote key={lote.id} {...lote} />)
      ) : (
        <p>Nenhum lote encontrado para os filtros selecionados.</p>
      )}
    </div>
  );
}
