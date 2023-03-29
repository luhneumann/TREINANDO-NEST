import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document{
    @Prop({type: Number, required: true })
    id: number;

    @Prop({type: String, required: true })
    nome: string;

    @Prop({type: String, required: true })
    idade: string;
}

export const UserSchema = SchemaFactory.createForClass(User)

