import { useState } from 'react';

import Porta from '../components/Porta';
import { criarPortas } from '../functions/portas';
import PortaModel from '../models/porta';

const Home = () => {
  const [p1, setP1] = useState(new PortaModel(1));

  console.log(criarPortas(3, 2));

  return (
    <div style={{ display: 'flex' }}>
      <Porta value={p1} onChange={novaPorta => setP1(novaPorta)}/>
    </div>
  );
}

export default Home;
