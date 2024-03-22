import mongoose from 'mongoose';

export const TuristaSchema = new mongoose.Schema(
  {
    ID_Turista: { type: Number, required: true },
    Nombre: { type: String, required: true },
    ID_Viaje: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);
