import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CadastroModule } from './cadastro/modules/cadastro.module';
import { PostagemModule } from './postagem/modules/postagem.module';
import { TemaModule } from './tema/modules/tema.module';
import { UsuarioModule } from './usuario/modules/usuario.module';
import { Postagem } from './postagem/entities/postagem.entity';
import { Tema } from './tema/entities/tema.entity';
import { Cadastro } from './cadastro/entities/cadastro.entity';
import { Usuario } from './usuario/entities/usuario.entity';


@Module({
  imports: [
    /*TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Root1234',
      database: 'db_projeto',
      entities: [Postagem, Tema, Cadastro, Usuario],
      synchronize: true
}),*/
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      logging: false,
      dropSchema: false,
      ssl:{rejectUnauthorized: false},
      synchronize: true,
      autoLoadEntities: true
}),
    PostagemModule,
    TemaModule,
    CadastroModule,
    UsuarioModule
],
controllers: [AppController],
providers: [],
})
export class AppModule {}
