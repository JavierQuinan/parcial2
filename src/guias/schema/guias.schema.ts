import mongoose from 'mongoose';

export const GuiaSchema = new mongoose.Schema(
  {
    ID_Guia: { type: Number, required: true },
    Nombre: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
