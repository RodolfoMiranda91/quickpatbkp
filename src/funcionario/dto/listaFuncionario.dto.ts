export class ListaFuncionarioDTO{
    constructor(
        readonly id: string,
        readonly nomecompleto: string,
        readonly cargo: string,
        readonly email: string,
        readonly confirmaemail: string,
        readonly telefoneum: string,
        readonly departamento: string
    ){}
}