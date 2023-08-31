import { IsNotEmpty, IsString, IsEmail, MinLength} from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";


export class CriaUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    nome: string;

    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    sobrenome: string;

    @IsEmail(undefined,{message: "Email invalido"})
    @EmailUnico({message: "Já existe usuário com este email cadastrado"})
    email: string;

    @IsEmail(undefined,{message: "Email invalido"})
    @EmailUnico({message: "Já existe usuário com este email cadastrado"})
    confirmaemail: string;

    @IsString({message: "Telefone inválido"})
    telefoneum: string;

    @IsString({message: "Telefone inválido"})
    telefonedois: string;

    @IsString()
    @IsNotEmpty({message: "Login não pode estar vazio"})
    login: string;

    @MinLength(4,{message: "Tamanho da senha inválido"})
    senha: string;
    

}