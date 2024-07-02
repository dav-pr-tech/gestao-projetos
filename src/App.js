import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestão de Projetos - Acadêmicos</h1>
      </header>
      <main>
        <div className="buttons-container">
          <button onClick={() => window.location.href='http://example.com'}>Projeto 1</button>
          <button onClick={() => window.location.href='http://example.com'}>Projeto 2</button>
          <button onClick={() => window.location.href='http://example.com'}>Projeto 3</button>
          {/* Adicione mais botões conforme necessário */}
        </div>
      </main>
    </div>
  );
}

export default App;
