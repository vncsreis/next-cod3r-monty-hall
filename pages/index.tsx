import { useState } from 'react';

import Porta from '../components/Porta';
import { atualizarPortas, criarPortas } from '../functions/portas';

const Home = () => {
  const [portas, setPortas] = useState(criarPortas(4, 3));

  const renderizarPortas = () =>
    portas.map((porta) => (
      <Porta
        key={porta.numero}
        value={porta}
        onChange={(novaPorta) => {
          setPortas(atualizarPortas(portas, novaPorta));
        }}
      />
    ));

  return <div style={{ display: 'flex' }}>{renderizarPortas()}</div>;
};

export default Home;
