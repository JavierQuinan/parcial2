import mongoose from 'mongoose';

export const DestinoSchema = new mongoose.Schema(
  {
    ID_Destino: { type: Number, required: true },
    Nombre: { type: String, required: true },
    Pais: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
