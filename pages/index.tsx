import { useState } from 'react';

import Porta from '../components/Porta';
import PortaModel from '../models/porta';

const Home = () => {
  const [p1, setP1] = useState(new PortaModel(1));

  return (
    <div style={{ display: 'flex' }}>
      <Porta value={p1} onChange={novaPorta => setP1(novaPorta)}/>
    </div>
  );
}

export default Home;