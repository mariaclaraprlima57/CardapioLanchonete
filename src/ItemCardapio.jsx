export default function ItemCardapio({ nome, preco, onAdicionar }) {
  return (
    <div style={{ 
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '12px', margin: '8px 0', backgroundColor: '#fff', 
      borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
    }}>
      <div>
        <span style={{ fontWeight: '500' }}>{nome}</span> - 
        <span style={{ color: '#2e7d32' }}> R$ {preco.toFixed(2)}</span>
      </div>
      
      <button 
        onClick={onAdicionar} 
        style={{ padding: '5px 10px', cursor: 'pointer', backgroundColor: '#edaa25', border: 'none', borderRadius: '4px' }}
      >
        Adicionar Pedido
      </button>
    </div>
  );
}