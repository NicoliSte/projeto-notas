import data, { ITEMS_PER_PAGE } from "./../data/data";


function Paginacao({ page, handlePreviousPage, handleNextPage, setPage }) {
    return (
      <div className="pagination">
        <button
          className="btn-paginacao"
          onClick={handlePreviousPage}
          disabled={page === 0}
        >
          Anterior
        </button>
        <button
          className="btn-paginacao"
          onClick={handleNextPage}
          disabled={page >= Math.ceil(data.length / ITEMS_PER_PAGE) - 1}
        >
          Próximo
        </button>
        {/* Adiciona os botões numerados */}
        {Array.from(
          { length: Math.ceil(data.length / ITEMS_PER_PAGE) },
          (_, i) => (
            <button
              className={`btn-paginacao ${page === i ? "active" : ""}`}
              onClick={() => setPage(i)}
              key={i}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    );
  }
  
  export default Paginacao;