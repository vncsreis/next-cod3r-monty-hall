import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../../../styles/Jogo.module.css';
import Porta from '../../../components/Porta';
import { atualizarPortas, criarPortas } from '../../../functions/portas';

const Jogo = () => {
  const router = useRouter();

  const [portas, setPortas] = useState([]);

  useEffect(() => {
    const portasQtd = +router.query.portas;
    const temPresente = +router.query.temPresente;
    setPortas(criarPortas(portasQtd, temPresente));
  }, [router?.query]);

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
