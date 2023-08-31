import { Injectable } from "@nestjs/common/decorators";
import { FuncionarioEntity } from "./funcionario.entity";


@Injectable()
export class FuncionariosArmazenados {
    #Funcionarios: FuncionarioEntity[] = [];

    AdicionarFuncionario(funcionario: FuncionarioEntity){
        this.#Funcionarios.push(funcionario);
    }

    get Funcionarios(){
        return this.#Funcionarios
    }

    async validaEmail(email: string){
        const possivelfuncionario = this.#Funcionarios.find(
            funcionario => funcionario.email === email
        );
        return (possivelfuncionario!== undefined);
    }


    private buscaPorID(id: string){
        const possivelfuncionario = this.#Funcionarios.find(
            Funcionariosalvo => Funcionariosalvo.id === id
        );

        if (!possivelfuncionario){
            throw new Error('funcionario não encontrado')
        }
        return possivelfuncionario
    }

    async retornoFuncionarioId(id: string){
        const possivelfuncionario = this.#Funcionarios.find(
            Funcionariosalvo => Funcionariosalvo.id === id
        );

        if (!possivelfuncionario){
            throw new Error('funcionario não encontrado')
        }
        return possivelfuncionario
    }

    

    async atualizaFuncionario(id: string, dadosAtualizacao: Partial<FuncionarioEntity>){
        const funcionario = this.buscaPorID(id);

        Object.entries(dadosAtualizacao).forEach(
            ([chave, valor]) => {
                if (chave === 'id'){
                    return;
                }

                funcionario[chave] = valor;
            }
            )

        return funcionario;
    }
    
    async removeFuncionario(id: string){
        const funcionario = this.buscaPorID(id);

        this.#Funcionarios = this.#Funcionarios.filter(
            Funcionariosalvo => Funcionariosalvo.id !== id
        )

        return funcionario;
    }

}