import { IsNotEmpty, IsString, IsOptional, IsEmail } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";


export class AlteraUsuarioDTO {
    @IsString()
    @IsNotEmpty({ message: "Nome não pode ser vazio" })
    NOME: string;

    @IsString()
    @IsNotEmpty({ message: "Nome não pode ser vazio" })
    SOBRENOME: string;

    @IsEmail(undefined,{message: "Email invalido"})
    @EmailUnico({message: "Já existe usuário com este email cadastrado"})
    @IsOptional()
    EMAIL: string;

    @IsEmail(undefined,{message: "Email invalido"})
    @EmailUnico({message: "Já existe usuário com este email cadastrado"})
    @IsOptional()
    CONFIRMAEMAIL: string;

    @IsString()
    @IsOptional()
    TELEFONEUM: string;

    @IsString()
    @IsOptional()
    TELEFONEDOIS: string;

    @IsString()
    @IsOptional()
    LOGIN: string;

    @IsString()
    @IsOptional()
    SENHA: string;

}