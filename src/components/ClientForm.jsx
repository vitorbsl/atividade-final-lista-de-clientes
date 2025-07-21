import React, { useState } from 'react';

function ClientForm({ onAddClient }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [observacoes, setObservacoes] = useState('');

const formatPhone = (value) => {
  const cleaned = value.replace(/\D/g, '').slice(0, 11);
  if (cleaned.length <= 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').trim();
  }
  return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').trim();
};

const isPhoneValid = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  return /^\d{10,11}$/.test(cleaned);
};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !telefone) {
      alert('Nome e telefone são obrigatórios');
      return;
    }
     if (!isPhoneValid(telefone)) {
      alert('Telefone inválido. Digite apenas números com 10 ou 11 dígitos.');
      return;
    }

    onAddClient({ nome, telefone, observacoes });

    setNome('');
    setTelefone('');
    setObservacoes('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="titulo-form">Nome*</label>
      <input placeholder="Vitor Basilio" value={nome} onChange={(e) => setNome(e.target.value)} />


      <label className="titulo-form">Telefone*</label>
      <input placeholder="(31) 99999-9999" value={telefone} onChange={(e) => setTelefone(formatPhone(e.target.value))} maxLength={15} />


      <label className="titulo-form">Observações</label>
      <textarea value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />

      <button type="submit" className="btn-add">Adicionar</button>
    </form>
  );
}

export default ClientForm;
