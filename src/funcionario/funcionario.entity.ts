

export class FuncionarioEntity{
    id: string;
    nomecompleto: string;
    cargo: string;
    email: string;
    confirmaemail: string;
    telefoneum: string;
    departamento: string;

    constructor(id:string,nomecompleto: string,cargo: string,email: string,confirmaemail: string,telefoneum: string,departamento: string){
        this.id = id;
        this.nomecompleto = nomecompleto;
        this.cargo = cargo;
        this.email = email;
        this.confirmaemail = confirmaemail;
        this.telefoneum = telefoneum;
        this.departamento = departamento;
    }   
    
}