export interface Viaje extends Document {
    ID_Viaje: number; 
    ID_Destino: number; 
    ID_Guia: number; 
    Fecha: Date; 
  }
  
export interface Destino extends Document {
    ID_Destino: number;
    Nombre: string; 
    Pais: string; 
  }

export interface Guia extends Document {
    ID_Guia: number; 
    Nombre: string; 
  } 

  export interface Turista extends Document {
    ID_Turista: number; 
    Nombre: string;  
    ID_Viaje: number; 
  } 