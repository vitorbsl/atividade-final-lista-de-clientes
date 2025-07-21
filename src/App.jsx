import React, { useState, useEffect } from 'react';
import ClientForm from './components/ClientForm';
import ClientList from './components/ClientList';

function App() {
  const [clientes, setClientes] = useState(() => {
    const dadosSalvos = localStorage.getItem('clientes');
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });

  const [abaSelecionada, setAbaSelecionada] = useState('form');
  const [carregando, setCarregando] = useState(true);
  const [idNovoCliente, setIdNovoCliente] = useState(null);

  useEffect(() => {
    setTimeout(() => setCarregando(false), 500);
  }, []);

  useEffect(() => {
    localStorage.setItem('clientes', JSON.stringify(clientes));
  }, [clientes]);

  const adicionarCliente = (cliente) => {
    const novoCliente = { ...cliente, id: Date.now() };
    setClientes([novoCliente, ...clientes]);
    setIdNovoCliente(novoCliente.id);
    setTimeout(() => setIdNovoCliente(null), 2000);
  };

  const limparTodosClientes = () => {
    const confirmar = window.confirm('Tem certeza que deseja remover todos os clientes?');
    if (confirmar) {
      setClientes([]);
      localStorage.removeItem('clientes');
    }
  };

  const trocarAba = (aba) => {
    setCarregando(true);
    setTimeout(() => {
      setAbaSelecionada(aba);
      setCarregando(false);
    }, 300);
  };

  return (
    <div className="container">
      <h1>Registro de Cliente</h1>
      <div className="botoes">
        <button
          className={`registrar-clientes ${abaSelecionada === 'form' ? 'ativo' : ''}`}
          onClick={() => trocarAba('form')}
        >
          Registrar Clientes
        </button>
        <button
          className={`ver-clientes ${abaSelecionada === 'lista' ? 'ativo' : ''}`}
          onClick={() => trocarAba('lista')}
        >
          Ver clientes
        </button>
        <button className="limpar-clientes" onClick={limparTodosClientes}>
          Limpar Tudo
        </button>
      </div>

      {carregando ? (
        <div className="spinner"></div>
      ) : (
        <div className="conteudo-aba fade-in">
          {abaSelecionada === 'form' ? (
            <ClientForm onAddClient={adicionarCliente} />
          ) : (
            <ClientList clientes={clientes} idNovoCliente={idNovoCliente} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
