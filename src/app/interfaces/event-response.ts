export interface EventResponseApi {
  id: number;
  createdAt: Date;
  descripcion: string;
  tipoEvento: TipoEventoType;
}

interface TipoEventoType {
  id: number;
  name: string;
}
