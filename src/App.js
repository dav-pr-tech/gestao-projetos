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
          <button onClick={() => window.location.href='https://dav-pr-tech.github.io/projeto-tap/'}>Termo de Abertura do Projeto – TAP</button>
          <button onClick={() => window.location.href='https://dav-pr-tech.github.io/projeto-escopo/'}>Escopo</button>
          <button onClick={() => window.location.href='https://dav-pr-tech.github.io/projeto-checklist/'}>Checklist</button>
          <button onClick={() => window.location.href='http://example.com'}>Benefícios-resultados</button>
          <button onClick={() => window.location.href='http://example.com'}>EAP</button>
          {/* Adicione mais botões conforme necessário */}
        </div>
      </main>
    </div>
  );
}

export default App;
