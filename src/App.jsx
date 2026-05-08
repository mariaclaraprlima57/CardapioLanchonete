import { useState } from 'react';
import ItemCardapio from './ItemCardapio';

export default function App() {
  // Estado para o contador global
  const [totalPedidos, setTotalPedidos] = useState(0);

  // Função para aumentar o contador
  const adicionarAoTotal = () => setTotalPedidos(totalPedidos + 1);

  const containerEstilo = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  return (
    <div style={containerEstilo}>
      <h1 style={{ color: '#333' }}>🍔 Nossa Lanchonete</h1>
      
      {/* Exibição do total de pedidos */}
      <div style={{ background: '#edaa25', padding: '15px', borderRadius: '8px', marginBottom: '20px', fontWeight: 'bold' }}>
        Total de itens no pedido: {totalPedidos}
      </div>
      
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <ItemCardapio nome="X-Burger Clássico" preco={25.00} onAdicionar={adicionarAoTotal} />
        <ItemCardapio nome="X-Salada Especial" preco={28.50} onAdicionar={adicionarAoTotal} />
        <ItemCardapio nome="Combo Bacon Supremo" preco={35.00} onAdicionar={adicionarAoTotal} />
        <ItemCardapio nome="Batata Frita Grande" preco={18.00} onAdicionar={adicionarAoTotal} />
        <ItemCardapio nome="Suco Natural 500ml" preco={12.00} onAdicionar={adicionarAoTotal} />
      </div>
    </div>
  );
}