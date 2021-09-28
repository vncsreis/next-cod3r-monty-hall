import styles from '../../styles/Cartao.module.css';

interface CartaoProps {
  bgColor?: string;
  children?: string | JSX.Element;
}

const Cartao = (props: CartaoProps) => (
  <div
    className={styles.cartao}
    style={{
      backgroundColor: props.bgColor,
    }}
  >
    {props.children}
  </div>
);

Cartao.defaultProps = {
  bgColor: '#fff',
  children: '',
};

export default Cartao;
