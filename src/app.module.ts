import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule }from '@nestjs/mongoose'
import { UserSchema } from './users/entities/user.entity';
import { UsersService } from './users/users.service';


@Module({
  imports: [
    UsersModule, 
    MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}])
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
