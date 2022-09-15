import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cadastro } from './cadastro/entities/cadastro.entity';
import { CadastroModule } from './cadastro/modules/cadastro.module';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/modules/postagem.module';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/modules/tema.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/modules/usuario.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Root1234',
      database: 'db_projeto',
      entities: [Postagem, Tema, Cadastro, Usuario],
      synchronize: true
}),
    PostagemModule,
    TemaModule,
    CadastroModule,
    UsuarioModule
],
controllers: [],
providers: [],
})
export class AppModule {}
