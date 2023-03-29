import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {
  User,
  UserSchema,
} from './entities/user.entity'
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';


@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:User.name,
        schema: UserSchema,
        collection: 'User',
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
