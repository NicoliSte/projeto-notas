import { useMemo } from "react";
import data, { ITEMS_PER_PAGE } from "./../data/data";
import Paginacao from "./Paginacao";


function Notas({ data, page, handlePreviousPage, handleNextPage, setPage }) {
    // Ordena os dados pelo nome em ordem alfabética
    const sortedData = useMemo(
        () => [...data].sort((a, b) => a.nome.localeCompare(b.nome)),
        [data]
    );

    // Seleciona os itens a serem exibidos na página atual
    const itemsToDisplay = useMemo(
        () => sortedData.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE),
        [page, sortedData]
    );

    return (
        <div className="container">
                        
            <div className="notas-container">
            
                {/* Lista os itens selecionados para exibição */}
                <ul className="lista-notas">
                    {itemsToDisplay.map(({ nome, nota }) => (
                        <li
                            key={nome}
                            className="item-nota"
                            // Define a cor do nome de acordo com a nota
                            style={{ color: nota <= 5 ? "red" : "green" }}
                        >
                            <span className="nome">{nome}</span>
                            <span className="nota">{nota}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Notas;
