import { IsNotEmpty, IsString, IsEmail, MinLength, IsInt, IsOptional } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";


export class AlteraFuncionarioDTO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    @IsOptional()
    nomecompleto: string;

    @IsString()
    @IsNotEmpty({message: "Cargo não pode ser vazio"})
    @IsOptional()
    cargo: string;

    @IsEmail(undefined,{message: "Email invalido"})
    @EmailUnico({message: "Já existe funcionário com este email cadastrado"})
    @IsOptional()
    email: string;
    
    @IsString({message: "Telefone inválido"})
    @IsOptional()
    telefoneum: string;

    @IsString()
    @IsNotEmpty({message: "Departamento não pode ser vazio"})
    @IsOptional()
    departamento: string;


}