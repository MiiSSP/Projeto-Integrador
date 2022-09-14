import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Tema } from "../entities/tema.entity";


@Injectable()
export class temaService {

    constructor(
        @InjectRepository(Tema)
        private temaRepository: Repository<Tema>
    ) { }

    async findAll(): Promise<Tema[]> {
        return this.temaRepository.find({

        })
    }

    async findById(id: number): Promise<Tema> {
        let tema = await this.temaRepository.findOne({
            where: {
                id
            }

        })

        if (!tema)
            throw new HttpException('Tema não foi encontrado!', HttpStatus.NOT_FOUND)

        return tema
    }

    async findByNome(nome: string): Promise<Tema[]> {
        return this.temaRepository.find({
            where: {
                nome: ILike(`% ${nome} %`)
            },

        })
    }

    async create(tema: Tema): Promise<Tema> {
        return this.temaRepository.save(tema)
    }

    async update(tema: Tema): Promise<Tema> {

        let temaUpDate = await this.findById(tema.id)

        if (!temaUpDate || !tema.id)
            throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND)

        return this.temaRepository.save(tema)
    }

    async delete(id: number): Promise<DeleteResult> {

        let temaDelete = await this.findById(id)

        if (!temaDelete)
            throw new HttpException('Tema não foi encontrado!', HttpStatus.NOT_FOUND)

        return this.temaRepository.delete(id)

    }
}