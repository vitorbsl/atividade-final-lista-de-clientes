import React from 'react';

function ClientList({ clientes, idNovoCliente }) {
  if (clientes.length === 0) {
    return <p>Nenhum cliente cadastrado.</p>;
  }

  return (
    <ul>
      {clientes.map((cliente) => (
        <li key={cliente.id} className={cliente.id === idNovoCliente ? 'novo' : ''}>
          <p><strong>{cliente.nome}</strong></p>
          <p><strong>Telefone:</strong> {cliente.telefone}</p>
          {cliente.observacoes && (
            <p><strong>Observações:</strong> {cliente.observacoes}</p>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ClientList;
