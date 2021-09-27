import styles from '../../styles/Porta.module.css';
import PortaModel from '../../models/porta';

interface PortaProps {
  value: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
}

const Porta = (props: PortaProps) => {
  const porta = props.value;
  const selecionada = porta.selecionada ? styles.selecionada : '';

  // alternarSelecao chama o onChange que é passado na chamada do componente
  // no index.tsx, fornecendo uma nova porta
  // (gerada pelo alternarSelecao) como parâmetro

  const alternarSelecao = e => props.onChange(porta.alternarSelecao());

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>{porta.numero}</div>
          <div className={styles.macaneta} />
        </div>
      </div>
      <div className={styles.chao} />
    </div>
  );
}

export default Porta;
