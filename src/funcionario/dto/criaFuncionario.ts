import { IsNotEmpty, IsString, IsEmail,  IsOptional} from "class-validator";
import { EmailUnico } from "src/funcionario/validacao/email-unico.validator";


export class CriaFuncionarioDTO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    @IsOptional()
    NOME_COMPLETO: string;

    @IsString()
    @IsNotEmpty({message: "Cargo não pode ser vazio"})
    @IsOptional()
    CARGO: string;

    @IsEmail(undefined,{message: "Email invalido"})
    @EmailUnico({message: "Já existe funcionário com este email cadastrado"})
    @IsOptional()
    EMAIL: string;

    @IsEmail(undefined,{message: "Email invalido"})
    @EmailUnico({message: "Já existe funcionário com este email cadastrado"})
    @IsOptional()
    CONFIRMAEMAIL: string;
    
    @IsString({message: "Telefone inválido"})
    @IsOptional()
    TELEFONEUM: string;

    @IsString()
    @IsNotEmpty({message: "Departamento não pode ser vazio"})
    @IsOptional()
    DEPARTAMENTO: string;
}