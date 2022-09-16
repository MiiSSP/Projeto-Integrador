import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Tema } from "src/tema/entities/tema.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'tb_postagem'})
export class Postagem{
   
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number
    
    @IsNotEmpty()
    @MaxLength(1000)
    @Column({nullable: false, length: 1000})
    @ApiProperty()
    descricao: string

    @Column()
    @ApiProperty()
    imagem: string 


    @ManyToOne(() => Tema, (tema) => tema.postagem,
    {
        onDelete: "CASCADE"
    })
    @JoinColumn()
    @ApiProperty ({type:() =>Tema}) 
    tema: Tema

    @ManyToOne(() => Usuario, (usuario) => usuario.postagem,
    {
        onDelete: "CASCADE"
    })
    @JoinColumn()
    @ApiProperty ({type:() => Usuario}) 
    usuario: Usuario

}