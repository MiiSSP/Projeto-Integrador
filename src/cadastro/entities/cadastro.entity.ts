import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'tb_cadastro'})
export class Cadastro{
   
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number
    
    @IsNotEmpty()
    @MaxLength(1000)
    @Column({nullable: false, length: 1000})
    @ApiProperty()
    nome: string

    @IsNotEmpty()
    @MaxLength(1000)
    @Column({nullable: false, length: 1000})
    @ApiProperty()
    email: string

    @IsNotEmpty()
    @MaxLength(1000)
    @Column({nullable: false, length: 1000})
    @ApiProperty()
    genero: string

    @IsNotEmpty()
    @Column()
    @ApiProperty()
    dataNasc: Date

    @IsNotEmpty()
    @MaxLength(8)
    @Column({nullable: false, length: 8})
    @ApiProperty()
    senha: string

    @OneToOne(() => Usuario, (usuario) => usuario.cadastro)
    @JoinColumn()
    @ApiProperty ({type:() => Usuario})
    usuario: Usuario
   
}