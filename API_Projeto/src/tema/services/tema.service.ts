import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Tema } from "../entities/tema.entity";


@Injectable()
export class TemaService {

    constructor(
        @InjectRepository(Tema)
        private temaRepository: Repository<Tema>
    ) {}

    async findAll(): Promise<Tema[]> 
    {
        return this.temaRepository.find
        ({ 
            relations: 
            {
                postagem: true
            }
        })
    }

    async findById(id: number): Promise<Tema> 
    {
        let tema = await this.temaRepository.findOne
        ({
            where: 
            {
                id
            },

            relations: 
            {
                postagem: true
            }
        })

        if (!tema)
            throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND)

        return tema
    }

    async findByNome(nome: string): Promise<Tema[]> 
    {
        return this.temaRepository.find
        ({
            where: 
            {
                nome: ILike(`%${nome}%`)
            },

            relations: 
            {
                postagem: true
            }
        })
    }

    async create(tema: Tema): Promise<Tema> 
    {
        return this.temaRepository.save(tema)
    }

    async update(tema: Tema): Promise<Tema> 
    {
        let temaUpdate = await this.findById(tema.id)

        if (!temaUpdate)
            throw new HttpException('Tema Inexistente!', HttpStatus.NOT_FOUND)

        if (!tema.id)
            throw new HttpException('ATENÇÃO!! Informe o Id do Tema!!', HttpStatus.NOT_FOUND)

        return this.temaRepository.save(tema)
    }

    async delete(id: number): Promise<DeleteResult> 
    {
        let temaDelete = await this.findById(id)

        if (!temaDelete)
            throw new HttpException('Tema Inexistente!', HttpStatus.NOT_FOUND)

        return this.temaRepository.delete(id)
    }
}