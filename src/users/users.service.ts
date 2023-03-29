import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) 
    private userModel: Model<User>) { }
    
    async create(createUserDto: CreateUserDto) {
      try {
        const saltRounds = await bcrypt.genSalt();
        const password = createUserDto.password;
        const hash = await bcrypt.hash(password, saltRounds);
  
        const user = Object.assign(createUserDto, {
          password: hash,
        });
  
        const newUser = await new this.userModel(user).save();
        const response = this.findOne(newUser._id.toString());
        return response;
      } catch (error) {
        //Esse handleError vem do arquivo BaseService que não existe ainda nesse projeto
        this.handleError(error);
      }
    }     
  }

  

  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
//}
