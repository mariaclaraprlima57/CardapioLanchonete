import { useState } from 'react'

export default function App() {
  // 1. Definimos os itens do cardápio em um array
  const cardapio = [
    { id: 1, nome: "X-Burger Clássico", preco: 25.00 },
    { id: 2, nome: "X-Salada Especial", preco: 28.50 },
    { id: 3, nome: "Combo Bacon Supremo", preco: 35.00 },
    { id: 4, nome: "Batata Frita Grande", preco: 18.00 },
    { id: 5, nome: "Suco Natural 500ml", preco: 12.00 },
  ];

  // Estilos simples em constantes para manter o arquivo único e organizado
  const estilos = {
    container: { fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px' },
    titulo: { borderBottom: '2px solid #edaa25', paddingBottom: '10px' },
    lista: { listStyle: 'none', padding: 0 },
    item: { 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '10px 0', 
      borderBottom: '1px solid #eee' 
    },
    preco: { fontWeight: 'bold', color: '#2e7d32' }
  };

  return (
    <div style={estilos.container}>
      <h1 style={estilos.titulo}>🍔 Cardápio Lanchonete</h1>
      
      <ul style={estilos.lista}>
        {cardapio.map((item) => (
          <li key={item.id} style={estilos.item}>
            <span>{item.nome}</span>
            <span style={estilos.preco}>R$ {item.preco.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}