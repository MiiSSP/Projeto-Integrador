import {Body, Controller, Delete, Get, HttpCode,HttpStatus, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import { Cadastro } from "../entities/cadastro.entity";
import { CadastroService } from "../services/cadastro.service";

@Controller('/cadastro')
export class CadastroController {

    constructor(private readonly service: CadastroService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Cadastro[]> {
        return this.service.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Cadastro> {
        return this.service.findById(id)
    }
    @Get('/genero/:genero')
    @HttpCode(HttpStatus.OK)
    findByGenero(@Param('genero') genero: string): Promise<Cadastro[]> {
        return this.service.findByGenero(genero)
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Cadastro[]> {
        return this.service.findByNome(nome)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() cadastro: Cadastro): Promise<Cadastro> {
        return this.service.create(cadastro)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() cadastro: Cadastro): Promise<Cadastro> {
        return this.service.update(cadastro)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.service.delete(id)
    }

}