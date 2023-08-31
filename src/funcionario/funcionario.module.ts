import { Module } from "@nestjs/common";
import { FuncionarioController } from "./Funcionario.controller";
import { FuncionariosArmazenados } from "./funcionario.dm";
import { EmailUnicoValidator } from "./validacao/email-unico.validator";


@Module({
    controllers:[FuncionarioController],
    providers:[FuncionariosArmazenados, EmailUnicoValidator]
})
export class FuncionarioModule{
}