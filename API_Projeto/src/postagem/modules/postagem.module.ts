import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { postagemController } from "../controllers/postagem.controller";
import { Postagem } from "../entities/postagem.entity";
import { postagemService } from "../services/postagem.service";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],
    providers: [postagemService],
    controllers: [postagemController],
    exports: [TypeOrmModule]
})
export class postagemModule{}