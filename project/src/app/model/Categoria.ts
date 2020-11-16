import { Produto} from './Produto'

export class Categoria{

    public id: number
    public descricao: string
    public deposito: string
    public pontos: number
    public produto: Produto[]

}