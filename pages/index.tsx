import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Formulario.module.css';

import Cartao from '../components/Cartao';
import EntradaNumerica from '../components/EntradaNumerica';

const Formulario = () => {
  const [qtdePortas, setQtdePortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor="#c0392c">Monty Hall</Cartao>
        <Cartao>
          <EntradaNumerica
            value={qtdePortas}
            onChange={(novaQtde) => setQtdePortas(novaQtde)}
            text="Quantidade de Portas?"
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica
            text="Porta com Presente?"
            value={comPresente}
            onChange={(novaPortaComPresente) =>
              setComPresente(novaPortaComPresente)
            }
          />
        </Cartao>
        <Cartao bgColor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
            <p className={styles.link}>Iniciar</p>
          </Link>
        </Cartao>
      </div>
    </div>
  );
};

export default Formulario;
