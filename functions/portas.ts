import PortaModel from "../models/porta";

export const criarPortas = (qtde: number, temPresente: number): PortaModel[] => {
  return Array.from({length: qtde }, (_, i) => {
    const numero = i + 1;
    const presente = numero === temPresente;
    return new PortaModel(numero, presente);
  })
}
