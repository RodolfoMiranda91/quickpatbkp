import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { FuncionarioController } from "./funcionario.controller";
import { funcionarioProviders } from "./funcionario.providers";
import { FuncionarioService } from "./funcionario.service";
import { EmailUnicoValidator } from "./validacao/email-unico.validator";



@Module({
    imports: [DatabaseModule],
    controllers: [FuncionarioController],
    providers: [
      ...funcionarioProviders,
      FuncionarioService,
      EmailUnicoValidator,
    ],
  })
  export class FuncionarioModule {}