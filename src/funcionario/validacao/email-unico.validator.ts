import { Injectable } from "@nestjs/common/decorators";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { FuncionarioService } from "../funcionario.service";


@Injectable()
@ValidatorConstraint({async: true})
export class EmailUnicoValidator implements ValidatorConstraintInterface{
    constructor (private FuncionariosService: FuncionarioService){}

    async validate(value: any, ValidationArguments?: ValidationArguments): Promise<boolean> {
        const validarEmail = await this.FuncionariosService.validaEmail(value);
        return !validarEmail;
    }
}

export const EmailUnico = (opcaoValidacao: ValidationOptions) =>{
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcaoValidacao,
            constraints: [],
            validator: EmailUnicoValidator
        })
    }
}