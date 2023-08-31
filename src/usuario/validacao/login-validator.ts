import { Injectable } from "@nestjs/common/decorators";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuariosArmazenados } from "../usuario.dm";

@Injectable()
@ValidatorConstraint({ async: true })
export class LoginValidator implements ValidatorConstraintInterface {
    constructor(private clsUsuariosArmazenados: UsuariosArmazenados) { }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const validarLogin = await this.clsUsuariosArmazenados.validaLogin(value);
        return !validarLogin;
    }
}

export const LoginUnico = (opcaoValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcaoValidacao,
            constraints: [],
            validator: LoginValidator
        })
    }
}