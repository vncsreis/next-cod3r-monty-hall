import Link from 'next/link';
import styles from '../styles/Formulario.module.css';

import Cartao from '../components/Cartao';

const Formulario = () => (
  <div className={styles.formulario}>
    <div>
      <Cartao bgColor="#c0392c">Monty Hall</Cartao>
      <Cartao />
    </div>
    <div>
      <Cartao />
      <Cartao bgColor="#28a085">
        <Link href="/jogo/4/2">
          <p className={styles.link}>Iniciar</p>
        </Link>
      </Cartao>
    </div>
  </div>
);

export default Formulario;
