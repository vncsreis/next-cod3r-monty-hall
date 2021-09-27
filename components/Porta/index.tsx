import styles from '../../styles/Porta.module.css';
import PortaModel from '../../models/porta';

interface PortaProps {
  value: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
}

const Porta = (props: PortaProps) => {
  const porta = props.value;
  const selecionada = porta.selecionada && !porta.aberta? styles.selecionada : '';

  // alternarSelecao chama o onChange que é passado na chamada do componente
  // no index.tsx, fornecendo uma nova porta
  // (gerada pelo alternarSelecao) como parâmetro

  const alternarSelecao = e => props.onChange(porta.alternarSelecao());

  // onChange serve para renderizar nova porta com
  // a mudança passada na função 
  const abrir = e => {
    e.stopPropagation();
    props.onChange(porta.abrir())
  };

  const renderizarPorta = () => {
    return (
        <div className={styles.porta}>
          <div className={styles.numero}>{porta.numero}</div>
          <div className={styles.macaneta} onClick={abrir}/>
        </div>
    )
  }

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        {porta.aberta ? false : renderizarPorta()}
      </div>
      <div className={styles.chao} />
    </div>
  );
}

export default Porta;
