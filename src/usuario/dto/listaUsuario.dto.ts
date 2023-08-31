export class ListaUsuarioDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly sobrenome: string,
        readonly email: string,
        readonly confirmaemail: string,
        readonly telefoneum: string,
        readonly telefonedois: string,
        readonly login: string,
        readonly senha: string
    ){}
}