import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CriaFuncionarioDTO } from "./dto/funcionario";
import { FuncionarioEntity } from "./funcionario.entity";
import { FuncionariosArmazenados } from "./funcionario.dm";
import { v4 as uuid} from "uuid";
import { ListaFuncionarioDTO } from "./dto/listaFuncionario.dto";
import { AlteraFuncionarioDTO } from "./dto/atualizaFuncionario.dto";
import { Delete } from "@nestjs/common/decorators";

@Controller('/funcionarios')


export class FuncionarioController{

    constructor(private clsFuncionariosArmazenados : FuncionariosArmazenados ){
    }   


    @Get()
    async RetornoFuncionarios(){
        const funcionariosListados = await this.clsFuncionariosArmazenados.Funcionarios;
        const listaRetorno = funcionariosListados.map(
            funcionario => new ListaFuncionarioDTO(
                funcionario.id,
                funcionario.nomecompleto,
                funcionario.cargo,
                funcionario.email,
                funcionario.confirmaemail,
                funcionario.telefoneum,
                funcionario.departamento
            )
        );
        return listaRetorno;
    }

    @Get('/:id')
    async retornoFuncionarioId(@Param('id') id: string){
        const funcionarioporid = await this.clsFuncionariosArmazenados.retornoFuncionarioId(id);
        return({
            funcionario: funcionarioporid,
            message: 'Funcionário solicitado'
        })
    }


    @Post()
    async criaFuncionario(@Body() dadosFuncionario: CriaFuncionarioDTO){

        var funcionario = new FuncionarioEntity (uuid(),dadosFuncionario.nomecompleto,dadosFuncionario.cargo,dadosFuncionario.email,dadosFuncionario.confirmaemail,dadosFuncionario.telefoneum,dadosFuncionario.departamento)

        var retornoFuncionario;
        
        this.clsFuncionariosArmazenados.AdicionarFuncionario(funcionario);
        retornoFuncionario={
            id: funcionario.id,
            message: "Funcionário Criado" 
        }
        return retornoFuncionario;
    }

    @Put('/:id')
    async atualizaFuncionario (@Param('id') id: string, @Body() novosDados: AlteraFuncionarioDTO){
        const FuncionarioAtualizado = await this.clsFuncionariosArmazenados.atualizaFuncionario(id, novosDados)
        return({
            Funcionario: FuncionarioAtualizado,
            message: 'Funcionário atualizado'
        })
    }    
    
    @Delete('/:id')
    async removeFuncionario(@Param('id') id: string){
        const FuncionarioRemovido = await this.clsFuncionariosArmazenados.removeFuncionario(id);
        return({
            Funcionario: FuncionarioRemovido,
            message: 'Funcionário removido'
        })
    }
}
