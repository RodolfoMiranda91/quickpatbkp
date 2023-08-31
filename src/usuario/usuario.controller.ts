import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CriaUsuarioDTO } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { UsuariosArmazenados } from "./usuario.dm";
import { v4 as uuid} from "uuid";
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
import { AlteraUsuarioDTO } from "./dto/atualizaUsuario.dto";
import { Delete } from "@nestjs/common/decorators";

@Controller('/usuarios')


export class UsuarioController{

    constructor(private clsUsuariosArmazenados : UsuariosArmazenados ){
    }   


    @Get()
    async RetornoUsuarios(){
        const usuariosListados = await this.clsUsuariosArmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome,
                usuario.sobrenome,
                usuario.email,
                usuario.confirmaemail,
                usuario.telefoneum,
                usuario.telefonedois,
                usuario.login,
                usuario.senha
            )
        );
        return listaRetorno;
    }

    @Get('/:id')
    async retornoUsuarioId(@Param('id') id: string){
        const usuarioporid = await this.clsUsuariosArmazenados.retornoUsuarioId(id);
        return({
            usuario: usuarioporid,
            message: 'Usuário solicitado'
        })
    }


    @Post()
    async criaUsuario(@Body() dadosUsuario: CriaUsuarioDTO){

        var usuario = new UsuarioEntity (uuid(),dadosUsuario.nome,dadosUsuario.sobrenome,dadosUsuario.email,dadosUsuario.confirmaemail,dadosUsuario.telefoneum,dadosUsuario.telefonedois,dadosUsuario.login,dadosUsuario.senha)

        var retornoUsuario;
        
        this.clsUsuariosArmazenados.AdicionarUsuario(usuario);
        retornoUsuario={
            id: usuario.id,
            message: "Usuário Criado" 
        }
        return retornoUsuario;
    }

    @Put('/:id')
    async atualizaUsuario (@Param('id') id: string, @Body() novosDados: AlteraUsuarioDTO){
        const usuarioAtualizado = await this.clsUsuariosArmazenados.atualizaUsuario(id, novosDados)
        return({
            usuario: usuarioAtualizado,
            message: 'Usuário atualizado'
        })
    }    
    
    @Delete('/:id')
    async removeUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.clsUsuariosArmazenados.removeUsuario(id);
        return({
            usuario: usuarioRemovido,
            message: 'Usuário removido'
        })
    }
}
