// App.jsx
import ItemCardapio from './ItemCardapio';

export default function App() {
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
      <h1 style={{ textAlign: 'center', color: '#333', borderBottom: '2px solid #edaa25' }}>
        🍔 Nossa Lanchonete
      </h1>
      
      {/* Agora usamos o componente para exibir os dados */}
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <ItemCardapio nome="X-Burger Clássico" preco={25.00} />
        <ItemCardapio nome="X-Salada Especial" preco={28.50} />
        <ItemCardapio nome="Combo Bacon Supremo" preco={35.00} />
        <ItemCardapio nome="Batata Frita Grande" preco={18.00} />
        <ItemCardapio nome="Suco Natural 500ml" preco={12.00} />
      </div>
    </div>
  );
}