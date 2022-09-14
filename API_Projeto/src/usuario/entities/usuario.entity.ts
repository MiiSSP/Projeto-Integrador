import { IsNotEmpty, MaxLength } from "class-validator";
import { Cadastro } from "src/cadastro/entities/cadastro.entity";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'tb_usuario'})
export class Usuario{
   
    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @MaxLength(1000)
    @Column({nullable: false, length: 1000})
    nickname: string

    @OneToMany(() => Postagem, (postagem) => postagem.usuario,{
        onDelete: "CASCADE"
    })
    postagem: Postagem

    @OneToOne(() => Cadastro, (cadastro) => cadastro.usuario) 
    cadastro: Cadastro

}