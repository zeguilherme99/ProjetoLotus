import { Categoria} from './Categoria'

export class Produto{

    public id: number;
    public nome: string;
    public valor: number;
    public material: string;
    public quantidade: number;
    public categoria: Categoria;
    public data: Date
    
}