import mongoose from 'mongoose';

export const ViajeSchema = new mongoose.Schema(
  {
    ID_Viaje: { type: Number, required: true },
    ID_Destino: { type: Number, required: true },
    ID_Guia: { type: Number, required: true },
    Fecha: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);
