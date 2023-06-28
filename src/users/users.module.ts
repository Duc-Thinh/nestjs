import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/database/database.providers';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, ...databaseProviders],
})
export class UsersModule {}
