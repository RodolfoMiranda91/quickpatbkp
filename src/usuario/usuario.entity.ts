

export class UsuarioEntity {
    id: string;
    nome: string;
    sobrenome: string;
    email: string;
    confirmaemail: string;
    telefoneum: string;
    telefonedois: string;
    login: string;
    #senha: string;

    constructor(id: string, nome: string, sobrenome: string, email: string, confirmaemail: string, telefoneum: string, telefonedois: string, login: string, senha: string) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.confirmaemail = confirmaemail;
        this.telefoneum = telefoneum;
        this.telefonedois = telefonedois;
        this.login = login;
        this.#senha = senha;
    }

    get senha() {
        return this.#senha
    }

    // set senha(senhanova) {
    //     this.#senha = senhanova;
    // }
}