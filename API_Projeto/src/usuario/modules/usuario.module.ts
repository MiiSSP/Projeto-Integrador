import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { usuarioController } from "../controllers/usuario.controller";
import { Usuario } from "../entities/usuario.entity";
import { usuarioService } from "../services/usuario.service";


@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [usuarioService],
    controllers: [usuarioController],
    exports: [TypeOrmModule]
})
export class usuarioModule{}