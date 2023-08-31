import { IsNotEmpty, IsString, IsEmail, MinLength, IsOptional } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";


export class AlteraUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    @IsOptional()
    nome: string;

    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    @IsOptional()
    sobrenome: string;

    @IsEmail(undefined,{message: "Email invalido"})
    @EmailUnico({message: "Já existe usuário com este email cadastrado"})
    @IsOptional()
    email: string;
    
    @IsString({message: "Telefone inválido"})
    @IsOptional()
    telefoneum: string;

    @IsString({message: "Telefone inválido"})
    @IsOptional()
    telefonedois: string;

    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    @IsOptional()
    login: string;

    @MinLength(4,{message: "Tamanho da senha inválido"})
    @IsOptional()
    senha: string;

}