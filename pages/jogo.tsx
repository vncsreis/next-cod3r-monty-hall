import { useState } from 'react';
import Link from 'next/link';

import styles from '../styles/Jogo.module.css';
import Porta from '../components/Porta';
import { atualizarPortas, criarPortas } from '../functions/portas';

const Jogo = () => {
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

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>{renderizarPortas()}</div>
      <div className={styles.botoes}>
        <Link href="/">
          <button type="button">Reiniciar jogo</button>
        </Link>
      </div>
    </div>
  );
};

export default Jogo;
