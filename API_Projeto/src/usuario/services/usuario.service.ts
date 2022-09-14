import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Usuario } from "../entities/usuario.entity";


@Injectable()
export class usuarioService {

    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>
    ) { }

    async findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find({

        })
    }

    async findById(id: number): Promise<Usuario> {
        let usuario = await this.usuarioRepository.findOne({
            where: {
                id
            }

        })

        if (!usuario)
            throw new HttpException('usuario não foi encontrado!', HttpStatus.NOT_FOUND)

        return usuario
    }

    async findByNome(nickname: string): Promise<Usuario[]> {
        return this.usuarioRepository.find({
            where: {
                nickname: ILike(`%${nickname}%`)
            },
            relations : {
                cadastro: true
            }
        })
    }

    async create(usuario: Usuario): Promise<Usuario> {
        return this.usuarioRepository.save(usuario)
    }

    async update(usuario: Usuario): Promise<Usuario> {

        let usuarioUpDate = await this.findById(usuario.id)

        if (!usuarioUpDate || !usuario.id)
            throw new HttpException('usuario não encontrado!', HttpStatus.NOT_FOUND)

        return this.usuarioRepository.save(usuario)
    }

    async delete(id: number): Promise<DeleteResult> {

        let usuarioDelete = await this.findById(id)

        if (!usuarioDelete)
            throw new HttpException('usuario não foi encontrado!', HttpStatus.NOT_FOUND)

        return this.usuarioRepository.delete(id)

    }
}