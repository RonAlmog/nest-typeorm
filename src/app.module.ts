import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { dataSourceOptions } from '../db/datasource';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CatModule, TypeOrmModule.forRoot(dataSourceOptions), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
