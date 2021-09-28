import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../../../styles/Jogo.module.css';
import Porta from '../../../components/Porta';
import { atualizarPortas, criarPortas } from '../../../functions/portas';

const Jogo = () => {
  const router = useRouter();

  const [valido, setValido] = useState(false);
  const [portas, setPortas] = useState([]);

  useEffect(() => {
    const portasQtd = +router.query.portas;
    const temPresente = +router.query.temPresente;

    const qtdePortasValida = portasQtd >= 3 && portasQtd <= 100;
    const temPresenteValido = temPresente >= 1 && temPresente <= portasQtd;

    setValido(qtdePortasValida && temPresenteValido);
  }, [portas, router.query.portas, router.query.temPresente]);

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
      <div className={styles.portas}>
        {valido ? renderizarPortas() : <h2>Valores Inválidos</h2>}
      </div>
      <div className={styles.botoes}>
        <Link passHref href="/">
          <button type="button">Reiniciar jogo</button>
        </Link>
      </div>
    </div>
  );
};

export default Jogo;
