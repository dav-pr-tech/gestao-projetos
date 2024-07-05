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
          <button onClick={() => window.location.href='https://dav-pr-tech.github.io/projeto-beneficios-resultados/'}>Benefícios-resultados</button>
          <button onClick={() => window.location.href='https://davg505.github.io/cronograma-projeto/'}>EAP-Cronograma</button>
          <button onClick={() => window.location.href='https://dav-pr-tech.github.io/projeto-v-m-v/'}>Visão Missão e Valores </button>
          <button onClick={() => window.location.href='https://davg505.github.io/financial-indicators/'}>Análise de Viabilidade Financeira </button>
          <button onClick={() => window.location.href='https://davg505.github.io/risk-management/'}>Gerenciamento de Riscos </button>
          <button onClick={() => window.location.href='https://dav-pr-tech.github.io/gestao-qualidade-projetos/'}>Gestão da Qualidade em Projetos</button>
          <button onClick={() => window.location.href='https://dav-pr-tech.github.io/gerenciamento-recursos/'}>Gerenciamento de Recursos</button>
          <button onClick={() => window.location.href='https://dav-pr-tech.github.io/projeto-gerenciamento-comunicacao/'}>Gerenciamento de Comunicação em Projetos</button>
          <button onClick={() => window.location.href='https://dav-pr-tech.github.io/sistema-aquisicoes/'}>Gerenciamento das Aquisições</button>
          {/* Adicione mais botões conforme necessário */}
        </div>
      </main>
    </div>
  );
}

export default App;
