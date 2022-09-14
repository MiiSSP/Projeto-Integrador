import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { temaController } from "../controllers/tema.controllers";
import { Tema } from "../entities/tema.entity";
import { temaService } from "../services/tema.service";

@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [temaService],
    controllers: [temaController],
    exports: [TypeOrmModule]
})
export class temaModule{}