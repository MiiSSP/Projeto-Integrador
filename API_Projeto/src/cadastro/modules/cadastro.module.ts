import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { cadastroController } from "../controllers/cadastro.controller";
import { Cadastro } from "../entities/cadastro.entity";
import { cadastroService } from "../services/cadastro.service";

@Module({
    imports: [TypeOrmModule.forFeature([Cadastro])],
    providers: [cadastroService],
    controllers: [cadastroController],
    exports: [TypeOrmModule]
})
export class cadastroModule {}