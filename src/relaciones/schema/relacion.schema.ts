import { Schema } from 'mongoose';

export const ViajeSchema = new Schema({
  ID_Viaje: { type: Number, required: true },
  ID_Destino: { type: Number, required: true },
  ID_Guia: { type: Number, required: true },
  Fecha: { type: Date, required: true }
});

export const DestinoSchema = new Schema({
  ID_Destino: { type: Number, required: true },
  Nombre: { type: String, required: true },
  Pais: { type: String, required: true }
});

export const GuiaSchema = new Schema({
  ID_Guia: { type: Number, required: true },
  Nombre: { type: String, required: true }
});

export const TuristaSchema = new Schema({
  ID_Turista: { type: Number, required: true },
  Nombre: { type: String, required: true },
  ID_Viaje: { type: Number, required: true }
});
