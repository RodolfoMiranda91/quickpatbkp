import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";


export class CriaUsuarioDTO {
    @IsString()
    @IsNotEmpty({ message: "Nome não pode ser vazio" })
    NOME: string;

    @IsString()
    @IsNotEmpty({ message: "Nome não pode ser vazio" })
    SOBRENOME: string;

    @IsString()
    @EmailUnico({message: "Já existe usuário com este email cadastrado"})
    @IsOptional()
    EMAIL: string;

    @IsString()
    @EmailUnico({message: "Já existe usuário com este email cadastrado"})
    @IsOptional()
    CONFIRMAEMAIL: string;

    @IsString()
    TELEFONEUM: string;

    @IsString()
    TELEFONEDOIS: string;

    @IsString()
    LOGIN: string;

    @IsString()
    SENHA: string;

}