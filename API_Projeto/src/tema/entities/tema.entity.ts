import { IsNotEmpty, MaxLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'tb_tema'})
export class Tema{
   
    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @MaxLength(1000)
    @Column({nullable: false, length: 1000})
    nome: string


    @OneToMany(() => Postagem, (postagem) => postagem.tema,{
        onDelete: "CASCADE"
    })
    postagem: Postagem

}