export interface Agendamento {
  _id?: string;
  idUsuario: string;
  nomeUsuario?: string;
  idEvento: string;
  nomeEvento?: string;
  data: Date;
  hora: string;
}
