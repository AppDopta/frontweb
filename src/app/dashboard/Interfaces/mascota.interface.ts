import { User } from "src/app/auth/interface";

export interface Mascota {

    usuario:{
        id: number;
        username: string;
        email: string;
    };
    titulo: string;
    fec_public: string;
    nom_mascota: string;
    especie: string;
    raza: string;
    sexo: 'H' | 'M';
    tamanio: string;
    edad: string;
    foto: string;

}