// ItemCardapio.jsx
import React from 'react';

// Recebemos 'nome' e 'preco' via desestruturação das props
export default function ItemCardapio({ nome, preco }) {
  const estiloCard = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px',
    margin: '8px 0',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderLeft: '5px solid #edaa25'
  };

  return (
    <div style={estiloCard}>
      <span style={{ fontWeight: '500' }}>{nome}</span>
      <span style={{ color: '#2e7d32', fontWeight: 'bold' }}>
        R$ {preco.toFixed(2)}
      </span>
    </div>
  );
}