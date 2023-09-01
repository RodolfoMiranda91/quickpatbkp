import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { UsuarioController } from "./usuario.controller";
import { usuarioProviders } from "./usuario.providers";
import { UsuarioService } from "./usuario.service";
import { EmailUnicoValidator } from "./validacao/email-unico.validator";


@Module({
    imports: [DatabaseModule],
    controllers: [UsuarioController],
    providers: [
        ...usuarioProviders,
        UsuarioService,
        EmailUnicoValidator
    ]
})
export class UsuarioModule {

}