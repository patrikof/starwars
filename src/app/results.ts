export interface Results {
    name: string;
    birth_year: Date;
    gender: string;
    homeworld: string;
    species: Array<string>;    
}
export class Pessoa {
    nome: string;
    nascimento: Date;
    genero: string;
    raca: string;
    planeta: string;   
}