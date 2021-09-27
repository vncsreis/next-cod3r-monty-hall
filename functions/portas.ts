import PortaModel from '../models/porta';

export const criarPortas = (qtde: number, temPresente: number): PortaModel[] =>
  Array.from({ length: qtde }, (_, i) => {
    const numero = i + 1;
    const presente = numero === temPresente;
    return new PortaModel(numero, presente);
  });

export const atualizarPortas = (
  portas: PortaModel[],
  portaModificada: PortaModel
): PortaModel[] =>
  portas.map((portaAtual) => {
    const igualAModificada = portaAtual.numero === portaModificada.numero;
    if (igualAModificada) {
      return portaModificada;
    }
    return portaModificada.aberta ? portaAtual : portaAtual.desselecionar();
  });
