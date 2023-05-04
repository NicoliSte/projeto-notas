import React, { useState } from 'react';
import Notas from './Notas';
import Paginacao from './Paginacao';
import data, { ITEMS_PER_PAGE } from '../data/data';
import './../App.css';
import './../index.css';


function App() {
  // Define o estado da página atual
  const [page, setPage] = useState(0);

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <div className="App">
      <h1 >NOTAS DOS ALUNOS</h1>
      {/* Passa os dados, a página atual e as funções de navegação para o componente Notas */}
      <Notas
        data={data}
        page={page}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        setPage={setPage}
      />
      {/* Passa o número de páginas e a página atual para o componente Paginacao */}
      <Paginacao
        page={page}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;