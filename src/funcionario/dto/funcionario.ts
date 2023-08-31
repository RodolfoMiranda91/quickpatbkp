import { IsNotEmpty, IsString, IsEmail, MinLength} from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";


export class CriaFuncionarioDTO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    nomecompleto: string;

    @IsString()
    @IsNotEmpty({message: "Cargo não pode ser vazio"})
    cargo: string;

    @IsEmail(undefined,{message: "Email invalido"})
    @EmailUnico({message: "Já existe funcionário com este email cadastrado"})
    email: string;

    @IsEmail(undefined,{message: "Email invalido"})
    @EmailUnico({message: "Já existe funcionário com este email cadastrado"})
    confirmaemail: string;

    @IsString({message: "Telefone inválido"})
    telefoneum: string;

    @IsString()
    @IsNotEmpty({message: "Departamento não pode estar vazio"})
    departamento: string;
    

}